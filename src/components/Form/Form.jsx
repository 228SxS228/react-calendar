import React, { useState } from 'react';
import './index.css';


function Form() {
    
    const [date, setDate] = useState('')
    const [dateList, setDateList] = useState([]);
    const del = (dateList) => {
        setDateList(dateList.filter(p => p!== dateList));
    };

    return(
        <div className="form">
            <ul>
                {dateList.map((m) => (
                    <p key={m.id}>{m.date}</p>
                ))}
            </ul>
            <input 
            type="text" 
            onChange={(event) => {setDate(event.target.value);}}
            />
            <button
            onClick={(event) => {
                setDateList([
                    ...dateList,
                    {
                        id: dateList.length + 1, //добавляет id +1
                        date: date
                    }
                ]);
                // setDate("") если не надо добавлять одинаковые элементы
            }}
            >Добавить</button>
            <button
            onClick={del}
            >Удалить</button>
        </div>
    );
}

export default Form;