import { Suspense } from "react";
import LoadingIcon from "../../assets/icons/loading";
import Header from "../../components/header";
import Movies from "./components/movies";
import { Container } from "./styles";

export default function HomeLayout() {
  return (
    <Container>
      <Header />
      <Suspense fallback={<LoadingIcon />}>
        <Movies />
      </Suspense>
    </Container>
  );
}
