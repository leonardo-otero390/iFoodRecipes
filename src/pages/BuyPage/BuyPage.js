import styled from "styled-components";
import MarketsList from "../../components/Lists/MarketsList";
import TopBar from "../../components/TopBar";
import { Line } from "../../styles/style";

export default function BuyPage() {
  return (
    <>
      <TopBar content="COMPRAR ITENS" />
      <h1>
        <strong>Onde quer pedir os itens?</strong>
      </h1>
      <Description>
        Montamos sua lista com os ingredientes necessarios.
      </Description>
      <Line />
      <h1 style={{ margin: "16px 0" }}>
        <strong>Mercados disponiveis</strong>
      </h1>
      <MarketsList />
    </>
  );
}

const Description = styled.p`
  font-size: 12px;
  line-height: 120%;
  letter-spacing: 0.05em;
  color: #3f3e3e;
  margin-top: 8px;
`;
