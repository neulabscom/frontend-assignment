import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';
import theme from '../theme';
import Fonts from '../theme/fonts';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
