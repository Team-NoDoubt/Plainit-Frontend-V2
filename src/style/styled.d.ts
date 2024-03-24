import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: {
        skyBlue: string;
        blue: string;
        darkBlue: string;
        red: string;
        yellow: string;
      };
      error: {
        100: string;
        200: string;
        primary: string;
        400: string;
        500: string;
      };
      gray: {
        10: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        dark: string;
      };
    };
  }
}
