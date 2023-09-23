import styled, { css } from "styled-components";
export default styled.button`
  font-family: "Poppins", sans-serif;
  font-size: 1.3rem;
  border: none;
  border-radius: 10px;
  padding: 7px 5px;
  background-color: transparent;
  margin: 20px;
  margin-left: 0px;
  transition: all 0.7s;
  ${(props) =>
    props.background &&
    css`
      background: ${(props) => props.background};
    `}
  color: black;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0);
  }
`;
