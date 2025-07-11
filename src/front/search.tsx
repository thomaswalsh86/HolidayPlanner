// SearchBar.tsx
import { Box, InputBase, alpha, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DateRangeSelector from './calendar';
import { useAddress } from '../services/addressProvider';
import * as React from 'react';

export default function SearchBar() {
    const theme = useTheme();
    const { setAddress } = useAddress();
    const searchRef = React.useRef<HTMLInputElement>(null);

    const handleSearch = () => {
        const searchQuery = searchRef.current?.value.trim();
        if (searchQuery) {
            setAddress(searchQuery);
        }
    };

    return (
        <Box sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            maxWidth: "900px",
            gap: theme.spacing(3),
            margin: theme.spacing(4, 'auto'),
            padding: theme.spacing(0, 2)
        }}>
            <Box sx={{
                position: 'relative',
                borderRadius: '8px',
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                '&:hover': {
                    backgroundColor: alpha(theme.palette.primary.main, 0.15),
                    borderColor: alpha(theme.palette.primary.main, 0.5),
                },
                '&:focus-within': {
                    backgroundColor: alpha(theme.palette.primary.main, 0.15),
                    borderColor: theme.palette.primary.main,
                    boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.2)}`
                },
                width: '100%',
                maxWidth: '500px',
                transition: 'all 0.3s ease'
            }}>
                <Box sx={{
                    padding: theme.spacing(0, 2),
                    height: '100%',
                    position: 'absolute',
                    pointerEvents: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: theme.palette.primary.main
                }}>
                    <SearchIcon />
                </Box>
                <InputBase
                    placeholder="Search destination..."
                    inputProps={{ 'aria-label': 'search' }}
                    inputRef={searchRef}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleSearch();
                    }}
                    sx={{
                        color: theme.palette.text.primary,
                        width: '100%',
                        padding: theme.spacing(1.5, 1, 1.5, 6),
                        '& .MuiInputBase-input': {
                            transition: theme.transitions.create('width'),
                            '&::placeholder': {
                                color: alpha(theme.palette.primary.main, 0.7),
                                opacity: 1
                            }
                        }
                    }}
                />
            </Box>

            <Box sx={{
                width: '100%',
                maxWidth: { xs: '100%', sm: '400px' },
                '& .MuiTextField-root': {
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                    borderRadius: '8px',
                    '&:hover': {
                        backgroundColor: alpha(theme.palette.primary.main, 0.15),
                        borderColor: alpha(theme.palette.primary.main, 0.5),
                    },
                    '& .Mui-focused': {
                        borderColor: theme.palette.primary.main,
                        boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.2)}`
                    }
                }
            }}>
                <DateRangeSelector />
            </Box>
        </Box>
    );
}