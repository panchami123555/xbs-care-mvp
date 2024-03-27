import React, { useState, useEffect } from 'react';
import './dashboardStyles.css';
import BasicTable from '../xbs-table/basic-table';
import Modal from '../xbs-modal/basic-modal';
import { BasicTextField } from '../xbs-input-fields/basic-text-field';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import BasicButton from '../xbs-buttons/basic-button';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import agencyPendingIcon from '../assets/icons/Hourglass.svg';
import agencyReviewIcon from '../assets/icons/file-search-02.svg';
import agencyApprovedIcon from '../assets/icons/check-circle.svg';
import CustomLabel from '../xbs-input-fields/label';
import { fetchAgencyDetails, inviteAgency } from '../../services/agencyService';

function Card({ title, content, onClick, icon, iconStyle, disableIcon }) {

    const defaultIconStyle = {
        display: 'flex',
        padding: '10px',
        alignItems: 'center',
        gap: '10px',
        justifyContent: 'center',
    };

    return (
        <div
            style={{
                margin: '10px',
                padding: '20px',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                borderRadius: '30px',
                background: '#FFF',
                cursor: 'pointer'
            }}
            onClick={onClick}>
            {!disableIcon && <img src={icon} alt="icon" style={{ ...defaultIconStyle, ...iconStyle }} />}
            <h4 style={{ color: '#797979', paddingTop: 10 }}>{title}</h4>
            <p style={{ fontWeight: 'bold' }}>{content}</p>
        </div>
    );
}

function formatDate(dateString) {
    if (!dateString || isNaN(new Date(dateString).getTime())) {
        return '';
    }
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

const dashboardColumns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'agencyName', headerName: 'Agency name', width: 350 },
    { field: 'adminName', headerName: 'Admin name', width: 300 },
    { field: 'region', headerName: 'Region', type: 'number', width: 250, },
    { field: 'createdDate', headerName: 'Created date', width: 700, },
];


function Dashboard() {
    const [isTableVisible, setIsTableVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    const [dashboardRows, setDashboardRows] = useState(null);
    const [agencyName, setAgencyName] = useState('');
    const [agencyAdminName, setAgencyAdminName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [region, setRegion] = useState('');
    const [country, setCountry] = useState('');

    const handleCardClick = () => {
        console.log('Card clicked');
        setIsTableVisible(true);
    };

    const pendingIconStyle = {
        borderRadius: '26px',
        background: '#D398E7',
    };

    const reviewIconStyle = {
        borderRadius: '26px',
        background: '#E89271',
    };

    const approvedIconStyle = {
        borderRadius: '26px',
        background: '#70A1E5',
    };

    useEffect(() => {
        const loadAgencyDetails = async () => {
            try {
                const response = await fetchAgencyDetails();
                const agencies = response.data.data;
                const formattedAgencies = agencies.map(agency => ({
                    id: agency.id,
                    agencyName: agency.name,
                    adminName: `${agency.adminFirstName || ''} ${agency.adminLastName || ''}`.trim(),
                    email: agency.officeEmail,
                    createdDate: formatDate(agency.dateOfIncorporation),
                    mobile: agency.mobile,
                    noOfResources: agency.noOfResources,
                    status: agency.status,
                }));
                setDashboardRows(formattedAgencies);
            } catch (error) {
                console.error('Error fetching agency details:', error);
            }
        };

        loadAgencyDetails();
    }, []);

    const handleSendInvite = async () => {
        const inviteData = {
            name: agencyName,
            adminName: agencyAdminName,
            officeEmail: email,
            mobile: contact,
            // region: region,
            // country: country,
        };
        try {
            await inviteAgency(inviteData);
            alert('Invite sent successfully!');
            handleCloseModal();
            setAgencyName('');
            setAgencyAdminName('');
            setEmail('');
            setContact('');
            setRegion('');
            setCountry('');
        } catch (error) {
            console.error('Error sending invite:', error);
            alert('Failed to send invite. Please try again.');
        }
    };

    return (
        <div className="dashboard-container">
            {!isTableVisible && (
                <div className="agencyOverviewTitle">
                    <CustomLabel text={"Agency Overview"} type={'titleBlack'} />
                </div>
            )}
            <div className="cards-container">
                <Card title="Agency Pending" content="614" onClick={handleCardClick} icon={agencyPendingIcon} iconStyle={pendingIconStyle} disableIcon={isTableVisible} />
                <Card title="Agency In-Review" content="121" onClick={handleCardClick} icon={agencyReviewIcon} iconStyle={reviewIconStyle} disableIcon={isTableVisible} />
                <Card title="Agency Approved" content="528" onClick={handleCardClick} icon={agencyApprovedIcon} iconStyle={approvedIconStyle} disableIcon={isTableVisible} />

                {isTableVisible && (
                    <>
                        <input type="text" placeholder="Search..." className="search-input" />
                        <Button onClick={handleOpenModal}
                            className="invite-button"
                            endIcon={<AddIcon style={{ color: 'white' }} />} >
                            Invite
                        </Button>
                        <Modal isOpen={isModalOpen} title="Send Invite" onClose={handleCloseModal}>
                            <div style={{ padding: '20px' }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6}>
                                        <div className='text-box-style'><BasicTextField label="Agency Name" id="agencyName" className='w-90 custom-textfield' value={agencyName}
                                            onChange={(e) => setAgencyName(e.target.value)} /></div>
                                        <div className='text-box-style'><BasicTextField label="Agency Admin Name " id="adminName" className='w-90 custom-textfield' value={agencyAdminName}
                                            onChange={(e) => setAgencyAdminName(e.target.value)} /></div>
                                        <div className='text-box-style'><BasicTextField label="Email" id="email" className='w-90 custom-textfield' value={email}
                                            onChange={(e) => setEmail(e.target.value)} /></div>
                                        <div className='text-box-style'><BasicTextField label="Contact" id="contact" className='w-90 custom-textfield' value={contact}
                                            onChange={(e) => setContact(e.target.value)} /></div>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <div className='text-box-style'><BasicTextField label="Region" id="region" className='w-90 custom-textfield' value={region}
                                            onChange={(e) => setRegion(e.target.value)} /></div>
                                        <div className='text-box-style'><BasicTextField label="Country" id="country" className='w-90 custom-textfield' value={country}
                                            onChange={(e) => setCountry(e.target.value)} /></div>
                                    </Grid>
                                </Grid>
                                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                                    <Button
                                        variant="contained"
                                        className="modal-action-buttons action-button"
                                        onClick={handleSendInvite}
                                    >
                                        Send
                                    </Button>
                                    <Button
                                        variant="contained"
                                        onClick={handleCloseModal}
                                        className="modal-action-buttons action-button"
                                    >
                                        Cancel
                                    </Button>
                                </div>

                            </div>
                        </Modal>
                        <Button className="filter-button"
                            endIcon={<ExpandMoreIcon style={{ color: 'white' }} />}>
                            Filter
                        </Button>
                    </>
                )}
            </div>
            {isTableVisible && (
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <BasicTable columns={dashboardColumns} rows={dashboardRows} />
                </div>
            )}
        </div>
    );
}

export default Dashboard;

