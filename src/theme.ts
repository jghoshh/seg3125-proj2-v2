import { extendTheme, theme as baseTheme } from '@chakra-ui/react';

const theme = extendTheme({
  textStyles: {
    h2: {
      fontSize: ['4xl', '5xl'],
      fontWeight: 'bold',
      lineHeight: '130%',
      letterSpacing: 'tight',
    },
  },
  fonts: {
    heading: "Instrument Serif, serif",
    body: "Barlow Semi Condensed, sans-serif",
  },
  components: {
    Link: {
      baseStyle: {
        letterSpacing: "widest", 
        fontWeight: "bold", 
        textDecoration: "underline" 
      }
    },
    Heading: {
      baseStyle: {
        letterSpacing: "0.01em",
      },
      variants: {
        h1: {
          fontSize: baseTheme.fontSizes['7xl'],
          fontWeight: "light",
          lineHeight: '130%',
        },
        h2: {
          fontSize: baseTheme.fontSizes['5xl'],
          fontWeight: "light",
          lineHeight: '130%',
        },
        h3: {
          fontSize: baseTheme.fontSizes['4xl'],
          fontWeight: "light",
          lineHeight: '130%',
        },
        h4: {
          fontSize: baseTheme.fontSizes['2xl'],
          fontWeight: "light",
          lineHeight: '130%',
        },
      },
    },
    Divider: {
      baseStyle: {
        borderColor: "black",
        borderWidth: '2px',
      }
    },
    Button: {
      variants: {
        solid: {
          bg: "black",
          color: "white",
          _hover: {
            bg: "gray.700",
          },
          _active: {
            bg: "gray.800",
          },
        },
      },
    },
  }
});

export default theme;