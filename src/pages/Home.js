import React, { useEffect, useState } from 'react';
import '../styles/home.css';

function Home() {
    const [greet, setGreet] = useState("");
    const [show, setShow] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setGreet("welcome vaishnavan")
            setShow(true)
        },5000)
    })

    return (
        <div>
            <h1 style={show ? {display:"block"}:{display:"none"}}>{greet}</h1>
        </div>
    )
}

export default Home
