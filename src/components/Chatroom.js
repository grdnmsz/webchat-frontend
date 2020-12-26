import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { io } from "socket.io-client";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { FaUsers } from "react-icons/fa";

import BarMessage from "./BarMessage";
import ListMessages from "./ListMessages";
import Navbar from "./Nav/Navbar";

let socket;

const Chatroom = () => {
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "http://localhost:5000";
  const history = useHistory();
  const {
    state: { userName, room },
  } = useLocation();

  useEffect(() => {
    // connection

    socket = io(ENDPOINT);
    socket.emit("join", { room, name: userName }, () => {});

    return () => {
      // cleaning of connection above ^
      socket.emit("disconnet");
      socket.off();
    };
  }, [ENDPOINT, userName, room]);

  useEffect(() => {
    // sending messages
    socket.on("message", (message) =>
      setMessages((messages) => [...messages, message])
    );
  }, [setMessages]);

  const onSendMessage = (message) => {
    if (message) socket.emit("userMessage", message, () => {});
  };

  return (
    <>
      <Navbar
        title={room}
        Icon={FaUsers}
        LeftButton={
          <div
            onClick={() =>
              history.push({ pathname: `/chat`, state: { userName: userName } })
            }
          >
            retour
          </div>
        }
      />
      <DialogWindow>
        <ListMessages messages={messages} name={userName} />
      </DialogWindow>

      <BarMessage onSubmit={onSendMessage} />
    </>
  );
};

const DialogWindow = styled.div`
  height: 75vh;
  overflow: scroll;
`;

export default Chatroom;
