import { useLocation, useNavigate } from "react-router-dom";
import { Container, ContentHeader, Title } from "./styles";
import LoadingIcon from "../../assets/icons/loading";
import { Suspense } from "react";
import MyCart from "../myCart";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  function goTo() {
    if (location.pathname !== "/shopping-cart") {
      navigate("/shopping-cart");
    }
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
