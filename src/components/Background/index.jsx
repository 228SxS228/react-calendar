import React from "react";
import './index.css';

export default class Background extends React.Component{
    render(){
        return(
            <section className="page">
                <div className="logbook">
                    <h1 className="title">Журнал</h1>
                    <div className="left">
                        <table className='left__tabel'>
                            <h2>Дата\время</h2>
                            <tr className="date">05 июн 15:28:05</tr>
                            <tr className="date">05 июн 15:28:05</tr>
                            <tr className="date">05 июн 15:28:05</tr>
                            <tr className="date">05 июн 15:28:05</tr>
                            <tr className="date">05 июн 15:28:05</tr>
                            <tr className="date">05 июн 15:28:05</tr>
                            <tr className="date">05 июн 15:28:05</tr>
                            <tr className="date">05 июн 15:28:05</tr>
                            <tr className="date">05 июн 15:28:05</tr>
                            <tr className="date">05 июн 15:28:05</tr>
                            <tr className="date">05 июн 15:28:05</tr>
                            <tr className="date">05 июн 15:28:05</tr>
                            <tr className="date">05 июн 15:28:05</tr>
                            <tr className="date">05 июн 15:28:05</tr>
                            <tr className="date">05 июн 15:28:05</tr>
                            <tr className="date">05 июн 15:28:05</tr>
                            <tr className="date">05 июн 15:28:05</tr>
                            <tr className="date">05 июн 15:28:05</tr>
                        </table>
                    </div>
                </div>
            </section>
        );
    }
}
