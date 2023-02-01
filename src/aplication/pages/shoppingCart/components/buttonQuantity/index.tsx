import AddIcon from "../../../../assets/icons/add";
import SubtractIcon from "../../../../assets/icons/subtract";
import { Content, Quantity, Button } from "./styles";
import { shoppingCartProps, shoppingCartState } from "../../../states";
import { useRecoilState } from "recoil";

type ButtonQuantity = {
  product: shoppingCartProps;
};
export default function ButtonQuantity({ product }: ButtonQuantity) {
  const [shoppingCart, setShoppingCart] = useRecoilState(shoppingCartState);

  function addQuantity() {
    const updateShoppingCart = shoppingCart.map((item) => {
      if (item.movie.id === product.movie.id) {
        return { quantity: item.quantity + 1, movie: item.movie };
      }
      return item;
    });
    setShoppingCart([...updateShoppingCart]);
  }

  function subtractQuantity() {
    const updateShoppingCart = shoppingCart.map((item) => {
      if (item.movie.id === product.movie.id && item.quantity > 1) {
        return { quantity: item.quantity - 1, movie: item.movie };
      }
      return item;
    });
    setShoppingCart([...updateShoppingCart]);
  }

  return (
    <Content>
      <Button onClick={subtractQuantity}>
        <SubtractIcon />
      </Button>
      <Quantity>{product.quantity}</Quantity>
      <Button onClick={addQuantity}>
        <AddIcon />
      </Button>
    </Content>
  );
}
