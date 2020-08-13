import React from 'react'
import {
    PlayCircleOutline as PlayCircleOutlineIcon,
    SkipPrevious as SkipPreviousIcon,
    SkipNext as SkipNextIcon,
    Shuffle as ShuffleIcon,
    Repeat as RepeatIcon,
    PlaylistPlay as PlaylistPlayIcon,
    VolumeUp as VolumeUpIcon,
    VolumeDown as VolumeDownIcon,
} from '@material-ui/icons'
import './Footer.css'
import { Grid, Slider } from '@material-ui/core'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__left'>
                <img src='https://i.scdn.co/image/ab67616d00004851e09b89ebf4cbbc4cc85fb9c5' className='footer__albumlogo'/>
                <div className='footer_songInfo'>
                    <h4>Yeah</h4>
                    <p>Usher</p>
                </div>
            </div>
            <div className='footer__center'>
                <ShuffleIcon className='footer_green' />
                <SkipPreviousIcon className='footer__icon' />
                <PlayCircleOutlineIcon fontSize='large' className='footer__icon' />
                <SkipNextIcon className='footer__icon' />
                <RepeatIcon className='footer_green' />
            </div>
            <div className='footer__right'>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
