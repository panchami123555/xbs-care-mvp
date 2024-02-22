import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function DateCalendarField({ label, value, onChange, dateAdapter = AdapterDayjs, ...props }) {
  return (
    <LocalizationProvider dateAdapter={dateAdapter}>
      <DateCalendar
        label={label}
        value={value}
        onChange={(newValue) => onChange(newValue)}
        {...props}
      />
    </LocalizationProvider>
  );
}
