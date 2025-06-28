import NavBar from './front/NavBar';
import MiniMap from './map/fromSearchMap';
import './App.css';
import theme from './front/Theme';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />{/*navBar with search*/}
      <MiniMap />{/* map */}     
      {/* buttons */}
      {/* results */}
    </ThemeProvider>
  );
}

export default App