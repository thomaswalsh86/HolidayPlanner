// Buttons.tsx
import { useState } from "react";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import Weather from "../Info/Weather";

export default function Buttons() {
  const [selectedTab, setSelectedTab] = useState<"Weather" | "News" | "Hotspots">("Weather");

  const handleTabChange = (tab: "Weather" | "News" | "Hotspots") => {
    setSelectedTab(tab);
  };

  const tabs = ["Weather", "News", "Hotspots"] as const;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        margin: "20px 0",
      }}
    >
      <ButtonGroup 
        size="large" 
        aria-label="Navigation tabs" 
        variant="contained"
        sx={{ mb: 4 }}
      >
        {tabs.map((tab) => (
          <Button 
            key={tab}
            onClick={() => handleTabChange(tab)}
            variant={selectedTab === tab ? "contained" : "outlined"}
            sx={{
              backgroundColor: selectedTab === tab ? 'primary.main' : 'background.paper',
              '&:hover': {
                backgroundColor: selectedTab === tab ? 'primary.dark' : 'action.hover',
              }
            }}
          >
            {tab}
          </Button>
        ))}
      </ButtonGroup>

      <Box sx={{ width: '100%' }}>
        {selectedTab === "Weather" && <Weather />}
        {selectedTab === "News" && (
          <Box sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h5">News Feed</Typography>
            <Typography color="text.secondary">News content will appear here</Typography>
          </Box>
        )}
        {selectedTab === "Hotspots" && (
          <Box sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h5">Local Hotspots</Typography>
            <Typography color="text.secondary">Hotspot information will appear here</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}