import { movieListState } from "../../../states";
import { useRecoilValue } from "recoil";
import { Container } from "./styles";
import MovieCard from "../movieCard";

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
