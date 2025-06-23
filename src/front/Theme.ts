import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette:{
        primary: {
            main:'#1c478c'
        },
        secondary:{
            main:'#f58a2c'
        },
    },
        typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h5: {
            fontWeight: 500,
            fontSize: '1.5rem',
        },
    },
    spacing: 8,
});

export default theme