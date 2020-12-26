import { useRef, useEffect } from "react";

import Message from "./Message";

const ListMessages = (props) => {
  const { messages, name } = props;
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView();
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div>
      {messages.map((message, i) => (
        <Message key={i} message={message} name={name} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ListMessages;
