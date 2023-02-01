import { ThemeProvider } from "styled-components";
import { PropsWithChildren } from "react";
import Global from "../styles/global";
import themes from "../styles/themes";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={themes.dark}>
      <Global />
      {children}
    </ThemeProvider>
  );
}
