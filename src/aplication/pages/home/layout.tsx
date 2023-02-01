import { Suspense } from "react";
import { useRecoilValue } from "recoil";
import LoadingIcon from "../../assets/icons/loading";
import Header from "../../components/header";
import { movieListState } from "../states";
import MovieCard from "./components/movieCard";
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
