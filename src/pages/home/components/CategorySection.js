import styled from "styled-components";
import CategoriesList from "../../../components/CategoriesList"

export default function CategorySection() {
  return (
    <Container>
      <Header>
        <h1>
          <strong>Categorias</strong>
        </h1>
        <h2>Ver todas</h2>
      </Header>
      <CategoriesList />
    </Container>
  );
}

const Container = styled.section`
  margin: 16px 0;
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
