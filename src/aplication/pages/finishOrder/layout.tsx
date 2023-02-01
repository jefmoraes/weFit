import Header from "../../components/header";
import IndicationCard from "../../components/indicationCard";
import { Container, Main } from "./styles";

export default function LayoutFinishOrder() {
  return (
    <Container>
      <Header />
      <Main>
        <IndicationCard
          image="../../assets/complete.svg"
          title="Compra realizada com sucesso!"
          type="success"
        />
      </Main>
    </Container>
  );
}
