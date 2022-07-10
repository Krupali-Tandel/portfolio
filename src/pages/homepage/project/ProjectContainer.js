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