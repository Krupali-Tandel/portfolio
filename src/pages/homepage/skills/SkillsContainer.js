import React from 'react'
import SkillsD from './SkillsD'
import './style.css'

//making the array to store the skills
const skillsdata = ['C' , 'Python','Java', 'MySQL' , 'Php','Cloud Computing' , 'Web Development' , 'Android' , 'HTML' , 'CSS' , 'JS'];

const SkillsContainer = () =>{
  return (
    <div className='skillcontainer'>
      {
        skillsdata.map(skillItem=>{
          return <SkillsD skillItem = {skillItem}/>
        })
      }
    </div>
  )
}
export default SkillsContainer
