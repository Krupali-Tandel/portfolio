import React from 'react';
import Project from './Project';
import './style.css' 

const projectData = [{
    name:"Hosteller",
    description:"Hosteller is Hostel managment website that manages the records of the students and the hostel",
    skills:['Html','CSS','JS' , 'BootStrap' , 'MYSQL','PHP'],
    github:"https://github.com/Krupali-Tandel/Hostel_Managment_system.git",
    linkedIn:"https://github.com/Krupali-Tandel"
},
{
    name:"Miwok",
    description:"Miwok is an application that can be used to learn japanese",
    skills:['Android' , 'java'],
    github:"https://github.com/Krupali-Tandel/Android-Studio.git",
    linkedIn:"https://github.com/Krupali-Tandel"
},
{
    name:"Email Sending App",
    description:"With the help of this application email can be send ",
    skills: ['HTML','CSS' ,'Python' , 'Django'],
    github:"https://github.com/",
    linkedIn:"https://github.com/Krupali-Tandel"
},
{
    name:"Project 4",
    description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    skills:['SASS','TypeScript','React'],
    github:"https://github.com/",
    linkedIn:"https://www.linkedin.com/"
}
];

const ProjectContainer = () => {
    return (
        <div className="projectContainer">
            {
                projectData.map(projectItem=>{
                    return <Project projectItem={projectItem}/>
                })
            }
        </div>
    )
}

export default ProjectContainer