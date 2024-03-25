import React from 'react';
import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import CustomLabel from '../xbs-input-fields/label';

function Profile() {
    return (
        <Card>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <CustomLabel text={"Organisation Profile"} type={'large'} />
                        <CustomLabel text={"Status : Pending"} type={'normal'} />
                        <Button variant="contained" fullWidth style={{ marginBottom: '8px' }}>Agency Details</Button>
                        <Button variant="contained" fullWidth style={{ marginBottom: '8px' }}>Location</Button>
                        <Button variant="contained" fullWidth style={{ marginBottom: '8px' }}>Leadership</Button>
                        <Button variant="contained" fullWidth style={{ marginBottom: '8px' }}>Documents</Button>
                        <Button variant="contained" fullWidth style={{ marginBottom: '8px' }}>E-Signature</Button>
                        <Button variant="contained" fullWidth style={{ marginBottom: '8px' }}>License & Subscription</Button>
                        <Button variant="contained" fullWidth>Approve / Rework</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <CustomLabel text={"Agency Details"} type={'large'} />
                        <CustomLabel text={"Status : Pending"} type={'normal'} />
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="subtitle1" style={{ marginBottom: '16px' }}>Label 1: Random text</Typography>
                                <Typography variant="subtitle1" style={{ marginBottom: '16px' }}>Label 2: Another text</Typography>
                                <Typography variant="subtitle1" style={{ marginBottom: '16px' }}>Label 3: Something else</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="subtitle1" style={{ marginBottom: '16px' }}>Label 4: More random text</Typography>
                                <Typography variant="subtitle1" style={{ marginBottom: '16px' }}>Label 5: Yet another one</Typography>
                                <Typography variant="subtitle1" style={{ marginBottom: '16px' }}>Label 6: Final text</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default Profile;
