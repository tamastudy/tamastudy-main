import "swiper/css";
import "react-image-lightbox/style.css";
import { ReactQueryProvider } from "@/ui/ReactQueryProvider";
import { Splash } from "@/ui/Splash";
import type { AppProps, NextWebVitalsMetric } from "next/app";
import Head from "next/head";
import {
  createGlobalStyle,
  css,
  CSSObject,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
  ThemeProvider,
} from "styled-components";
import { GoogleAnalytics, event } from "nextjs-google-analytics";

import { Roboto } from "@next/font/google";

// pages/_app.js

export function reportWebVitals({
  id,
  name,
  label,
  value,
}: NextWebVitalsMetric) {
  event(name, {
    category: label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    label: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  });
}

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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
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
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color={`${theme.colors.primary}`}
        />
        <meta
          name="msapplication-TileColor"
          content={`${theme.colors.primary}`}
        />
        <meta name="theme-color" content={`${theme.colors.primary}`}></meta>
      </Head>
      <GoogleAnalytics trackPageViews />
      <div className={roboto.className}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Splash>
            <ReactQueryProvider>
              <Component {...pageProps} />
            </ReactQueryProvider>
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
