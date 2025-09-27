/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: ignored */
import { Head, Html, Main, NextScript } from 'next/document'
import { getCssText } from '@/styles'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous" /* Por padrão ele vem como crossorigin, mas pode ser alterado para crossOrigin="anonymous" */
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>

        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
