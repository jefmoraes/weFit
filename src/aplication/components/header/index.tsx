import { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import CartIcon from "../../assets/icons/cart";
import LoadingIcon from "../../assets/icons/loading";
import { shoppingCartState } from "../../pages/states";
import MyCart from "../myCart";
import {
  Container,
  ContentCard,
  ContentHeader,
  ContentTitleCard,
  Subtext,
  Text,
  Title,
} from "./styles";

export default function Header() {
  const navigate = useNavigate();

  function goTo() {
    navigate("/shopping-cart");
  }

  return (
    <Container>
      <ContentHeader>
        <Title>WeMovies</Title>
        <Suspense fallback={<LoadingIcon />}>
          <MyCart onClick={goTo} />
        </Suspense>
      </ContentHeader>
    </Container>
  );
}
