import React, { Component } from "react";
import Square from "../elements/square";
import Wrapper from "../elements/Wrapper";

export default class Card extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <Square
            nim="21120120140115"
            nama="Ananda Muhammad Zahir"
            foto="src\assets\D36C6D09-C60A-4C3B-BC5C-876208C8B64D.jpeg"
            email="anandazahir12@gmail.com"
            ig="https://www.instagram.com/ananda.zahir/"
          />
          <Square
            nim="21120120140102"
            nama="Maulana Yusuf Arrasyid"
            foto="src\assets\intagram_picture8749873894798.jpg"
            email="email1@gmail.com"
            ig="https://www.instagram.com/maulanaarr/"
          />
          <Square
            nim="21120120120014"
            nama="Sugiyatmi"
            foto="src\assets\—Pngtree—female avatar vector icon_3725439.png"
            email="email2@gmail.com"
            ig="https://www.instagram.com/ami_gyt09/"
          />
          <Square
            nim="2112012014014"
            nama="Hafizh Anjar Saputra"
            foto="src\assets\favpng_user-profile-male-avatar.png"
            email="email3@gmail.com"
            ig="https://www.instagram.com/hafizhanjars/"
          />
        </Wrapper>
      </div>
    );
  }
}
