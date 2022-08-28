import { Link } from "react-router-dom";
import React from "react";
import './Menu.css'

export default function Menu(){

    return(
        <header className="fatherMenu">
            <ul>
                <li><Link to='/' style={{color:'white',textDecoration:'none'}}>Semáforo</Link></li>
                <li><Link to='/carteirinha' style={{color:'white',textDecoration:'none'}}>Carteirinha</Link></li>
                <li><Link to='/carros' style={{color:'white',textDecoration:'none'}}>Carros</Link></li>
                <li><Link to='/sobre' style={{color:'white',textDecoration:'none'}}>Sobre</Link></li>
            </ul>
        </header>
    )
}