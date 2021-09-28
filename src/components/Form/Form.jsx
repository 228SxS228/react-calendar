import React, { useState } from 'react';
import './index.css';


function Form() {
    const [date, setDate] = useState('')
   
    return(
        <div className="Form">
            <p>{date}</p>
            <input 
            type="text" 
            value={date}
            onChange={event => setDate(event.target.value)}
            />
        </div>
    );
}

export default Form;