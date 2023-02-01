import { atom, selector } from "recoil";
import { api } from "../../infrastructure/services/api";
import { MovieProps } from "./home/components/movieCard";

export const movieListState = selector<MovieProps[]>({
  key: "movieList",
  get: async () => {
    try {
      const response = await api.get("/");
      return response.data;
    } catch (error) {
      alert("verifique sua conexão");
    }
  },
});

export type shoppingCartProps = {
  movie: MovieProps;
  quantity: number;
};

export const shoppingCartState = atom<shoppingCartProps[]>({
  key: "shoppingCart",
  default: [],
  effects: [
    ({ onSet, setSelf }) => {
      const storage = localStorage.getItem("shoppingCart");
      if (storage !== null) {
        setSelf(JSON.parse(storage) as shoppingCartProps[]);
      }

      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem("shoppingCart")
          : localStorage.setItem("shoppingCart", JSON.stringify(newValue));
      });
    },
  ],
});
