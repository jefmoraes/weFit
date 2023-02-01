import { shoppingCartProps, shoppingCartState } from "../../../states";
import TrashIcon from "../../../../assets/icons/trash";
import ButtonQuantity from "../buttonQuantity";
import { useRecoilState } from "recoil";
import {
  SubTotalQuantityContainer,
  DesktopContainer,
  MobileContainer,
  HeaderProduct,
  ImageContainer,
  SubTotalPrice,
  SubTotalText,
  TrashButton,
  SubTotal,
  Content,
  Image,
  Price,
  Text,
} from "./styles";

type ProdCardProps = {
  product: shoppingCartProps;
};

export default function ProdCard({ product }: ProdCardProps) {
  const [shoppingCart, setShoppingCart] = useRecoilState(shoppingCartState);
  const index = shoppingCart.findIndex(
    (item) => item.movie.id === product.movie.id
  );
  const { movie } = product;
  function removeProduct() {
    const copyShoppingCart = [...shoppingCart];

    copyShoppingCart.splice(index, 1);
    setShoppingCart([...copyShoppingCart]);
  }
  return (
    <>
      <DesktopContainer>
        <Image src={movie.image} />
        <HeaderProduct>
          <Text>{movie.title}</Text>
          <Price>R$ {movie.price}</Price>
        </HeaderProduct>
        <ButtonQuantity product={product} />
        <SubTotalPrice>
          R$
          {parseFloat((movie.price * shoppingCart[index].quantity).toFixed(2))}
        </SubTotalPrice>
        <TrashButton onClick={removeProduct}>
          <TrashIcon display="desktop" />
        </TrashButton>
      </DesktopContainer>
      <MobileContainer>
        <ImageContainer>
          <Image src={movie.image} />
        </ImageContainer>
        <Content>
          <HeaderProduct>
            <Text>{movie.title}</Text>
            <Price>R$ {movie.price}</Price>
            <TrashButton onClick={removeProduct}>
              <TrashIcon display="mobile" />
            </TrashButton>
          </HeaderProduct>
          <SubTotalQuantityContainer>
            <ButtonQuantity product={product} />
            <SubTotal>
              <SubTotalText>SUBTOTAL</SubTotalText>
              <SubTotalPrice>
                R$
                {parseFloat(
                  (movie.price * shoppingCart[index].quantity).toFixed(2)
                )}
              </SubTotalPrice>
            </SubTotal>
          </SubTotalQuantityContainer>
        </Content>
      </MobileContainer>
    </>
  );
}
