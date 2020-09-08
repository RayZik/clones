import React, { useState, useEffect } from "react";
import "./App.css";

import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Message, { IMessage } from "./message/Message";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMsg] = useState<IMessage[]>([
    {
      username: "a",
      text: "dsfsdf",
    },
    {
      username: "b",
      text: "dsfsdf",
    },
    {
      username: "c",
      text: "dsfsdf",
    },
  ]);
  const [username, setName] = useState<string>("");

  useEffect(() => {
    setName(prompt("Please enter your name") as string);
  }, []);

  const onSendHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    setMsg([
      ...messages,
      {
        username,
        text: input,
      },
    ]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Messenger</h1>
      <h2>Welcome {username}</h2>

      <form action="">
        <FormControl>
          <InputLabel>Enter a message</InputLabel>
          <Input
            value={input}
            onChange={(e: any) => setInput(e.target.value)}
            type="text"
          />
          <Button
            color="primary"
            type="submit"
            disabled={!input}
            onClick={onSendHandler}
          >
            Send Message
          </Button>
        </FormControl>
      </form>

      {messages.map((message: IMessage) => (
        <Message username={username} message={message} />
      ))}
    </div>
  );
}

export default App;
