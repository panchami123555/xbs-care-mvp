import { BasicTextField } from './components/xbs-input-fields/basic-text-field';
import { SelectField } from './components/xbs-input-fields/select-text-field';
import { TextareaField } from './components/xbs-input-fields/text-area-field';
import logo from './logo.svg';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { PasswordField } from './components/xbs-input-fields/password-text-field';
import BasicAcoordion from './components/accordion/basic-accordion';

function App() {
  const [normalText, setNormalText] = useState('');
  const [textareaText, setTextareaText] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [switchState, setSwitchState] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };
  const handleSwitchChange = () => {
    setSwitchState(!switchState);
  };
  console.log(textareaText)
   console.log(passwordValue)
  const selectOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  return (
    <div className="mt-4">
      <BasicTextField label="Basic field" value={normalText} size='normal' onChange={(e) => setNormalText(e.target.value)} />
      <TextareaField  label="Textarea Field" value={textareaText} onChange={(e) => setTextareaText(e.target.value)} />
      <div className="mt-4">
      <SelectField  label="Select Field" value={selectValue} onChange={(e) => setSelectValue(e.target.value)} options={selectOptions} />
      <PasswordField label="Password Field" value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} />

      <div>
      <BasicAcoordion
        title="Accordion 1"
        content={<Typography>Your content for Accordion 1</Typography>}
      />
      <BasicAcoordion
        title="Accordion 2"
        content={<Typography>Your content for Accordion 2</Typography>}
      />
      

      <FormGroup>
      <CustomSwitch
        label="Trading Address is trading address same as above"
        checked={switchState}
        onChange={handleSwitchChange}
      />
    </FormGroup>

    <ReusableDateCalendar
        label="Select a Date"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>
      </div>
      
      
      


    </div>
    
  );
}

export default App;
