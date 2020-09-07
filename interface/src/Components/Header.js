import React from 'react';
import './Header.css';
import Logo from './images/back-g1.jpg'

export default function Header(){
    return(
        <div className="Header">
            <div className="Header-top">   
            <p className="title"> FB NATURE</p>
            <span className=" title-1">CONTACT</span>
            <span className=" title-1">BOO</span>
            <span className=" title-1">LOWER</span>
            <span className=" title-1">ANIME</span>
            <p className="button-1">SUBSCRIBE</p>
            </div>
            <img className="back-image" src={Logo}></img>
            <div className="Header-bottom">
                <span className="title-2">This is the best choice</span>
                <span className="title-3">Next Level</span>
            </div>
        </div>
    )
}
