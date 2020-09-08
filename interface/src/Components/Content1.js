import React from 'react';
import './Content1.css';
import Content from './images/content-1.jpg';
export default function Content1(){
    return(
        <div className="Content1">
            <div className="Content1-1">
                <div className="Content1-1-ct">
                <p className="title-content-1"> Oh,hey... </p>
                <p className="content-item">Lorem Ipsum is simply dummy text</p>
                <p className="content-item1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <p className="content-item1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <div className="a">
                <button className="button-2">CLICK TO GET US</button>
               
                </div>
                </div>
            </div>
            <div className="Content1-2">
                <img className="img" src= {Content} alt="The beautiful girl"></img>
            </div>
        </div>
    )
}