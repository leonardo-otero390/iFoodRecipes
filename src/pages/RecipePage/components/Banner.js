import styled from "styled-components";
import CategoryLabel from "../../../components/CategoryLabel";

export default function Banner({ recipe }) {
  const { name, description, image, categoryId } = recipe;
  return (
    <Container image={image}>
      <span>
        <CategoryLabel id={categoryId} />
      </span>
      <div>
        <h1>
          <strong>{name}</strong>
        </h1>
        <h2>{description}</h2>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
  padding-bottom: 32px;
  width: 100%;
  height: 180px;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.82) 31.67%,
      rgba(0, 0, 0, 0) 103.06%
    ),
    url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 6px;
  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  h1 {
    font-size: 18px;
    color: #fff;
  }
  h2 {
    font-size: 14px;
    color: #f6f0eb;
  }
`;
