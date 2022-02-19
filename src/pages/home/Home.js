import Input from "../../components/Input";
import SearchRecipesButton from "../../components/SearchRecipesButton";
import TopBar from "../../components/TopBar";

export default function Home() {
  return (
    <>
      <TopBar content="RECEITAS IFOOD" />
      <Input />

      <SearchRecipesButton />
    </>
  );
}
