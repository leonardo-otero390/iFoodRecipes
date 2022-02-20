import styled from "styled-components";
import avatar from "../../../assets/images/users/avatar.png";

export default function UserCard() {
  return (
    <Container>
      <img src={avatar} alt="Avatar" />
      <div>
        <h2>Postado por</h2>
        <h1>
          <strong>Emilia Silva Cristina</strong>
        </h1>
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin-top: -16px;
  background: #ffffff;
  border: 1px solid #edecec;
  box-shadow: 0px 4px 24px rgba(219, 217, 217, 0.4);
  border-radius: 6px;
  display: flex;
  padding: 8px;
  gap: 8px;
  img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
  }
  h2 {
    font-size: 12px;
    line-height: 100%;
    color: #3f3e3e;
  }
`;
