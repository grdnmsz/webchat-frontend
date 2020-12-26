import styled from "styled-components";

import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }

  
`;

const Left = styled.div`
  top: 10px;
  left: 10px;
`;
const Center = styled.div``;

const Navbar = ({ Icon, title, LeftButton }) => {
  return (
    <>
      <Nav>
        <Left>{LeftButton}</Left>
        <Center>
          <h3>{title}</h3>
        </Center>
        <Burger Icon={Icon} />
      </Nav>
    </>
  );
};

export default Navbar;
