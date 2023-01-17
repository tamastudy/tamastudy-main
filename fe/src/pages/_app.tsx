import "swiper/css";

import { QueryProvider } from "@/ui/client-providers";
import { Splash } from "@/ui/Splash";
import type { AppProps } from "next/app";
import Head from "next/head";
import {
  createGlobalStyle,
  css,
  CSSObject,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
  ThemeProvider,
} from "styled-components";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const theme = {
  colors: {
    primary: "#6500fc",
    white: "#ffffff",
    black: "#000000",
  },
  media: {
    tablet: (
      first: CSSObject | TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): FlattenSimpleInterpolation => css`
      @media (min-width: 43rem) {
        ${css(first, ...interpolations)}
      }
    `,
    laptop: (
      first: CSSObject | TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): FlattenSimpleInterpolation => css`
      @media (min-width: 62rem) {
        ${css(first, ...interpolations)}
      }
    `,
    desktop: (
      first: CSSObject | TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): FlattenSimpleInterpolation => css`
      @media (min-width: 82rem) {
        ${css(first, ...interpolations)}
      }
    `,
  },
} as const;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content={`${theme.colors.primary}`} />
        <meta
          name="msapplication-TileColor"
          content={`${theme.colors.primary}`}
        />
        <meta
          name="googlebot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="bingbot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="theme-color" content={theme.colors.primary} />
        <meta
          name="msapplication-config"
          content="/seo/favicon/site.webmanifest"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/seo/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/seo/favicon/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="/manifest.json"
          crossOrigin="use-credentials"
        />
        <link
          rel="mask-icon"
          href="/img/favicon/safari-pinned-tab.svg"
          color={`${theme.colors.primary}`}
        />
        <link rel="shortcut icon" href="/img/favicon/favicon.ico" />
      </Head>
      <div className={roboto.className}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Splash>
            <QueryProvider>
              <Component {...pageProps} />
            </QueryProvider>
          </Splash>
        </ThemeProvider>
      </div>
    </>
  );
}

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  ::-webkit-scrollbar {
    display: none;
  }
}

body {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
}

a {
  color: inherit;
  text-decoration: none;
}
`;
