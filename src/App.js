import React, { useEffect, useState } from 'react'
import './App.css'
import Player from './Player'
import Login from './Login'
import { getTokenUrl } from './spotify'
import { useDataLayerValue } from './DataLayer'
import SpotifyWebApi from 'spotify-web-api-js'

const spotify = new SpotifyWebApi()

function App() {

	const [{ user, token }, dispatch] = useDataLayerValue()

	useEffect(() => {
		const hash = getTokenUrl()
		window.location.hash = ''
		const _token = hash.access_token
		if (_token) {
			dispatch({
				type: 'SET_TOKEN',
				token: token
			})
			spotify.setAccessToken(token)
			spotify.getMe().then(user => {
				dispatch({
					type: 'SET_USER',
					user
				})
			})

			spotify.getUserPlaylists().then(playlist => {
				dispatch({
					type: 'SET_PLAYLIST',
					playlist
				})
			})

			spotify.getPlaylist('37i9dQZEVXcQTr4rmy9lLX').then(response => {
				dispatch({
					type: 'SET_DISCOVER_WEEKLY',
					discover_weekly: response
				})
			})

		}

	}, [])

	console.log(token)

	return (
		<div className="app">
			{token ? <Player spotify={spotify} /> : <Login />}
		</div>
	)
}

export default App