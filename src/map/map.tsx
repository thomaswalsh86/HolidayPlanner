import MiniMap from "./fromSearchMap";
import { Box,Card, CardContent, Slider, Typography } from "@mui/material";
import { useAddress } from "../services/addressProvider";
import * as React from 'react';

export default function MainMap(){
    const {address} = useAddress();
    const [zoom, setZoom] = React.useState(15);

    const handleChange = (_event: Event, newValue: number | number[]) => {
        setZoom(typeof newValue === 'number' ? newValue : newValue[0]);
    };

    return(
        <Box sx={{
            display: 'flex',

            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: '800px',
            margin: '10vh 20vw'
        }}>
            <Card variant="outlined" sx={{ width: '90' }}>
                <CardContent>
                    <MiniMap address={address} zoom={zoom} />
                    <Box sx={{ mt: 2 }}>
                        <Typography gutterBottom>{zoom}</Typography>
                        <Slider
                            aria-label="Zoom"
                            value={zoom}
                            onChange={handleChange}
                            min={0}
                            max={20}
                            valueLabelDisplay="auto"
                        />
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}