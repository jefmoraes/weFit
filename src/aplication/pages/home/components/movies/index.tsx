import { useRecoilValue } from "recoil";
import { movieListState } from "../../../states";
import MovieCard from "../movieCard";
import { Container } from "./styles";

export default function Movies() {
  const movieList = useRecoilValue(movieListState);

  return (
    <Container>
      {movieList.map((item) => {
        return <MovieCard key={item.id} movie={item} />;
      })}
    </Container>
  );
}
