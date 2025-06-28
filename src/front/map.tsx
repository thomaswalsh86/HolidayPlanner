import MiniMap from "../map/fromSearchMap";
import { Box } from "@mui/material";
import { useAddress } from "../services/addressProvider";

export default function onSearch(insert:string){
    const {address} = useAddress();
    return(
        <Box sx={{ flexGrow: 1 }}>
            <Box sx={{display:"flex"}}>
                <Box sx={{width:"80%",height:"100px"}}>
                    if(address)
                    {
                        <MiniMap />
                    }
                </Box>
            </Box>
        </Box>

    );
}