import { useEffect, useState, useRef } from "react";
import axios from "axios"
import './Container.css';
import Logo from "./Logo";
import InputData from "./InputData";


const Container = () => {
    const [list, setList] = useState([]);
    const url = "http://localhost:5000/";

    useEffect(() => {
        getData();
    }, []);

    const getData = (async () => {
        try {
            const response = await axios.get(url);
            const data = response.data;
            const fetchedData = data.map((d) => {
                return d;
            });
            setList(fetchedData);
        }
        catch (e) {
            console.log(e);
        }
    });

    const saveData = (async (newItem) => {
        try {
            const response = await axios.post(url, { "item": newItem });
            const data = response.data;
            const fetchedData = data.map((d) => {
                return d;
            });
            setList(fetchedData);
        }
        catch (e) {
            console.log(e);
        }
    });

    const submitHandler = (async (event, id) => {
        event.preventDefault();
        console.log(id);
        try {
            const response = await axios.post(url + "delete", { "checkbox": id });
            const data = response.data;
            console.log(data);
            const fetchedData = data.map((d) => {
                return d;
            });
            setList(fetchedData);
        }
        catch (e) {
            console.log(e);
        }
    });

    return (
        <div className="main-container">
            <Logo />
            {list.map((listItem) =>
                <div className="item" key={listItem._id} >
                    <div>
                        <input type="checkbox" name="checkbox" onClick={(e) => submitHandler(e, listItem._id)} />
                    </div>
                    <p>{listItem.name}</p>
                </div>
            )}
            <InputData onSaveData={saveData} />
        </div>
    );
}

export default Container;