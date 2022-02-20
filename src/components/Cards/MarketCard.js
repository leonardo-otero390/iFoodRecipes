import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import ingredients from "../../services/ingredientsMock";
import { IoIosArrowDown as ArrowDown } from "react-icons/io";
import { IconContext } from "react-icons/lib";
export default function MarketCard({ market }) {
  const { name, image } = market;
  return (
    <li>
      <Container>
        <MarketImage src={image} alt={name} />
        <Infos>
          <LeftInfos>
            <h1>
              <strong>{name}</strong>
            </h1>
            <AvatarGroup max={5}>
              {ingredients.map(({ image, name }, index) => (
                <Avatar
                  key={index}
                  sx={{ width: 16, height: 16 }}
                  alt={name}
                  src={image}
                />
              ))}
            </AvatarGroup>
          </LeftInfos>
          <RigthInfos>
            <h2>
              <strong>R$ 143,50</strong>
            </h2>
            <div>
              <IconContext.Provider value={{ color: "#E9202E", size: "24px" }}>
                <ArrowDown />
              </IconContext.Provider>
            </div>
          </RigthInfos>
        </Infos>
      </Container>
    </li>
  );
}

const Container = styled.button`
  background: #ffffff;
  border: 1px solid #edecec;
  box-shadow: 0px 4px 24px rgba(219, 217, 217, 0.4);
  border-radius: 6px;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  gap: 8px;
  text-align: left;
  padding: 0;
  h2 {
    font-size: 10px;
    color: #3f3e3e;
  }
`;
const MarketImage = styled.img`
  border-radius: 6px 0px 0px 6px;
  width: 80px;
  height: 100%;
  object-fit: cover;
`;
const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  width: 100%;
  height: 100%;
`;
const LeftInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const RigthInfos = styled.div`
  display: flex;
  align-items: end;
  gap: 8px;
  h2 {
    font-size: 10px;
    color: #3f3e3e;
  }
  div {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;
