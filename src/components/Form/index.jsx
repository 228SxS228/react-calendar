import React from "react";
import './index.css';

export default class Form extends React.Component{
    render(){
        function showInput(event) {
            console.log(textInput.current.value);
        }
        const [output, setOutput] = useState('Hellol');
        return(
            <div className="input">
                <input type="text" onInput={showInput} ref={textInput} />
                <input type="text" onInput={showInput} ref={textInput} />
                <input type="text" onInput={showInput} ref={textInput} />
                <button>Отправить</button>
                <p>{output}</p>
            </div>
        );
    }
}