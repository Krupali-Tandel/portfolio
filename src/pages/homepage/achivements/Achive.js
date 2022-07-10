import React from 'react'

import './style.css'
//this component will display the contains the achievements 

const Achive = ({achiveItem}) =>{
const {title ,img , description} = achiveItem;
    return (
        <div className='card'>
            <img src= {img} className ='imgcontainer'></img>
            <h3>{title}</h3>
            <p>{description}</p>

        </div>
    )
}

export default Achive 