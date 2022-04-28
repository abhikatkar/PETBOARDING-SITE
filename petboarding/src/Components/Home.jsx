import axios from "axios"
import { useEffect, useState } from "react";
import {useDispatch} from "react-redux";
import { useSelector } from "react-redux";


export const Home = ()=>{

    const [text , setText] = useState("");

    console.log(text)

    useEffect(()=>{
       
    },[]);

    function getData(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
    }

    return(
        <div>
            <h1>Home page</h1>
            <input type="text" onChange={(e)=>{
                setText(e.target.value);
            }} />
        </div>
    )
}