import React, { useState, useEffect } from 'react';
import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import CustomLabel from '../xbs-input-fields/label';
import Agreement from '../xbs-agreement/agreement';
import { TextareaField } from '../xbs-input-fields/text-area-field';
import { SelectField } from '../xbs-input-fields/select-text-field';
import './dashboardStyles.css';
import Modal from '../xbs-modal/basic-modal';

function Profile() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isRework, setIsRework] = useState(false);

    const handleReworkModal = () => {
        setIsModalOpen(true);
        setIsRework(true);
    };

    const handleApproveModal = () => {
        setIsModalOpen(true);
        setIsRework(false);
    };
    const handleCloseModal = () => setIsModalOpen(false);
    const buttonStyle = {
        marginBottom: '8px',
        borderRadius: '20px',
        background: '#08A3E0',
        boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        width: '361px',
        height: '52px',
    };
    const cardStyle = {
        borderRadius: '12px',
        background: '#FFF',
        boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.25)',
        height: '802.901px',
        overflow: 'auto',
    };
    const innerCardStyle = {
        borderRadius: '40px',
        background: '#FFF',
        boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.25)',
        overflow: 'auto',
    };
    const outerCardStyle = {
        borderRadius: '20px',
        background: '#F3F8FE',
        boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.25)',
        overflow: 'auto',
    };
    const approveButtonStyle = {
        marginBottom: '8px',
        borderRadius: '16px',
        border: '1px solid #34A853',
        background: '#34A853',
        width: '160px',
        height: '52px',
        boxShadow: 'none',
        '&:active': {
            boxShadow: '3px 2px 4px 0px rgba(126, 126, 126, 0.25) inset',
        },
        paddingLeft: '10px',
    };

    const reworkButtonStyle = {
        marginBottom: '8px',
        borderRadius: '16px',
        background: '#F33',
        width: '160px',
        height: '52px',
        boxShadow: '3px 2px 4px 0px rgba(126, 126, 126, 0.25) inset',
        '&:active': {
            boxShadow: '3px 2px 4px 0px rgba(126, 126, 126, 0.25) inset',
        },
        paddingRight: '10px',
    };
    const selectOptions = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];

    return (
        <Card style={cardStyle}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <CustomLabel text={"Organisation Profile"} type={'large'} />
                        <CustomLabel text={"Status : Pending"} type={'normalHeader'} />
                        <div>
                            <Button variant="contained" style={buttonStyle}>Agency Details</Button>
                        </div>
                        <div>
                            <Button variant="contained" style={buttonStyle}>Location</Button>
                        </div>
                        <div>
                            <Button variant="contained" style={buttonStyle}>Leadership</Button>
                        </div>
                        <div>

                            <Button variant="contained" style={buttonStyle}>Documents</Button>
                        </div>
                        <div>
                            <Button variant="contained" style={buttonStyle}>E-Signature</Button>
                        </div>
                        <div>
                            <Button variant="contained" style={buttonStyle}>License & Subscription</Button>
                        </div>
                        <div>
                            <Button variant="contained" style={{ ...buttonStyle, marginBottom: '0' }}>Approve / Rework</Button>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <card style={outerCardStyle}>
                            <CardContent>
                                <CustomLabel text={"Agency Details"} type={'large'} />
                                <Card style={innerCardStyle}>
                                    <CardContent>

                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <div>
                                                    <CustomLabel text={"Agency Name"} type={'normalHeader'} />
                                                    <CustomLabel text={"Xcubated Business Solutions"} type={'light'} />
                                                </div>
                                                <div>
                                                    <CustomLabel text={"Alternate Contact Number"} type={'normalHeader'} />
                                                    <CustomLabel text={"8089667207"} type={'light'} />
                                                </div>
                                                <div>
                                                    <CustomLabel text={"Official Email id"} type={'normalHeader'} />
                                                    <CustomLabel text={"Xcubated Business Solutions"} type={'light'} />
                                                </div>
                                                <div>
                                                    <CustomLabel text={"Company Registration Number"} type={'normalHeader'} />
                                                    <CustomLabel text={"8089667207"} type={'light'} />
                                                </div>
                                                <div>
                                                    <CustomLabel text={"Number of Resources"} type={'normalHeader'} />
                                                    <CustomLabel text={"8089667207"} type={'light'} />
                                                </div>

                                            </Grid>
                                            <Grid item xs={6}>
                                                <div>
                                                    <CustomLabel text={"Contact Number"} type={'normalHeader'} />
                                                    <CustomLabel text={"Xcubated Business Solutions"} type={'light'} />
                                                </div>
                                                <div>
                                                    <CustomLabel text={"Date of incoperation"} type={'normalHeader'} />
                                                    <CustomLabel text={"8089667207"} type={'light'} />
                                                </div>
                                                <div>
                                                    <CustomLabel text={"Company website"} type={'normalHeader'} />
                                                    <CustomLabel text={"Xcubated Business Solutions"} type={'light'} />
                                                </div>
                                                <div>
                                                    <CustomLabel text={"Unique taxpayer reference (UTR)"} type={'normalHeader'} />
                                                    <CustomLabel text={"8089667207"} type={'light'} />
                                                </div>
                                                <div>
                                                    <CustomLabel text={"Number of clients"} type={'normalHeader'} />
                                                    <CustomLabel text={"8089667207"} type={'light'} />
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                                <CustomLabel text={"Location"} type={'large'} />
                                <Card style={innerCardStyle}>
                                    <CardContent>
                                        <CustomLabel text={"Registered Office Address"} type={'large'} />
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <div>
                                                    <CustomLabel text={"Street address"} type={'normalHeader'} />
                                                    <CustomLabel text={"Xcubated Business Solutions"} type={'light'} />
                                                </div>
                                                <div>
                                                    <CustomLabel text={"Town/City"} type={'normalHeader'} />
                                                    <CustomLabel text={"8089667207"} type={'light'} />
                                                </div>
                                                <div>
                                                    <CustomLabel text={"County"} type={'normalHeader'} />
                                                    <CustomLabel text={"Xcubated Business Solutions"} type={'light'} />
                                                </div>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <div>
                                                    <CustomLabel text={"Locality"} type={'normalHeader'} />
                                                    <CustomLabel text={"Xcubated Business Solutions"} type={'light'} />
                                                </div>
                                                <div>
                                                    <CustomLabel text={"Postal Code"} type={'normalHeader'} />
                                                    <CustomLabel text={"8089667207"} type={'light'} />
                                                </div>
                                                <div>
                                                    <CustomLabel text={"Country"} type={'normalHeader'} />
                                                    <CustomLabel text={"Xcubated Business Solutions"} type={'light'} />
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                                <CustomLabel text={"Leadership Details"} type={'large'} />
                                <Card style={innerCardStyle}>
                                    <CardContent>
                                        <CustomLabel text={"Regional Manager"} type={'large'} />
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <div>
                                                    <CustomLabel text={"Name"} type={'normalHeader'} />
                                                    <CustomLabel text={"Xcubated Business Solutions"} type={'light'} />
                                                </div>
                                                <div>
                                                    <CustomLabel text={"Email"} type={'normalHeader'} />
                                                    <CustomLabel text={"8089667207"} type={'light'} />
                                                </div>
                                                <div>
                                                    <CustomLabel text={"Phone"} type={'normalHeader'} />
                                                    <CustomLabel text={"Xcubated Business Solutions"} type={'light'} />
                                                </div>
                                                <div>
                                                    <CustomLabel text={"Street Address"} type={'normalHeader'} />
                                                    <CustomLabel text={"8089667207"} type={'light'} />
                                                </div>
                                                <div>
                                                    <CustomLabel text={"Town/City"} type={'normalHeader'} />
                                                    <CustomLabel text={"8089667207"} type={'light'} />
                                                </div>

                                            </Grid>
                                            <Grid item xs={6}>
                                                <div>
                                                    <CustomLabel text={"County"} type={'normalHeader'} />
                                                    <CustomLabel text={"Xcubated Business Solutions"} type={'light'} />
                                                </div>
                                                <div>
                                                    <CustomLabel text={"Locality"} type={'normalHeader'} />
                                                    <CustomLabel text={"8089667207"} type={'light'} />
                                                </div>
                                                <div>
                                                    <CustomLabel text={"Postal Code"} type={'normalHeader'} />
                                                    <CustomLabel text={"Xcubated Business Solutions"} type={'light'} />
                                                </div>
                                                <div>
                                                    <CustomLabel text={"Country"} type={'normalHeader'} />
                                                    <CustomLabel text={"8089667207"} type={'light'} />
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </CardContent></Card>
                                <CustomLabel text={"Documents"} type={'large'} />
                                <Card style={innerCardStyle}>
                                    <CardContent>
                                        <CustomLabel text={"Account Statement"} type={'large'} />
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <div>
                                                    <CustomLabel text={"File Name"} type={'normalHeader'} />
                                                    <CustomLabel text={"Xcubated Business Solutions"} type={'light'} />
                                                </div>
                                                <div>
                                                    <CustomLabel text={"Type"} type={'normalHeader'} />
                                                    <CustomLabel text={"8089667207"} type={'light'} />
                                                </div>
                                                <div>
                                                    <CustomLabel text={"Expiry"} type={'normalHeader'} />
                                                    <CustomLabel text={"Xcubated Business Solutions"} type={'light'} />
                                                </div>

                                            </Grid>
                                            <Grid item xs={6}>
                                            </Grid>
                                        </Grid>
                                    </CardContent></Card>
                                <Card style={innerCardStyle}>
                                    <CardContent>
                                        <CustomLabel text={"Blank Check"} type={'large'} />
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <div>
                                                    <CustomLabel text={"File Name"} type={'normalHeader'} />
                                                    <CustomLabel text={"Xcubated Business Solutions"} type={'light'} />
                                                </div>
                                                <div>
                                                    <CustomLabel text={"Type"} type={'normalHeader'} />
                                                    <CustomLabel text={"8089667207"} type={'light'} />
                                                </div>
                                                <div>
                                                    <CustomLabel text={"Expiry"} type={'normalHeader'} />
                                                    <CustomLabel text={"Xcubated Business Solutions"} type={'light'} />
                                                </div>

                                            </Grid>
                                            <Grid item xs={6}>
                                            </Grid>
                                        </Grid>
                                    </CardContent></Card>
                                <CustomLabel text={"E-Signature"} type={'large'} />
                                <Card style={innerCardStyle}>
                                    <CardContent>
                                        <CustomLabel text={"Terms and Conditions"} type={'large'} />
                                        <Grid container spacing={2}>
                                            <Agreement
                                                content={"Please read and accept the terms and conditions to proceed."}
                                            />

                                        </Grid>
                                    </CardContent></Card>
                                <CustomLabel text={"License and Subscription"} type={'large'} />
                                <Card style={innerCardStyle}>
                                    <CardContent>
                                        <CustomLabel text={"License"} type={'large'} />
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <div>
                                                    <CustomLabel text={"License Details"} type={'normalHeader'} />
                                                    <CustomLabel text={"Xcubated Business Solutions"} type={'light'} />
                                                </div>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <div>
                                                    <CustomLabel text={"Signed Date"} type={'normalHeader'} />
                                                    <CustomLabel text={"Xcubated Business Solutions"} type={'light'} />
                                                </div>
                                            </Grid>
                                        </Grid>
                                        <CustomLabel text={"Subscription"} type={'large'} />
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <div>
                                                    <CustomLabel text={"Current Subscription"} type={'normalHeader'} />
                                                    <CustomLabel text={"Xcubated Business Solutions"} type={'light'} />
                                                </div>
                                                <div>
                                                    <CustomLabel text={"Price : Base rate"} type={'normalHeader'} />
                                                    <CustomLabel text={"Xcubated Business Solutions"} type={'light'} />
                                                </div>
                                                <div>
                                                    <CustomLabel text={"Total Fare"} type={'normalHeader'} />
                                                    <CustomLabel text={"Xcubated Business Solutions"} type={'light'} />
                                                </div>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <div>
                                                    <CustomLabel text={"Renewal Date"} type={'normalHeader'} />
                                                    <CustomLabel text={"Xcubated Business Solutions"} type={'light'} />
                                                </div>
                                                <div>
                                                    <CustomLabel text={"Number of Accounts"} type={'normalHeader'} />
                                                    <CustomLabel text={"Xcubated Business Solutions"} type={'light'} />
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </CardContent></Card>
                                <CustomLabel text={"Approval"} type={'large'} />
                                <Card style={innerCardStyle}>
                                    <CardContent>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                            </Grid>
                                            <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                <Button variant="contained" style={reworkButtonStyle} onClick={handleReworkModal}>Rework</Button>
                                                <Button variant="contained" style={approveButtonStyle} onClick={handleApproveModal} >Approve</Button>
                                            </Grid>
                                        </Grid>
                                    </CardContent></Card>
                            </CardContent>
                        </card>

                    </Grid>
                </Grid>
            </CardContent>
            <Modal isOpen={isModalOpen} title="Review Comments" onClose={handleCloseModal}>
                <div style={{ padding: '20px' }}>
                    <Grid container spacing={2}>
                        <TextareaField />
                        {isRework && (
                            <Grid item xs={6}>
                                <SelectField label="Rework Assigned to" options={selectOptions} />
                            </Grid>
                        )}
                    </Grid>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                        {!isRework && (
                            <Button
                                variant="contained"
                                style={approveButtonStyle}
                            >
                                Approve
                            </Button>
                        )}

                        {isRework && (
                            <Button
                                variant="contained"
                                style={reworkButtonStyle}
                            >
                                Rework
                            </Button>
                        )}
                    </div>

                </div>
            </Modal>
        </Card>

    );
}

export default Profile;
