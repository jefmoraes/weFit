import { RecoilRoot } from "recoil";
import Providers from "./aplication/providers/providers";
import Router from "./aplication/routes/router";

export default function App() {
  return (
    <RecoilRoot>
      <Providers>
        <Router />
      </Providers>
    </RecoilRoot>
  );
}
