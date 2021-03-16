import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from 'styles/global'
import theme from 'styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  const HeadContent = () => (
    <Head>
      <title>NextJS Storybook template</title>
      <link rel="shortcut icon" href="/img/icon-512.png" />
      <link rel="apple-touch-icon" href="/img/icon-512.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta
        name="description"
        content="A simple project to work with TypeScript, React, NextJS, Styled Components and Storybook!"
      />
    </Head>
  )

  return (
    <ThemeProvider theme={theme}>
      <HeadContent />
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
