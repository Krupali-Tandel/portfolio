import React from 'react'
import './style.css'
import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Homepage = () => {
    return ( 
        <>
         <div className='main_container' >
            <div className='intro' >
                <div className='intro_container'>
                <h1 className='greet'> Hi, I am </h1> <h1 className='name1' > Krupali Tandel </h1> 
                </div>
                <p className='description' > Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur.Autem eligendi rerum delectus modi quisquam ? Illo ut quasi nemo ipsa cumque perspiciatis!Maiores minima consectetur.</p>
                </div >

            <div className='button_container' >
            <Button variant="outlined">Resume</Button> 
                <a href='https://github.com/Krupali-Tandel' target='_blank' ><GitHubIcon /> </a> 
                <a href='https://github.com/Krupali-Tandel' target='_blank' > <LinkedInIcon /></a> </div >

             </div>
</>
)
}