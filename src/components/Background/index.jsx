import React from "react";
import './index.css';

export default class Background extends React.Component{
    render(){
        return(
            <section className="page">
                <div className="logbook">
                    <h1 className="title">Журнал</h1>
                    <ul className="list">
                        <li className="item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dolorum?</li>
                        <li className="item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dolorum?</li>
                        <li className="item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dolorum?</li>
                        <li className="item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dolorum?</li>
                        <li className="item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dolorum?</li>
                        <li className="item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dolorum?</li>
                    </ul>
                </div>
            </section>
        );
    }
}
