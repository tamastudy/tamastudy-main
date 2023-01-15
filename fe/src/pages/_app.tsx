import { QueryProvider } from "@/ui/client-providers";
import { Splash } from "@/ui/Splash";
import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      theme={{
        colors: {
          primary: "#6500fc",
        },
      }}
    >
      <GlobalStyles />
      <Splash>
        <QueryProvider>
          <Component {...pageProps} />
        </QueryProvider>
      </Splash>
    </ThemeProvider>
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
  overflow-x: hidden;
}

body {
}

a {
  color: inherit;
  text-decoration: none;
}
`;
