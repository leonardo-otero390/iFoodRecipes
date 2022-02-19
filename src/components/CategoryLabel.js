import Veggie from "../assets/icons/Veggie.svg";
import styled from "styled-components";

export default function CategoryLabel() {
  return (
    <Container>
      <Icon src={Veggie} alt="veggie" />
      Vegetariano
    </Container>
  );
}

const Container = styled.button`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: bold;
  padding: 8px;
  gap: 8px;
  background: #f6f0eb;
  border: 1px dashed #f4e8da;
  border-radius: 46px;
  position: absolute;
  top: 8px;
  left: 8px;
`;
const Icon = styled.img`
  width: 16px;
  height: 16px;
  object-fit: scale-down;
`;
