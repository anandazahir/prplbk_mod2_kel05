import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Button from "./elements/button";
import TextInput from "./elements/TextInput";
import Wrapper from "./elements/Wrapper";
import Footer from "./components/Footer";
import Title from "./components/Title";

function App() {
  const [nama, setNama] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Nama Anda: ", nama);
    if (nama) {
      setMessage(`Haloooo, ${nama}`);
    } else {
      setMessage(``);
    }
    setNama("");
  };
  const handleNameChange = (event) => {
    setNama(event.target.value);
  };

  return (
    <div>
      <Wrapper direction="column">
        <Title />
        <Card />
        <form action="" onSubmit={handleSubmit}>
          <TextInput
            border="black"
            placeholder="Nama"
            value={nama}
            onChange={handleNameChange}
          />
          <Button background="darksalmon" type="submit">
            submit
          </Button>
        </form>
      </Wrapper>
      <div
        style={{
          fontSize: "1.5rem",
          fontFamily: "Poppins, sans-serif",
          textAlign: "center",
        }}
      >
        {message}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default App;
