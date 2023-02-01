import "styled-components";
import themes from "../aplication/styles/themes";
type Theme = typeof themes.dark;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
