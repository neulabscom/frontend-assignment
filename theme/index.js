import { extendTheme } from '@chakra-ui/react';
import colors from './colors';
import breakpoints from './breakpoints';
import Button from './components/Button';

const overrides = {
  breakpoints,
  colors,
  fonts: {
    heading: 'Special Elite',
    body: 'Sarabun',
  },
  textStyles: {
    h1: {
      fontFamily: 'heading',
      fontSize: '30px',
      fontWeight: 'normal',
      lineHeight: '112%',
      letterSpacing: '0.01em',
      color: 'black',
    },
    h2: {
      fontFamily: 'heading',
      fontSize: '28px',
      fontWeight: 'normal',
      lineHeight: '112%',
      letterSpacing: '0.01em',
      color: 'black',
    },
    h3: {
      fontFamily: 'heading',
      fontSize: '26px',
      fontWeight: 'normal',
      lineHeight: '48px',
      letterSpacing: '0.01em',
      color: 'black',
    },
    h4: {
      fontFamily: 'heading',
      fontSize: '24px',
      fontWeight: 'normal',
      lineHeight: '40px',
      letterSpacing: '0.01em',
      color: 'black',
    },
    h5: {
      fontFamily: 'heading',
      fontSize: '24px',
      fontWeight: 'normal',
      lineHeight: '32px',
      letterSpacing: '0.01em',
      color: 'black',
    },
    h6: {
      fontFamily: 'heading',
      fontSize: '18px',
      fontWeight: 'normal',
      lineHeight: '24px',
      letterSpacing: '0.01em',
      color: 'black',
    },
    body: {
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '16px',
      color: 'black',
    },
    bodySmall: {
      fontSize: '13px',
      fontWeight: '400',
      lineHeight: '24px',
      color: 'black',
    },
    button: {
      fontSize: ['14px'],
      fontWeight: '700',
      lineHeight: '20px',
      color: 'black',
    },
    buttonSmall: {
      fontSize: ['13px'],
      fontWeight: '700',
      lineHeight: '20px',
      color: 'black',
    },
  },
  components: {
    Button,
  },
};

export default extendTheme(overrides);
