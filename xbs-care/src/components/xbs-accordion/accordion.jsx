import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function CustomAccordion({ summary, children, defaultExpanded }) {
  return (
    <Accordion 
    defaultExpanded={defaultExpanded}
    sx={{
      '&.MuiPaper-elevation1': {
          boxShadow: 'none'
        },
        '&:before': {
          display: 'none'
        },
        '&.Mui-expanded': { 
          margin: '0 !important'
        }
    }}>
      <AccordionSummary 
        expandIcon={<ExpandMoreIcon />}
        sx={{
          borderRadius: '20px',
          border: '1px solid var(--Light-Backgrounds-Neutral-Base, #CCCED5)',
          background: 'var(--Light-Backgrounds-Neutral-xlight, #F0F2F4)',
          '&.Mui-expanded': {
            margin: '0 !important', 
            minHeight: '48px',
          },
          '.MuiAccordionSummary-content.Mui-expanded': {
            margin: '12px 0',
          },
        }}
      >
        <Typography>{summary}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {children}
      </AccordionDetails>
    </Accordion>
  );
}

export default CustomAccordion;
