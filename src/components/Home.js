import React, { createContext } from 'react';
import { useEffect, useState, useContext } from "react";
import Emoji from "../components/Emoji.js";
import { TextField, Button } from '@mui/material';



function Clock() {
  const [clockState, setClockState] = useState(new Date());
  const { emoji } = useContext(EmojiContext)

  useEffect(() => {
    //put this inside useEffect to avoid memory leaks - it crashed my browser!
    const clock = setInterval(() => {
      setClockState(new Date());
    }, 1000);    

    return function cleanup() {
      clearInterval(clock);
      console.log("Cleaned up clock.")
    }
  }, []);

  return <div style={{ fontSize: "55px", margin: "60px" }}>{clockState.toLocaleTimeString()} {emoji}</div>; //context lets us reuse common info across components
}

function GreetingButton() {
  const [name, setName] = useState('Angad');
  const [input, setInput] = useState('Input')

  useEffect(() => {
    document.title = `Greetings + ${name}`;
    console.log('name changed: ' + name)
  }, [name]);

  return (
    <div style={{ fontSize: "55px", margin: "60px" }}>
      <TextField id="outlined-basic" label="Input Name Here" onChange={(e) => setInput(e.target.value)} variant="outlined" />
      <Button variant="contained" onClick={() => setName(input)}>Set Name</Button>
      <p>Greetings '{name}'</p>
    </div>
  );
}



const Home = () => {
  const [emoji, setEmoji] = useState("🤡");

  return (
    <>

      <EmojiContext.Provider value={{ emoji, setEmoji }}>
        <Emoji />
        <GreetingButton />
        <Clock />
      </EmojiContext.Provider>

    </>
  );
}

export const EmojiContext = createContext();

export default Home;


