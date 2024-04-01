import React, { useState, useEffect } from 'react';
import './dashboardStyles.css';
import BasicTable from '../xbs-table/basic-table';
import Modal from '../xbs-modal/basic-modal';
import { BasicTextField } from '../xbs-input-fields/basic-text-field';
import { Grid } from '@mui/material';
import BasicButton from '../xbs-buttons/basic-button';
import agencyPendingIcon from '../assets/icons/Hourglass.svg';
import agencyReviewIcon from '../assets/icons/file-search-02.svg';
import agencyApprovedIcon from '../assets/icons/check-circle.svg';
import CustomLabel from '../xbs-input-fields/label';
import { fetchAgencyDetails, inviteAgency } from '../../services/agencyService';
import { Filter, Add } from "../assets/icons/reusable-icons";
import Icon from '../xbs-buttons/icon-button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function Card({ title, content, onClick, icon, className, disableIcon }) {
    return (
        <div className={`card ${className || ''}`} onClick={onClick}>
            {!disableIcon && <img src={icon} alt="icon" className={`default-icon-style ${className || ''}`} />}
            <h4 className="card-title">{title}</h4>
            <p className="card-content">{content}</p>
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
    const [filterButton, SetFilterButton] = useState(null);
    const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null);

    const handleCardClick = () => {
        console.log('Card clicked');
        setIsTableVisible(true);
    };

    const open = Boolean(filterButton);
    const isSubMenuOpen = Boolean(subMenuAnchorEl);
    const openFilter = (event) => {
        SetFilterButton(event.currentTarget);
    };
    const filterClicked = () => {
        SetFilterButton(null);
        setSubMenuAnchorEl(null); 
    };
    const handleOption2Click = (event) => {
        event.stopPropagation(); 
        setSubMenuAnchorEl(event.currentTarget);
      };
    
      const handleSubMenuClose = () => {
        setSubMenuAnchorEl(null);
      };

    useEffect(() => {
        const loadAgencyDetails = async () => {
            try {
                const dynamicBodyData = {
                    pageNumber: 0,
                    size: 10,
                    filterList: [
                        {
                            field: "name",
                            value: "test",
                            mode: "CONTAINS"
                        }
                    ]
                };

                const response = await fetchAgencyDetails(dynamicBodyData);
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
            adminFirstName: agencyAdminName,
            adminLastName: agencyAdminName,
            officeEmail: email,
            mobile: contact,
            cityId: 250,
            countryId: 106
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
                <Card title="Agency Pending" content="614" onClick={handleCardClick} icon={agencyPendingIcon} className="pending-icon-style" disableIcon={isTableVisible} />
                <Card title="Agency In-Review" content="121" onClick={handleCardClick} icon={agencyReviewIcon} className="review-icon-style" disableIcon={isTableVisible} />
                <Card title="Agency Approved" content="528" onClick={handleCardClick} icon={agencyApprovedIcon} className="approved-icon-style" disableIcon={isTableVisible} />


                {isTableVisible &&
                    <>
                        <input type="text" placeholder="Search..." className="search-input" />
                        <BasicButton onClick={handleOpenModal} label='Invite'
                            className="invite-button"
                            endIcon={<Add />}>
                        </BasicButton>
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
                                <div className='modal-action-buttons'>
                                    <BasicButton
                                        variant="contained"
                                        className="modal-action-buttons action-button"
                                        label='Send'
                                        onClick={handleSendInvite}
                                    />
                                    <BasicButton
                                        variant="contained"
                                        onClick={handleCloseModal}
                                        className="modal-action-buttons action-button"
                                        label='Cancel'
                                    />
                                </div>

                            </div>
                        </Modal>
                        <Icon
                            className="filter-button"
                            icon={<Filter />}
                            onClick={openFilter}>
                        </Icon>
                        <Menu
                            id="filter-menu"
                            anchorEl={filterButton}
                            keepMounted
                            open={open}
                            onClose={filterClicked}
                        >
                            <MenuItem onClick={filterClicked}>Agency Name</MenuItem>
                            <MenuItem onClick={handleOption2Click}>
                                Region
                            </MenuItem>
                            <Menu
                                id="sub-menu"
                                anchorEl={subMenuAnchorEl}
                                keepMounted
                                open={isSubMenuOpen}
                                onClose={handleSubMenuClose}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                            >
                                {/* Sub-menu items */}
                                <MenuItem onClick={handleSubMenuClose}>London</MenuItem>
                                <MenuItem onClick={handleSubMenuClose}>Wales</MenuItem>
                            </Menu>
                            <MenuItem onClick={filterClicked}>Created Date</MenuItem>
                        </Menu>
                    </>
                }
            </div>
            {isTableVisible && (
                <div className='table-container'>
                    <BasicTable columns={dashboardColumns} rows={dashboardRows} />
                </div>
            )}
        </div>
    );
}

export default Dashboard;

