import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export const Header = () => {
    return ( <>
        <header className = 'header' >
        <h2 > K.T. </h2> { /* navbar */ }
        <nav className = 'navContainer' >
        <ul className = 'navitems' >
        <Link className = 'listitems'to = '/project' > Projects </Link>
         <Link className = 'listitems'to = '/skills' > Skills </Link> 
        <Link className = 'listitems'to = '/projects' > Achievments </Link> 
        </ul>

        </nav> 
        </header> 
        </>
    )
}