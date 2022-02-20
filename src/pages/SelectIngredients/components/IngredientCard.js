import styled from "styled-components";
import { ImCancelCircle as CancelCircle } from "react-icons/im";
import { IconContext } from "react-icons";

export default function IngredientCard({ ingredient }) {
  const { name, description, image } = ingredient;
  return (
    <Container>
      <img src={image} alt={name} />
      <div>
        <IngredientInfos>
          <h1>{name}</h1>
          <h2>{description}</h2>
        </IngredientInfos>
        <CancelButton>
          <IconContext.Provider value={{ color: "#DB5D69", size: "24px" }}>
            <CancelCircle />
          </IconContext.Provider>
        </CancelButton>
      </div>
    </Container>
  );
}

const Container = styled.button`
  background: #ffffff;
  border: 1px solid #edecec;
  box-shadow: 0px 4px 24px rgba(219, 217, 217, 0.4);
  border-radius: 6px;
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  gap: 8px;
  text-align: left;
  padding: 0;
  padding-right: 8px;
  img {
    border-radius: 6px 0px 0px 6px;
    height: 100%;
  }
  div {
    display: flex;
    justify-content: space-between;
    padding: 4px 0;
    height: 100%;
    width: 100%;
  }
  h1 {
    font-weight: bold;
    font-size: 14px;
  }
  h2 {
    font-size: 10px;
    color: #3f3e3e;
  }
`;
const IngredientInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
const CancelButton = styled.button`
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`;
