// styled.d.ts
import { theme } from "@/pages/_app";
import "styled-components";
interface IPalette {
  main: string;
  contrastText: string;
}

type CustomTheme = typeof theme;
declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
