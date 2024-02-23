import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import CustomLabel from '../xbs-input-fields/label';

const defaultStyle = {
    width: '80vw',
    height: '64vh',
    borderRadius: '40px',
    background: '#FFF',
    boxShadow: '10px 10px 32px 2px #194A9F, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    alignItems: 'flex-start',
    padding: '2rem',
    overflowY: 'auto',
    display: 'flex', 
    flexDirection: 'column'
};

const labelStyle = {
    color: '#194A9F',
    fontSize: '20px',
    fontWeight: 600,
    lineHeight: 'normal',
    width: '100%',
    textAlign: 'left',
    marginBottom: '1rem',
    paddingTop: '3%',
};

const CustomCard = ({ title, content, style }) => {
    return (
        <Card sx={{ ...defaultStyle, ...style }}>
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                {title && <CustomLabel text={title} style={labelStyle} />}
                <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                {content}
                </div>
            </CardContent>
        </Card>
    );
};

export default CustomCard;