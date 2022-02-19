import styled from "styled-components";
import CategoryLabel from "./CategoryLabel";

export default function RecipeThumb({ recipe }) {
  const { name, description, image, categoryId } = recipe;
  return (
    <Container>
      <LabelContainer>
        <CategoryLabel id={categoryId} />
      </LabelContainer>
      <Button>
        <img src={image} alt={name} />
        <RecipeInfos>
          <h1>
            <strong>{name}</strong>
          </h1>
          <h3>{description}</h3>
        </RecipeInfos>
      </Button>
    </Container>
  );
}

const Container = styled.li`
  background: #ffffff;
  border: 1px solid #edecec;
  box-shadow: 0px 4px 24px rgba(219, 217, 217, 0.4);
  border-radius: 6px;
  position: relative;
`;
const Button = styled.button`
  width: 176px;
  padding: 0;
  border: none;
  background: none;

  h1 {
    font-size: 14px;
  }
  h3 {
    font-size: 10px;
    color: #3f3e3e;
  }
  img {
    width: 100%;
    border-radius: 6px 6px 0px 0px;
    height: 129px;
    object-fit: cover;
  }
`;
const LabelContainer = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
`;
const RecipeInfos = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  align-items: start;
  justify-content: center;
`;
