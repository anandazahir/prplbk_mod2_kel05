import React from "react";
import InstaIcon from "../elements/iconbutton";
import styled from "styled-components";
import "../App.css";

const Card = styled.div`
  width: 18rem;
  background-color: antiquewhite;
  border: 3px solid;
  border-radius: 0.25rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Poppins", sans-serif;
`;

const ProfileImage = styled.img`
  width: 50%;
  margin: 1rem;
  border-radius: 50%;
  background-color: coral;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardTitle = styled.h2`
  text-align: center;
  margin: 0.5rem;
  font-size: 18px;
  color: indianred;
  font-family: "Poppins", sans-serif;
`;

const CardText = styled.p`
  margin: 0.5rem;
  font-size: 15px;
  font-family: "Poppins", sans-serif;
`;

const InstaLink = styled.a`
  text-decoration: none;
  font-family: "Poppins", sans-serif;
`;

function Square(props) {
  return (
    <Card className="animationcard">
      <ProfileImage
        src={props.foto}
        alt="profile picture"
        className="animationimg"
      />
      <CardBody>
        <CardTitle>{props.nama}</CardTitle>
        <CardText>{props.nim}</CardText>
        <CardText>{props.email}</CardText>
        <InstaLink href={props.ig} target="_blank">
          <InstaIcon alt="Instagram" src="link ke ikon Instagram" />
        </InstaLink>
      </CardBody>
    </Card>
  );
}

export default Square;
