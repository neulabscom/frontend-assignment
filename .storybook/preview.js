import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import Fonts from '../theme/fonts';
import theme from '../theme';

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Fonts />
      <Story />
    </ChakraProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
