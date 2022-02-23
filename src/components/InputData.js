import react, { useState } from "react";
import "./InputData.css";

const InputData = (props) => {
    const [data, setData] = useState('');

    const inputHandler = (event) => {
        setData(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onSaveData(data);
        setData('');
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="New Item" value={data} onChange={inputHandler} />
            <button type="submit">+</button>
        </form>
    );
}

export default InputData;