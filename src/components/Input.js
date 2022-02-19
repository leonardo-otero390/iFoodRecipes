import { IoIosSearch as Search } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import styled from "styled-components";

export default function Input() {
  return (
    <Container>
      <div>
        <IconContext.Provider value={{ color: "#E9202E", size: "16px" }}>
          <Search />
        </IconContext.Provider>
      </div>
      <input type="text" placeholder="O que vamos fazer hoje?" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background: #edecec;
  align-items: center;
  border-radius:4px;
  height: 36px;
  padding: 8px;
  div{
      width:24px;
      display: flex;
      align-items: center;
      border-radius: 4px 0 0 4px;
  }
  input {
    background: none;
    border: none;
    font-size: 14px;
    width:100%;
     ::placeholder{
        color: #3f3f3f;
    }
  }
`;
