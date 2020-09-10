import { Card, CardContent, Typography } from "@material-ui/core";
import React, { forwardRef, useEffect, useRef } from "react";
import "./Message.css";

export interface IMessage {
  id: string;
  username: string;
  text: string;
  timestamp: string;
}

const Message = forwardRef(
  (props: { username: string; message: IMessage }, ref) => {
    const { message, username } = props;
    const isCurrent = username && username === message.username;
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
      // @ts-ignore
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [message]);

    return (
      <div
        ref={messagesEndRef}
        className={`message ${isCurrent && "message__user"}`}
      >
        <Card className={`card ${isCurrent ? "card_user" : "card_guest"}`}>
          <CardContent>
            <Typography color="primary" variant="h5" component="h2">
              {!isCurrent && `${message.username}:`} {message.text}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
);

export default Message;
