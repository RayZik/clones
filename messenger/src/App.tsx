import React, { useState, useEffect } from "react";
import "./App.css";

import {
  Button,
  FormControl,
  InputLabel,
  Input,
  IconButton,
} from "@material-ui/core";
import Message, { IMessage } from "./message/Message";
import db from "./message/firebase";
import { firestore } from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMsg] = useState<IMessage[]>([]);
  const [username, setName] = useState<string>("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((messages) => {
        setMsg(
          messages.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          })) as IMessage[]
        );
      });
  }, []);

  useEffect(() => {
    let user = sessionStorage.getItem("user");

    if (!user) {
      user = prompt("Please enter your name") as string;
      user && sessionStorage.setItem("user", user);
    }

    setName(user);
  }, []);

  const onSendHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    db.collection("messages").add({
      username,
      text: input,
      timestamp: firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="App">
      <h1>Messenger</h1>
      <h2>Welcome {username}</h2>

      <form action="" className="app__form">
        <FormControl className="app__form-control">
          <InputLabel>Enter a message</InputLabel>
          <Input
           className="app__input"
            placeholder="Enter a message..."
            value={input}
            onChange={(e: any) => setInput(e.target.value)}
            type="text"
          />
          <IconButton
            className="app__icon-button"
            color="primary"
            type="submit"
            disabled={!input}
            onClick={onSendHandler}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove className="app__messages">
        {messages.map((message: IMessage) => (
          <Message key={message.id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
