/* eslint-disable @typescript-eslint/no-empty-object-type */
import "styled-components";
import { defaultTheme } from "../styles/themes/default";

type ThemeType = typeof defaultTheme;

// Sobrescrever tipagem, define os tipos de temas
declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
