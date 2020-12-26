import { useState } from "react";
import styled from "styled-components";

import NavMenu from "./NavMenu";

const Burger = ({ Icon }) => {
  const [open, setOpen] = useState(false);

  const NavIcon = styled(Icon)`
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 20;
    display: none @media (max-width: 768px) {
      display: flex;
      justify-content: space-around;
      flex-flow: column nowrap;
    }
  `;

  return (
    <>
      <div open={open} onClick={() => setOpen(!open)}>
        <NavIcon size={32} />
      </div>
      <NavMenu open={open} />
    </>
  );
};

export default Burger;
