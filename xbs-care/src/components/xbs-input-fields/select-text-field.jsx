
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const SelectField = ({ label, value, onChange, options }) => (

    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
            value={value} onChange={onChange} label={label}
        >
            {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>

            ))}
        </Select>
    </FormControl>
);