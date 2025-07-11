import { Box, Stack, Typography } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { useDate } from '../services/addressProvider';

export default function DateRangeSelector() {
  const { dateStart, dateEnd, setDateStart, setDateEnd } = useDate();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box>
        <Stack direction="row" spacing={1} alignItems="center">
          <DatePicker
            label="Start"
            value={dateStart}
            onChange={(newDate) => setDateStart(newDate)}
            slotProps={{
              textField: {
                size: 'small',
                sx: { width: 160 }
              }
            }}
          />
          <Typography variant="body2" sx={{ mx: 0.5 }}>to</Typography>
          <DatePicker
            label="End"
            value={dateEnd}
            onChange={(newDate) => setDateEnd(newDate)}
            slotProps={{
              textField: {
                size: 'small',
                sx: { width: 160 }
              }
            }}
          />
        </Stack>
      </Box>
    </LocalizationProvider>
  );
}