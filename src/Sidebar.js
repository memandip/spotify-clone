import React from 'react'
import {
    Home as HomeIcon,
    Search as SearchIcon,
    LibraryMusic as LibraryMusicIcon
} from '@material-ui/icons'
import './Sidebar.css'
import logo from './spotifylogo.jpg'
import SidebarOption from './SidebarOption'
import { useDataLayerValue } from './DataLayer'

function Sidebar() {
    const [{ playlist }, dispatch] = useDataLayerValue()

    return (
        <div className='sidebar'>
            <img className='sidebar__logo' src={logo}/>
            <SidebarOption title='Home' Icon={HomeIcon}/>
            <SidebarOption title='Search' Icon={SearchIcon}/>
            <SidebarOption title='Your Library' Icon={LibraryMusicIcon}/>

            <br />
            <strong className='sidebar__title'>PLAYLISTS</strong>
            <hr />
            
            {playlist?.items?.map(playlist => <SidebarOption title={playlist.name}/>)}
        </div>
    )
}

export default Sidebar
