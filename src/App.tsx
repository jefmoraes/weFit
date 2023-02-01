import Providers from "./aplication/providers/providers";
import Router from "./aplication/routes/router";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <Providers>
        <Router />
      </Providers>
    </RecoilRoot>
  );
}
