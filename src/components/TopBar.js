import { IoIosArrowBack as ArrowBack } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import styled from "styled-components";

export default function TopBar({ content }) {
  return (
    <Header>
      <IconContext.Provider value={{ color: "#E9202E" }}>
        <ArrowBack />
      </IconContext.Provider>
      <h1>{content}</h1>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  gap: 72px;
  width: 100%;
  h1 {
    font-size: 14px;
  }
  margin-bottom: 16px;
`;
