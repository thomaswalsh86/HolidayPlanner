{/*import NavBar from './front/NavBar';
import MainMap from './front/map';
import MiniMap from './map/fromSearchMap';
import './App.css';
import theme from './front/Theme';
import { ThemeProvider } from '@mui/material/styles';
import { useAddress } from './services/addressProvider';
import * as React from "react";

function App() {
  const {setAddress, address} = useAddress();
  
  React.useEffect(() => {
    if(!address || address.trim() === "") {
      setAddress("paris,france");
    }
  }, [address]);

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <MainMap/> 

    </ThemeProvider>
  );
}

export default App;*/}

import NavBar from './front/NavBar';
import MainMap from './front/map';
import MiniMap from './map/fromSearchMap';
import './App.css';
import theme from './front/Theme';
import { ThemeProvider } from '@mui/material/styles';
import { useAddress } from './services/addressProvider';
import * as React from "react";

const App = () => (
  <ThemeProvider theme={theme}>
  <NavBar />
  <MainMap />
  </ThemeProvider>

  
);


export default App;