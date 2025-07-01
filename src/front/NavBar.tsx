import * as React from 'react';
import { AppBar, Box, InputBase, styled, alpha, Typography, Toolbar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NavigationIcon from '@mui/icons-material/Navigation';
import { useAddress } from '../services/addressProvider';

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

export default function NavBar() {
const {setAddress} = useAddress();
const searchRef = React.useRef<HTMLInputElement>(null);

    const handleSearch = () => {
        const searchQuery = searchRef.current?.value.trim();
        if (searchQuery) {
            console.log("SearchQuery: "+searchQuery);
            setAddress(searchQuery);
            
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
                                console.log("Entered!!!"+searchRef.current?.value)
                              }                            
                            }}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    );
}