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
        lineHeight: '130%',
        fontWeight: "light",
      },
      variants: {
        h1: {
          fontSize: baseTheme.fontSizes['7xl'],
        },
        h2: {
          fontSize: baseTheme.fontSizes['5xl'],
        },
        h3: {
          fontSize: baseTheme.fontSizes['4xl'],
        },
        h4: {
          fontSize: baseTheme.fontSizes['2xl'],
          lineHeight: "150%"
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
            bg: "gray.800",
          },
          _active: {
            bg: "gray.800",
          },
        },
      },
    },
  },
});

export default theme;