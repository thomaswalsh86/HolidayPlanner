// Theme.tsx
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1c478c',
            light: '#4a6cad',
            dark: '#133062'
        },
        secondary: {
            main: '#f58a2c',
            light: '#f7a156',
            dark: '#ac601e'
        },
        background: {
            default: '#f5f7fa',
            paper: '#ffffff'
        },
        text: {
            primary: '#1a202c',
            secondary: '#4a5568'
        }
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h5: {
            fontWeight: 500,
            fontSize: '1.5rem',
        },
        button: {
            textTransform: 'none',
            fontWeight: 500
        }
    },
    shape: {
        borderRadius: 8
    },
    spacing: 8,
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    padding: '8px 16px'
                }
            }
        },
        MuiTextField: {
            defaultProps: {
                size: 'small',
                variant: 'outlined'
            }
        }
    }
});

export default theme;