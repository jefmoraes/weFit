import { useNavigate } from "react-router-dom";
import { useResetRecoilState } from "recoil";
import { shoppingCartState } from "../../pages/states";
import {
  Button,
  Container,
  ContainerImage,
  Content,
  Image,
  Title,
} from "./styles";
type IndicationCardProps = {
  title: string;
  image: string;
  type: "empty" | "success";
};

export default function IndicationCard({
  title,
  image,
  type,
}: IndicationCardProps) {
  const navigate = useNavigate();
  const resetShoppingCart = useResetRecoilState(shoppingCartState);
  function goTo() {
    if (type === "success") {
      resetShoppingCart();
    }
    navigate("/");
  }
  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        <ContainerImage type={type}>
          <Image type={type} src={image} />
        </ContainerImage>
        <Button onClick={goTo}>VOLTAR</Button>
      </Content>
    </Container>
  );
}
