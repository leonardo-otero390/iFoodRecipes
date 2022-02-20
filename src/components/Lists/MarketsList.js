import markets from "../../services/marketsMock";
import { CardsList } from "../../styles/style";
import MarketCard from "../Cards/MarketCard";

export default function MarketsList() {
  return (
    <CardsList>
      {markets.map((market, index) => (
        <MarketCard key={index} market={market} />
      ))}
    </CardsList>
  );
}
