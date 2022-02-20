import { IoIosArrowBack as ArrowBack } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function TopBar({ content }) {
  const navigate = useNavigate();

  return (
    <Header>
      <div onClick={() => navigate(-1)}>
        <IconContext.Provider value={{ color: "#E9202E" }}>
          <ArrowBack />
        </IconContext.Provider>
      </div>
      <h1>{content}</h1>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  gap: 72px;
  width: 100%;
  position: relative;
  margin-bottom: 24px;
  div {
    position: absolute;
    top: 0;
    left: 0;
  }
  h1 {
    font-size: 14px;
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 100px;
    white-space: nowrap;
  }
`;
