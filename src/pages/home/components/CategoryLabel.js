import styled from "styled-components";
import categories from "../../../services/categoriesMock";

export default function CategoryLabel({ id }) {
  const { name, icon } = categories.find((category) => category.id === id);

  return (
    <Container>
      <Icon src={icon} alt="name" />
      {name}
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
 
`;
const Icon = styled.img`
  width: 16px;
  height: 16px;
  object-fit: scale-down;
`;
