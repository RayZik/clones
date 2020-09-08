import React from "react";
import { Typography, Card, CardContent } from "@material-ui/core";

import "./Message.css";

export interface IMessage {
  username: string;
  text: string;
}

function Message(props: { username: string; message: IMessage }) {
  const { message, username } = props;
  const isCurrent = username && username === message.username;

  return (
    <div className={`message ${isCurrent && "message__user"}`}>
      <Card className={`card ${isCurrent ? "card_user" : "card_guest"}`}>
        <CardContent>
          <Typography color="primary" variant="h5" component="h2">
            {message.username}: {message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Message;
