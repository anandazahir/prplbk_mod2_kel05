import styled, { css } from "styled-components";
export default styled.input`
  font-family: "Poppins", sans-serif;
  font-size: 1.3rem;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin: 1rem;
  background-color: indianred;
  ${(props) =>
    props.border &&
    css`
      border-color: ${(props) => props.border};
    `}
  color: white;
  &:focus {
    background: darksalmon;
    outline: none;
  }
  &::placeholder {
    color: black;
  }
`;
