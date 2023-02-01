import { ButtonHTMLAttributes, HtmlHTMLAttributes } from "react";
import { useRecoilValue } from "recoil";
import CartMoreIcon from "../../../../assets/icons/cartMore";
import { shoppingCartState } from "../../../states";
import { Container, ContentIcon, Text } from "./styles";
type ButtonAddCartProps = HtmlHTMLAttributes<HTMLButtonElement> & {
  selected: boolean;
  amount: number;
};

export default function ButtonAddCart({
  selected,
  amount,
  ...rest
}: ButtonAddCartProps) {
  return (
    <Container selected={selected} disabled={selected} {...rest}>
      <ContentIcon>
        <CartMoreIcon />
        <Text>{amount}</Text>
      </ContentIcon>
      <Text>ADICIONAR AO CARRINHO</Text>
    </Container>
  );
}
