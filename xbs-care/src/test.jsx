import FormGroup from '@mui/material/FormGroup';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import CustomAlert from './components/xbs-alerts/xbs-alerts';
import { BasicTextField } from './components/xbs-input-fields/basic-text-field';
import DateCalendarField from './components/xbs-input-fields/date-field';
import { PasswordField } from './components/xbs-input-fields/password-text-field';
import { SelectField } from './components/xbs-input-fields/select-text-field';
import { TextareaField } from './components/xbs-input-fields/text-area-field';
import CustomSwitch from './components/xbs-switch/switch';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CustomLabel from './components/xbs-input-fields/label';
import Box from '@mui/material/Box';
import CustomCard from './components/xbs-card/card';


function Test() {
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
      <TextareaField label="Textarea Field" value={textareaText} onChange={(e) => setTextareaText(e.target.value)} />
      <div className="mt-4">
        <SelectField label="Select Field" value={selectValue} onChange={(e) => setSelectValue(e.target.value)} options={selectOptions} />
        <PasswordField label="Password Field" value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} />

        <div>
          


          <FormGroup>
            <CustomSwitch
              label="Trading Address is trading address same as above"
              checked={switchState}
              onChange={handleSwitchChange}
            />
          </FormGroup>

          <DateCalendarField
            label="Select a Date"

            onChange={handleDateChange}
          />

          <CustomAlert severity="success" label="This is a success Alert." />
          <CustomAlert severity="info" label="This is a info message." />
          <Box
      max-height={600}
      width={600} >
          <Card className='mt-4 mb-4  mr-4'>
            <CardContent>
              <CustomLabel text="Terms and Conditions" className="text-bold" variant="h6" color="#194A9F">
              </CustomLabel>
              <CustomLabel text="Your Agreement" variant="subtitle2" color="#132F41"  >
              </CustomLabel>
              <CustomLabel text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
        " variant="body2" />
        <CustomLabel text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
        " variant="body2" />
        <CustomLabel text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
        " variant="body2" />
        <CustomLabel text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
        " variant="body2" />
              

            </CardContent>
          </Card>

          
          </Box>

          <CustomCard></CustomCard>
        </div>
      </div>





    </div>

  );
}

export default Test;
