import styled from "styled-components";

const Heading1 = styled.h1`
  font-size: 2rem;
  font-family: "Poppins", sans-serif;
`;

const Heading2 = styled.h2`
  font-size: 1.5rem;
  font-family: "Poppins", sans-serif;
`;

function Title() {
  return (
    <>
      <Heading1>PRAKTIKUM RPLBK</Heading1>
      <Heading1>Tugas Modul 2</Heading1>
      <Heading2>Kelompok 05</Heading2>
    </>
  );
}

export default Title;
