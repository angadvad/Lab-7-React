import React, { createContext } from 'react';
import { useEffect, useState } from "react";
import Emoji from "../components/Emoji.js";
import { TextField, Button } from '@mui/material';



function Clock() {
  const [clockState, setClockState] = useState(new Date());

  const clock = setInterval(() => {
    setClockState(new Date());
  }, 1000);


  useEffect(() => {
    return function cleanup() {
      clearInterval(clock);
      console.log("Cleaned up clock.")
    }
  }, []);

  return <div style={{ fontSize: "55px", margin: "60px" }}>{clockState.toLocaleTimeString()}</div>;
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


