import { FaInstagram } from "react-icons/fa";
import styled from "styled-components";
import Button from "./button";

const IconIG = styled(FaInstagram)`
  cursor: pointer;
  width: 50px;
  height: 50px;
  fill: black;
  &:hover {
    fill: darksalmon;
  }
  margin-left: 30px;
`;
export default function InstaIcon() {
  return (
    <div>
      <Button>
        <IconIG></IconIG>
      </Button>
    </div>
  );
}
