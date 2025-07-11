import {
  Box, Card, Typography, CardContent,
  CircularProgress, Divider, Stack, Chip, Button, 
} from "@mui/material";
import { useState } from "react";
import { useAddress } from "../services/addressProvider";
import { format, parseISO } from "date-fns";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";


interface WeatherData {
  hourly?: HourlyData[];
}

interface HourlyData {
  time: string;
  temperature: number;
  humidity: number;
  precipitation: number;
}

export default function Weather() {
  const { address, lat, long } = useAddress();
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getWeatherIcon = (precipitation: number) => {
    if (precipitation > 5) return '🌧️';
    if (precipitation > 0) return '🌦️';
    return '☀️';
  };

  const fetchWeatherData = async () => {
    if (!lat || !long || !startDate || !endDate) {
      setError("Missing required parameters");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const start = startDate.toISOString().split("T")[0];
      const end = endDate.toISOString().split("T")[0];

      const url = `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${long}&start_date=${start}&end_date=${end}&hourly=temperature_2m,relative_humidity_2m,precipitation&timezone=auto`;

      const response = await fetch(url);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.reason || `API request failed with status ${response.status}`);
      }

      const data = await response.json();

      const hourlyData: HourlyData[] = data.hourly.time.map((time: string, index: number) => ({
        time,
        temperature: data.hourly.temperature_2m[index],
        humidity: data.hourly.relative_humidity_2m[index],
        precipitation: data.hourly.precipitation[index],
      }));

      setWeatherData({ hourly: hourlyData });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to fetch weather data";
      setError(errorMessage);
      console.error("Weather API error:", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ minWidth: 275, maxWidth: 800, mx: "auto", my: 4 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Weather Report
          </Typography>

          <Typography color="text.secondary" gutterBottom>
            {address || "Unknown Location"}
          </Typography>
           <Typography color="text.secondary" gutterBottom>
            Tap into weather records going all the way back to the 1940s to get a glimpse of what the skies might have in store
          </Typography>

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack direction="row" spacing={2} my={2}>
              <DatePicker
                label="Start Date"
                value={startDate}
                onChange={(newDate) => setStartDate(newDate)}
              />
              <DatePicker
                label="End Date"
                value={endDate}
                onChange={(newDate) => setEndDate(newDate)}

              />
              <Button variant="contained" onClick={fetchWeatherData} disabled={!startDate || !endDate}>
                Load Weather
              </Button>
            </Stack>
          </LocalizationProvider>

          {startDate && endDate && (
            <Typography color="text.secondary" gutterBottom>
              {format(startDate, "MMM d, yyyy")} to {format(endDate, "MMM d, yyyy")}
            </Typography>
          )}

          {loading && (
            <Box display="flex" justifyContent="center" my={4}>
              <CircularProgress />
            </Box>
          )}

          {error && (
            <Typography color="error" sx={{ my: 2 }}>
              Error: {error}
            </Typography>
          )}

          {weatherData?.hourly && (
            <Box mt={2}>
              <Divider sx={{ my: 2 }} />
              <Stack spacing={2}>
                {weatherData.hourly
                  .filter((_, i) => i % 6 === 0)
                  .map((hour, index) => (
                    <Box
                      key={index}
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography>
                        {format(parseISO(hour.time), "MMM d, h:mm a")}
                      </Typography>
                      <Box sx={{ display: "flex", gap: 2 }}>
                        <Chip
                          label={`${hour.temperature}°C`}
                          variant="outlined"
                          size="small"
                        />
                        <Chip
                          label={`${hour.humidity}%`}
                          variant="outlined"
                          size="small"
                        />
                        <Chip
                          label={`${hour.precipitation} mm`}
                          variant="outlined"
                          size="small"
                          color={hour.precipitation > 1 ? "error" : "default"}
                        />
                        <Typography>{getWeatherIcon(hour.precipitation)}</Typography>
                      </Box>
                    </Box>
                  ))}
              </Stack>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
