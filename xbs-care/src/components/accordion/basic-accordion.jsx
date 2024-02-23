import * as React from 'react';
import { styled } from '@mui/system';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import '../assets/xbs-styles/styles.css'
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import '../assets/xbs-styles/styles.css';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))({
  className: 'custom-accordion',
});

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon />}
    {...props}
  />
))({
  className: 'custom-accordion-summary',
});

const AccordionDetails = styled(MuiAccordionDetails)({
  className: 'custom-accordion-details',
});



export default function BasicAcoordion({ title, content }) {
  const [expanded, setExpanded] = React.useState(title.toLowerCase());

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === title.toLowerCase()} onChange={handleChange(title.toLowerCase())}>
        <AccordionSummary aria-controls={`${title.toLowerCase()}d-content`} id={`${title.toLowerCase()}d-header`}>
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {content}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}