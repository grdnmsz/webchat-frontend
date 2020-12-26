import styled from "styled-components";

export const Input = styled.input`
  border-radius: 20px;
  border: none;
  padding: 1.5%;
  width: 80vw;
  font-size: 0.9rem;
  :focus {
    outline: none;
  }
  background-color: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.text};
`;

export default Input;
