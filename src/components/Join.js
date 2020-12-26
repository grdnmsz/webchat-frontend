import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Input } from "./Input";
import Button from "./Button";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  align-items: center;
  justify-content: center;
  height: 50vh;
`;

const LogInput = styled(Input)`
  border-radius: 15px;
  padding: 0.7%;
  width: auto;
`;

const Join = () => {
  const [name, setName] = useState("");

  const onClick = (event) => {
    if (!name) {
      event.preventDefault();
    } else return null;
  };

  return (
    <Container>
      <img alt="" src={process.env.PUBLIC_URL + "favicon.png"} />
      <h1>Welcome to Gelegram :|</h1>
      <LogInput
        type="text"
        placeholder="Name"
        onChange={(event) => setName(event.target.value)}
      />
      <br />
      <Link to={{ pathname: `/chat`, state: { userName: name } }}>
        <Button type="submit" onClick={onClick}>
          Join
        </Button>
      </Link>
    </Container>
  );
};

export default Join;
