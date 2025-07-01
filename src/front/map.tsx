import MiniMap from "../map/fromSearchMap";
import { Box } from "@mui/material";
import { useAddress } from "../services/addressProvider";

export default function MainMap(){
    const {address} = useAddress();

    return(
        <Box sx={{flexGrow:1, display:"flex", top:20, left:0, }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 2, width: "100%" }}>
                <Box sx={{ width: "80%", height: "100px", bgcolor: "white"}}>
                    <MiniMap address={address}/>
                </Box>
            </Box>
        </Box>
    );
}