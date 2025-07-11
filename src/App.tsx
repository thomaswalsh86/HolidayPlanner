// App.tsx
import NavBar from './front/NavBar';
import MainMap from './map/map';
import Buttons from './front/Buttons';
import './App.css';
import theme from './front/Theme';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import SearchBar from './front/search';

const App = () => (
    <ThemeProvider theme={theme}>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            width: '100%',
            backgroundColor: theme.palette.background.default
        }}>
            <NavBar />
            <Box component="main" sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flex: 1,
                width: '100%',
                padding: theme.spacing(3),
                gap: theme.spacing(4),
                marginTop: theme.spacing(8)
            }}>
                <SearchBar />
                <MainMap />
                <Buttons />
            </Box>
        </Box>
    </ThemeProvider>
);

export default App;