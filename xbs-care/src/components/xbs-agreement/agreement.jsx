import React from 'react'
import CustomLabel from '../xbs-input-fields/label'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import '../assets/xbs-styles/styles.css'
import BackButton from '../xbs-buttons/next-back-button';

function Agreement({onAccept}) {
   return (
         <Box className="border p-4 mt-3 overflow-y-scroll box-max-height" >
            <CustomLabel text="Terms and Conditions" className="text-bold" variant="h5" color="#194A9F">
            </CustomLabel>
            <div className="mt-2 mb-2">
               <CustomLabel text="Your Agreement" variant="subtitle2" color="#132F41"   >
               </CustomLabel>
            </div>
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
            {/* <Button
                variant="contained"
                sx={{
                  borderRadius:'10px',
                  backgroundColor: '#123B94',
                  '&:hover': { backgroundColor: '#0f2c6d' },
                }}
              >
                E-Signature
              </Button> */}
              <BackButton label="E-SIGNATURE" onClick={onAccept}></BackButton>
         </Box>
   )
}

export default Agreement