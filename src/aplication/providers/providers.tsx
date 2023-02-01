import { PropsWithChildren, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
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
