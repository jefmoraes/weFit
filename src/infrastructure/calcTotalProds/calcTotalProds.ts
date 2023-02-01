import { shoppingCartProps } from "../../aplication/pages/states";

export function CalcTotalProds(products: shoppingCartProps[]) {
  let allValues = 0;
  products.map((item) => {
    allValues = allValues + item.quantity * item.movie.price;
    return allValues;
  });
  return allValues;
}
