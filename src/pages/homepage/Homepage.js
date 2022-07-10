import React from 'react'
import './style.css'
import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ProjectContainer from './project/ProjectContainer';
import Footer from '../../shared/Components/Footer/Footer'
import SkillsContainer from './skills/SkillsContainer';
import AchiveContain from './achivements/AchiveContain'
export const Homepage = () => {
    return ( 
        <>
         <div className='main_container' >
            <div className='intro' >
                <div className='intro_container'>
                <h1 className='greet'> Hi, I am </h1> <h1 className='name1' > Krupali Tandel </h1> 
                </div>
                <p className='description' >Skilled in web development and cloud computing. I love exploring new
technologies. I have been a part of TECH SAKSHAM, as a trainee in cloud
computing. I am also a part of the google skill boost program.</p>
                </div >

            <div className='button_container' >
            <Button variant="outlined"><a href='https://drive.google.com/file/d/1ZeiXBoUgoNCrsnp5Dr4NXzYY_ZR3iEAU/view?usp=sharing' target = '_blank'>Resume</a></Button> 
                <a href='https://github.com/Krupali-Tandel' target='_blank' ><GitHubIcon /> </a> 
                <a href='https://github.com/Krupali-Tandel' target='_blank' > <LinkedInIcon /></a> </div >

             </div>
             <div className='project_container'><h1>PROJECTS </h1></div>
         <ProjectContainer />
         <div className = "skills_container">
         <h1>Skills</h1>
         <SkillsContainer /></div>
         <div className = "achive_container">
         <h1>Achievments </h1>
         <AchiveContain /></div>
         <div className = 'footer_Container'>
            <Footer />
         </div>
</>
)
}