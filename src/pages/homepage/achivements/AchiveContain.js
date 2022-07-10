import React from 'react'
import './style.css'
import Achive from './Achive'

//making the array of objects to store the contains of the Achievments

const achiveData = [{
    img : require('../../../img/cert1.png') ,
    description : 'Completed the course from Udemy ',
    title :'Java for Absolute Beginner'
},
{
    img : require('../../../img/cert2.png'),
    description : 'Completed the course from LinkedIn learning  ',
    title :'Programming Fundamentals : Databases'    
},
{
    img : require('../../../img/cert3.png'),
    description : 'Completed the course from Coursera ',
    title :'Industrial Iot on Google Cloud '
}
,{
    img : require('../../../img/cert4.png'),
    description : 'TCS goIT student digital Innovation program ',
    title : 'TCS goIT'
},
{
    img : require('../../../img/cert5.png'),
    description : 'Event held in LDCE Ahmedabad ',
    title :'Java Guru'
},
{
    img : require('../../../img/cert6.png'),
    description : 'Cloud computing training with Techsaksham  ',
    title :'Cloud Computing in Azure'
}]

const AchiveContain = () =>{
    return (
      <div className ='achiveContainer'>
        {
achiveData.map(achiveItem =>{
    return <Achive achiveItem ={achiveItem}/>
})
        }
      </div>

    )
}

export default AchiveContain