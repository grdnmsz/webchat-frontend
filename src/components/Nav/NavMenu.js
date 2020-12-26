import styled from "styled-components";

const Ul = styled.ul`
  color: ${({ theme }) => theme.text};
  list-style: none;
  display: flex;

  li {
    padding: 5px;
  }
  opacity: 0.85;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #404040;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 80vh;
    width: 100px;
    padding-top: 3.5rem;
    transition: transform 0.2s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const SubTitle = styled.h4`
  text-align: center;
`;

const NavMenu = ({ open }) => {
  return (
    <Ul open={open}>
      <SubTitle>Active users</SubTitle>
    </Ul>
  );
};

export default NavMenu;
