import CategoryLabel from "../CategoryLabel";
import categories from "../../services/categoriesMock";
import styled from "styled-components";

export default function CategoriesList() {
  return (
    <Container>
      {categories.map((category, index) => (
        <CategoryLabel key={index} id={category.id} />
      ))}
    </Container>
  );
}
const Container = styled.ul`
  display: flex;
  white-space: nowrap;
  gap: 8px;
  overflow: hidden;
  overflow-x: scroll;
  @media (max-width: 614px) {
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
