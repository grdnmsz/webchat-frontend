import { React, useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  margin-left: 300px;
`;

const Label = styled.label`
  position: absolute;
  width: 50px;
  height: 30px;

  border-radius: 15px;
  background: ${(props) => (props.isOn ? "#4fbe79" : "#bebebe")};
  cursor: pointer;
`;

const Checkbox = styled.button`
  width: 25px;
  height: 30px;
  opacity: 0;
`;

const Switch = styled.div`
  content: "";
  position: absolute;
  top: 3px;
  left: ${(props) => (props.isOn ? "23px" : "3px")};
  transition: 0.1s linear;
  width: 24px;
  height: 24px;
  border-radius: 50px;
  background: white;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
`;

const Toggler = (props) => {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => props.onClick);
  return (
    <Wrapper>
      <Label isOn={isOn}>
        <Checkbox onClick={() => setIsOn(!isOn)} />
        <Switch isOn={isOn} />
      </Label>
    </Wrapper>
  );
};

export default Toggler;
