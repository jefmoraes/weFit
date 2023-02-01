import CartMoreIcon from "../../../../assets/icons/cartMore";
import { Container, ContentIcon, Text } from "./styles";
import { HtmlHTMLAttributes } from "react";

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
