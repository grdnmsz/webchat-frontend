import { useState } from "react";

import { Input } from "./Input";

const BarMessage = (props) => {
  const [message, setMessage] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(message);
    setMessage("");
  };

  return (
    <form onSubmit={onSubmit} style={{ display: "inline-block" }}>
      <Input
        value={message}
        placeholder={"Write a message…"}
        onChange={(event) => setMessage(event.target.value)}
      />
    </form>
  );
};

export default BarMessage;
