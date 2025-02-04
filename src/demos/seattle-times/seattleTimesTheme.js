import { createTheme } from '@mui/material/styles';

const seattleTimesTheme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#4C4C4C',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#000000',
      secondary: '#4C4C4C',
    },
    divider: '#E0E0E0',
  },
  typography: {
    fontFamily: '"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
    h1: {
      fontFamily: '"Source Sans Pro", sans-serif',
      fontWeight: 700,
      fontSize: '3.5rem',
    },
    h2: {
      fontFamily: '"Source Sans Pro", sans-serif',
      fontWeight: 700,
      fontSize: '3rem',
    },
    h3: {
      fontFamily: '"Source Sans Pro", sans-serif',
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h4: {
      fontFamily: '"Source Sans Pro", sans-serif',
      fontWeight: 600,
      fontSize: '2rem',
    },
    h5: {
      fontFamily: '"Source Sans Pro", sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h6: {
      fontFamily: '"Source Sans Pro", sans-serif',
      fontWeight: 600,
      fontSize: '1.1rem',
    },
    subtitle1: {
      fontFamily: '"Source Sans Pro", sans-serif',
      fontWeight: 600,
      fontSize: '1rem',
    },
    subtitle2: {
      fontFamily: '"Source Sans Pro", sans-serif',
      fontWeight: 600,
      fontSize: '0.875rem',
    },
    button: {
      fontFamily: '"Source Sans Pro", sans-serif',
      textTransform: 'none',
      fontWeight: 600,
    },
    body1: {
      fontFamily: '"Source Sans Pro", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.6,
      fontWeight: 400,
    },
    body2: {
      fontFamily: '"Source Sans Pro", sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.5,
      fontWeight: 400,
      color: '#4C4C4C',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: '#000000',
          boxShadow: 'none',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '56px',
          '@media (min-width: 600px)': {
            minHeight: '56px',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
        },
        contained: {
          backgroundColor: '#000000',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#333333',
          },
        },
        text: {
          color: '#000000',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width: 1200px)': {
            maxWidth: '1200px',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#E0E0E0',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#000000',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: 'none',
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          '& > .MuiGrid-item': {
            paddingTop: '24px',
            paddingBottom: '24px',
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 0,
  },
});

export default seattleTimesTheme;