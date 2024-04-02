import React, { useState, useRef } from 'react';
import { Button, Card, CardContent, Grid } from '@mui/material';
import CustomLabel from '../xbs-input-fields/label';
import Agreement from '../xbs-agreement/agreement';
import { TextareaField } from '../xbs-input-fields/text-area-field';
import { SelectField } from '../xbs-input-fields/select-text-field';
import Modal from '../xbs-modal/basic-modal';
import './profileStyles.css';

function Profile() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isRework, setIsRework] = useState(false);
    const agencyDetailsRef = useRef(null);
    const locationRef = useRef(null);
    const leadershipRef = useRef(null);
    const documentsRef = useRef(null);
    const esignatureRef = useRef(null);
    const licenseRef = useRef(null);
    const approveRef = useRef(null);

    const handleReworkModal = () => {
        setIsModalOpen(true);
        setIsRework(true);
    };

    const handleApproveModal = () => {
        setIsModalOpen(true);
        setIsRework(false);
    };
    const handleCloseModal = () => setIsModalOpen(false);

    const selectOptions = [
        { value: 'CEO', label: 'CEO' },
        { value: 'Regional Manager', label: 'Regional Manager' },
        { value: 'Manager', label: 'Regional Manager' },
    ];

    const scrollToAgencyDetails = () => {
        agencyDetailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    const scrollToLocation = () => {
        locationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    const scrollToLeadership = () => {
        leadershipRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    const scrollToDocuments = () => {
        documentsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    const scrollToEsignature = () => {
        esignatureRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    const scrollToLicense = () => {
        licenseRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    const scrollToApproveRework = () => {
        approveRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <Card className="cardStyle">
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <card className="buttonSidebarStyle">
                            <CardContent>
                                <CustomLabel text={"Organisation Profile"} type={'large'} />
                                <CustomLabel text={"Status : Pending"} type={'normalHeader'} />
                                <div>
                                    <Button variant="contained" className="buttonStyle" onClick={scrollToAgencyDetails}>Agency Details</Button>
                                </div>
                                <div>
                                    <Button variant="contained" className="buttonStyle" onClick={scrollToLocation}>Location</Button>
                                </div>
                                <div>
                                    <Button variant="contained" className="buttonStyle" onClick={scrollToLeadership}>Leadership</Button>
                                </div>
                                <div>
                                    <Button variant="contained" className="buttonStyle" onClick={scrollToDocuments}>Documents</Button>
                                </div>
                                <div>
                                    <Button variant="contained" className="buttonStyle" onClick={scrollToEsignature}>E-Signature</Button>
                                </div>
                                <div>
                                    <Button variant="contained" className="buttonStyle" onClick={scrollToLicense}>License & Subscription</Button>
                                </div>
                                <div>
                                    <Button variant="contained" className="buttonStyle" onClick={scrollToApproveRework}>Approve / Rework</Button>
                                </div>
                            </CardContent>
                        </card>
                    </Grid>
                    <Grid item xs={6}>
                        <card className="outerCardStyle">
                            <CardContent>
                                <div ref={agencyDetailsRef}>
                                    <CustomLabel text={"Agency Details"} type={'large'} />
                                </div>
                                <Card className="innerCardStyle">
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
                                <div ref={locationRef}>
                                    <CustomLabel text={"Location"} type={'large'} />
                                </div>
                                <Card className="innerCardStyle">
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
                                <div ref={leadershipRef}>
                                <CustomLabel text={"Leadership Details"} type={'large'} />
                                </div>
                                <Card className="innerCardStyle">
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
                                <div ref={documentsRef}>
                                <CustomLabel text={"Documents"} type={'large'} />
                                </div>
                                <Card className="innerCardStyle">
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
                                <Card className="innerCardStyle">
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
                                    <div ref={esignatureRef}>

                                <CustomLabel text={"E-Signature"} type={'large'} />
                                    </div>
                                <Card className="innerCardStyle">
                                    <CardContent>
                                        <CustomLabel text={"Terms and Conditions"} type={'large'} />
                                        <Grid container spacing={2}>
                                            <Agreement
                                                content={"Please read and accept the terms and conditions to proceed."}
                                            />

                                        </Grid>
                                    </CardContent></Card>
                                    <div ref={licenseRef}>

                                <CustomLabel text={"License and Subscription"} type={'large'} />
                                    </div>
                                <Card className="innerCardStyle">
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
                                    <div ref={approveRef}>

                                <CustomLabel text={"Approval"} type={'large'} />
                                    </div>
                                <Card className="innerCardStyle">
                                    <CardContent>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                            </Grid>
                                            <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                <Button variant="contained" className='reworkButtonStyle' onClick={handleReworkModal}>Rework</Button>
                                                <Button variant="contained" className='approveButtonStyle' onClick={handleApproveModal} >Approve</Button>
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
                                className='approveButtonStyle'
                            >
                                Approve
                            </Button>
                        )}

                        {isRework && (
                            <Button
                                variant="contained"
                                className='reworkButtonStyle'
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
