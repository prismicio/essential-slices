const breakpoints = [
  `640px`, // 40rem
  `896px`, // 56rem
  `1280px`, // 80rem
]

const baseColors = {
  primary: '#8592e0',
  primaryDark: '#16745f',
  primaryDarker: '#0d5e4c',
  secondary: '#f4f0ec',
  grey0: '#000000',
  grey20: '#333333',
  grey90: '#e6e6e6',
  grey53: '#878787',
  white: '#fff',
}

const headings = {
  level: {
    1: {
      fontSize: [
        '1.625rem', // 26px
        '2rem', // 32px
        '2.5rem', // 40px
        '2.75rem', // 44px
      ],
      lineHeight: 1.3,
      mb: ['hPaddingHalf', null, 'hPadding'],
    },
    4: {
      lineHeight: 1.2,
    },
  },
}

export default {
  background: {
    default: {
      bg: 'white',
      color: 'dark',
    },
    dark: {
      bg: 'dark',
      color: 'white',
    },
    secondary: {
      bg: 'secondary',
      color: 'dark',
    },
  },
  breakpoints,
  buttons: {
    default: {
      bg: 'gray',
      color: 'white',
      '&:hover': {
        backgroundColor: 'primaryDark',
      },
    },
    primary: {
      bg: 'primaryDark',
      color: 'white',
      '&:hover': {
        backgroundColor: 'primaryDarker',
      },
    },
    secondary: {
      bg: 'grey0',
      color: 'white',
      '&:hover': {
        backgroundColor: 'grey20',
      },
    },
    arrow: {
      background: 'transparent',
      border: '2px dotted transparent',
      color: 'dark',
      '&:focus': {
        borderColor: 'dark',
      },
      '&:hover': {
        color: 'border',
      },
    },
  },
  colors: {
    ...baseColors,
    textGrey: baseColors.grey53,
    transparent: 'transparent',
    dark: baseColors.grey0,
    text: baseColors.grey20,
    background: baseColors.white,
    body: baseColors.grey0,
    border: '#ccc',
    modes: {
      dark: {
        background: baseColors.grey0,
        text: baseColors.white,
      },
    },
  },
  container: {
    inner: {
      py: '8vw',
      px: '2rem',
    },
    wrapper: {
      maxWidth: ['90%', null, null, '75%'],
      m: '0 auto',
    },
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: '"Inter", serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    tiny: '.875rem',
    base: '0.9rem',
    kicker: '1.15rem',
    lg: '1.4rem',
    xl: '2.75rem',
  },
  fontWeights: {
    lean: '350',
    body: '400',
    normal: '500',
    heading: '600',
  },

  lineHeights: {
    heading: '1.25',
    button: '1.3',
    desc: '1.45',
    body: '1.625',
  },
  radii: {
    button: '4px',
    card: '8px',
  },
  sizes: {
    full: '100%',
  },
  space: {
    // Legacy vuejs scales.
    hPaddingHalf: '1rem',
    hPadding: '2rem',
    cPadding: '1.25rem',
    cMargin: '1rem',

    vMargin: '2.5rem',
    vMargin2x: '5rem',

    vSpace: '8vw',

    // New spaces scale.
    none: 0,
    xxsmall: '0.25rem', // 4px
    xsmall: '0.5rem', // 8px
    small: '1rem', // 16px
    medium: '2rem', // 32px
    large: '4rem', // 64px
    xlarge: '8rem', // 128px
    xxlarge: '16rem', // 256px
    xxxlarge: '32rem', // 512px
  },

  // Default Components

  cards: {
    default: {
      bg: 'secondary',
      color: 'dark',
    },
  },

  styles: {
    root: {
      color: 'text',
      bg: 'background',
      fontSize: 'base',
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      m: 0,
      p: 0,
    },
    'h1, h2, h3, h4': {
      mt: 0,
    },
    h1: {
      ...headings.level[1],
    },
    p: {
      fontSize: 'body',
      mt: 0,
    },
    img: {
      maxWidth: '100%',
    },
  },
  text: {
    desc: {
      fontSize: 'lg',
      fontWeight: 'lean',
      lineHeight: 'desc',
      mx: 'auto',
      mt: 'vMargin',
      maxWidth: '42rem',
    },
  },
}
