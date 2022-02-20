import styled from "styled-components";

export default function OutlinedButton({ content, icon }) {
  return (
    <Button>
      <img src={icon} alt="garrafinha" />
      {content}
    </Button>
  );
}

const Button = styled.button`
  margin: 16px 0;
  background: none;
  border: 1px solid #fcb663;
  box-sizing: border-box;
  border-radius: 6px;
  width: 100%;
  height: 40px;
  font-weight: bold;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;
