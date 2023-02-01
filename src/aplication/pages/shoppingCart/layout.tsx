import { useRecoilValue } from "recoil";
import Header from "../../components/header";
import IndicationCard from "../../components/indicationCard";
import BoxOffice from "./components/boxOffice";
import { shoppingCartState } from "../states";
import { Container, Main } from "./styles";

export default function LayoutShoppingCart() {
  const shoppingCartList = useRecoilValue(shoppingCartState);
  return (
    <Container>
      <Header />
      <Main>
        {shoppingCartList[0] ? (
          <BoxOffice />
        ) : (
          <IndicationCard
            title="Parece que não há nada por aqui :("
            image="../assets/refresh.svg"
            type="empty"
          />
        )}
      </Main>
    </Container>
  );
}
