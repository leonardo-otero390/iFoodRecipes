import { IoIosArrowBack as ArrowBack } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import styled from "styled-components";

export default function TopBar({ content }) {
  return (
    <Header>
      <div>
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
  margin-bottom: 16px;
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
  margin-bottom: 16px;
`;
