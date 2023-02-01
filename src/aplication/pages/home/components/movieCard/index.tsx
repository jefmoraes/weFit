import { useRecoilState, useSetRecoilState } from "recoil";
import { shoppingCartState } from "../../../states";
import ButtonAddCart from "../ButtonAddCart";
import {
  Container,
  Content,
  Image,
  MovieContainer,
  Price,
  Title,
} from "./styles";

export type MovieProps = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type MovieCardProps = {
  movie: MovieProps;
};

export default function MovieCard({ movie }: MovieCardProps) {
  const [shoppingCart, setShoppingCart] = useRecoilState(shoppingCartState);
  const movieIndex = shoppingCart.findIndex(
    (item) => item.movie.id === movie.id
  );

  function addMovie() {
    setShoppingCart([...shoppingCart, { movie: movie, quantity: 1 }]);
  }

  return (
    <Container>
      <MovieContainer>
        <Content>
          <Image src={movie.image} />
          <Title>{movie.title}</Title>
        </Content>
        <Price>R$ {movie.price}</Price>
      </MovieContainer>
      <ButtonAddCart
        selected={movieIndex !== -1}
        onClick={addMovie}
        amount={movieIndex !== -1 ? shoppingCart[movieIndex].quantity : 0}
      />
    </Container>
  );
}
