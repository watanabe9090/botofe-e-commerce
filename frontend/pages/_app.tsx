import '@/styles/globals.css'
import { createTheme, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'


const theme = createTheme({

})

export default function App({ Component, pageProps }: AppProps) {
  return <>
    {/* <ThemeProvider theme={theme}> */}
      <Component {...pageProps} />
    {/* </ThemeProvider> */}
  </>
}
