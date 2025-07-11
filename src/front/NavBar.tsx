
import { AppBar, Box, Typography, Toolbar } from '@mui/material';
import NavigationIcon from '@mui/icons-material/Navigation';

export default function NavBar() {


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ top: 0, left: 0, right: 0 }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <NavigationIcon />
                        <Typography
                            variant="h5"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' }, ml: 1 }}
                        >
                            Holiday Planner
                        </Typography>
                    </Box>
                    
                    
                </Toolbar>
            </AppBar>
        </Box>
    );
}