import React from 'react';
import { Card, CardContent } from '@mui/material';
import CustomLabel from '../xbs-input-fields/label';
// import '../assets/xbs-styles/styles.css';

const defaultStyle = {
    width: '80vw',
    height: '90vh',
    borderRadius: '40px',
    background: '#FFF',
    boxShadow: '10px 10px 32px 2px #194A9F, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    alignItems: 'flex-start',
    padding: '2rem',
    overflow: 'auto',
    display: 'flex', 
};


const CustomCard = ({ title, content, style }) => {
    return (
        <Card sx={{ ...defaultStyle, ...style }}>
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                {title && <CustomLabel text={title} type={'title'} />}
                <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                {content}
                </div>
            </CardContent>
        </Card>
    );
};

export default CustomCard;
