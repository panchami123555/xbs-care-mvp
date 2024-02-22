import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import * as React from 'react';

export default function DateCalendarField({ label, value, onChange, dateAdapter = AdapterDayjs, ...props }) {
  return (
    <LocalizationProvider dateAdapter={dateAdapter}>
       <DemoContainer components={['DatePicker']}>
   
   <DatePicker label={label} 
        value={value}
        onChange={(newValue) => onChange(newValue)}
        {...props} />
      </DemoContainer>
    </LocalizationProvider>
  );
}
