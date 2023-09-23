import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  ${(props) =>
    props.direction &&
    css`
      flex-direction: ${props.direction};
    `}
  justify-content: center;
  align-items: center;
`;

export default Wrapper;
