import { useState } from 'react';
import "./App.css";

export default function App(){
    const [count,setCount] = useState(0);
    function onclickHandler(){}

    return (
        <div>
        <button id = "btn" onClick ={onclickHandler}>
        Counter{count}
        </button>
        </div>
    );
}

