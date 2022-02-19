import CategoryLabel from "./CategoryLabel";
import categories from "../../../services/categoriesMock";
import styled from "styled-components";

export default function CategorySection() {
  return (
    <Container>
      <Header>
        <h1>
          <strong>Categorias</strong>
        </h1>
        <h2>Ver todas</h2>
      </Header>
      <ul>
        {categories.map((category, index) => (
          <CategoryLabel key={index} id={category.id} />
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.section`
  margin: 16px 0;
  ul {
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
  }
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 14px;
    margin-bottom: 8px;
  }
  h2 {
    font-size: 14px;
    color: #3f3e3e;
  }
`;
