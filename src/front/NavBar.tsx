import * as React from 'react';
import { AppBar, Box, InputBase, styled, alpha, Typography, Toolbar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NavigationIcon from '@mui/icons-material/Navigation';
//import { search } from '../services/comtextInterface';



const Search = styled('div')(({ theme }: any) => ({
    position: 'relative',
    borderRadius: '5px',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '50ch',
        },
    },
}));
//const [address,setAddress] = search.selectAddress|"";

export default function NavBar() {
  /*
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };
*/
const searchRef = React.useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    const searchQuery = searchRef.current?.value;
    console.log("Your search: " + searchQuery);
    if (searchQuery) {
      //API HERE
    }
  };



    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ top: 0, left: 0, right: 0 }}>
                <Toolbar>
                  <NavigationIcon />
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block', marginLeft:'10px'} }}
                    >
                        Holiday Planner
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder={"Search for Destination!!!"}
                            inputProps={{ 'aria-label': 'search' }}
                            inputRef={searchRef}
                            onKeyDown={(e)=>{
                              if(e.key=== "Enter"){handleSearch();
                              }                            
                            }}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    );
}