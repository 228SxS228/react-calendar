import React from 'react';
import './index.css';
import Journal from '../Journal/Journal';

export default class Background extends React.Component{
    render(){
        return(
            <body>
                <div className="page">
                        <div className="header">
                            <h1 className="logo">IntegrityWebManager</h1>
                            <h2 className="title">Журнал</h2>
                            <div></div>
                        </div>
                        <div className="logbook">
                          <Journal/>
                        </div>
                </div>
            </body>
        );
    }
}
