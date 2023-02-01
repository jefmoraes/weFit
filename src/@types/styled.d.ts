import themes from "../aplication/styles/themes";
type Theme = typeof themes.dark;
import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
