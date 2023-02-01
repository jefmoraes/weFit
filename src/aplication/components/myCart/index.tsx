import { HtmlHTMLAttributes } from "react";
import { useRecoilValue } from "recoil";
import CartIcon from "../../assets/icons/cart";
import { shoppingCartState } from "../../pages/states";
import { Container, ContentTitle, Subtext, Text } from "./styles";

type MycartProps = HtmlHTMLAttributes<HTMLButtonElement>;

export default function MyCart({ ...rest }: MycartProps) {
  const shoppingCart = useRecoilValue(shoppingCartState);
  return (
    <Container {...rest}>
      <ContentTitle>
        <Text>Meu Carrinho</Text>

        <Subtext>{shoppingCart.length} item</Subtext>
      </ContentTitle>
      <CartIcon />
    </Container>
  );
}
