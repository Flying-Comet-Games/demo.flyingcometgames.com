import { createTheme } from '@mui/material/styles';

const alamedaPostTheme = createTheme({
  palette: {
    primary: {
      main: '#000000', // Deep navy, matching Alameda Post's header
    },
    secondary: {
      main: '#d62828', // Bright red, inspired by the "Support Us" button
    },
    background: {
      default: 'black', // White background
      paper: '#F5F5F5', // Light gray for paper-like components
    },
    text: {
      primary: '#000000', // Black text for readability
      secondary: '#4A4A4A', // Dark gray for secondary text
    },
    divider: '#CCCCCC', // Light gray for dividers
  },
  typography: {
    fontFamily: '"Lora", serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
    h1: {
      fontFamily: '"Lora", serif',
      fontWeight: 700,
      fontSize: '3rem',
    },
    h2: {
      fontFamily: '"Lora", serif',
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h3: {
      fontFamily: '"Lora", serif',
      fontWeight: 700,
      fontSize: '2rem',
    },
    h4: {
      fontFamily: '"Lora", serif',
      fontWeight: 600,
      fontSize: '1.75rem',
    },
    h5: {
      fontFamily: '"Lora", serif',
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h6: {
      fontFamily: '"Lora", serif',
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    subtitle1: {
      fontFamily: '"Lora", serif',
      fontWeight: 500,
      fontSize: '1.1rem',
    },
    subtitle2: {
      fontFamily: '"Lora", serif',
      fontWeight: 500,
      fontSize: '1rem',
    },
    button: {
      fontFamily: '"Lora", serif',
      textTransform: 'none',
      fontWeight: 600,
    },
    body1: {
      fontFamily: '"Lora", serif',
      fontSize: '1rem',
      lineHeight: 1.6,
      fontWeight: 700,
    },
    body2: {
      fontFamily: '"Lora", serif',
      fontSize: '0.875rem',
      lineHeight: 1.5,
      fontWeight: 400,
      color: '#4A4A4A',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#002855', // Matches header/nav color
          color: '#FFFFFF', // White text for contrast
          boxShadow: 'none',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '56px',
          '@media (min-width: 600px)': {
            minHeight: '64px',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          '&:hover': {
            backgroundColor: 'rgba(0, 40, 85, 0.1)', // Light overlay on hover
          },
        },
        contained: {
          backgroundColor: '#d62828', // Bright red for primary buttons
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#a02020', // Darker red on hover
          },
        },
        text: {
          color: '#002855',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(0, 40, 85, 0.1)', // Light overlay on hover
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width: 1200px)': {
            maxWidth: '1140px',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#CCCCCC',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#002855',
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
          borderRadius: 8,
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          '& > .MuiGrid-item': {
            paddingTop: '20px',
            paddingBottom: '20px',
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default alamedaPostTheme;
