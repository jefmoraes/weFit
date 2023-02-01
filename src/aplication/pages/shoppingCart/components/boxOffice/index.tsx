import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { CalcTotalProds } from "../../../../../infrastructure/calcTotalProds/calcTotalProds";
import { shoppingCartState } from "../../../states";
import ProdCard from "../prodCard";
import {
  Container,
  ContentTitle,
  FinishOrder,
  Line,
  Price,
  ProductsContainer,
  ProductText,
  QuantityText,
  Text,
  Total,
  TotalContainer,
  TotalText,
} from "./styles";

export default function BoxOffice() {
  const shoppingCartList = useRecoilValue(shoppingCartState);
  const navigate = useNavigate();

  return (
    <Container>
      <ContentTitle>
        <ProductText>PRODUTO</ProductText>
        <div style={{ maxWidth: 253, width: "100%" }}></div>
        <QuantityText>QTD</QuantityText>
        <Text>SUBTOTAL</Text>
        <div style={{ width: 18 }}></div>
      </ContentTitle>
      <ProductsContainer>
        {shoppingCartList.map((item) => {
          return <ProdCard key={item.movie.id} product={item} />;
        })}
      </ProductsContainer>
      <Line />
      <TotalContainer>
        <FinishOrder onClick={() => navigate("finish")}>
          FINALIZAR PEDIDO
        </FinishOrder>
        <Total>
          <TotalText>TOTAL</TotalText>
          <Price>
            R$ {parseFloat(CalcTotalProds(shoppingCartList).toFixed(2))}
          </Price>
        </Total>
      </TotalContainer>
    </Container>
  );
}
