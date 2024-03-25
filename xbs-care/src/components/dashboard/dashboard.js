import React, { useState } from 'react';
import BasicTable from '../xbs-table/basic-table';
import Modal from '../xbs-modal/basic-modal';
import { BasicTextField } from '../xbs-input-fields/basic-text-field';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Card({ title, content, onClick }) {
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
            <h4>{title}</h4>
            <p>{content}</p>
        </div>
    );
}

const dashboardColumns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'firstName', headerName: 'Agency name', width: 350 },
    { field: 'lastName', headerName: 'Admin name', width: 300 },
    {
        field: 'age',
        headerName: 'Region',
        type: 'number',
        width: 250,
    },
    {
        field: 'fullName',
        headerName: 'Created date',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 400,
    },
];

const dashboardRows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 45 },
    { id: 6, lastName: 'Melisandre', firstName: 'Lannister', age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 11, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 12, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 13, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 14, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 15, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function Dashboard() {
    const [isTableVisible, setIsTableVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleCardClick = () => {
        console.log('Card clicked');
        setIsTableVisible(true);
    };

    return (
        <div style={{ paddingLeft: '200px', paddingTop: '50px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <Card title="Agency Pending" content="614" onClick={handleCardClick} />
                <Card title="Agency In-Review" content="121" onClick={handleCardClick} />
                <Card title="Agency Approved" content="528" onClick={handleCardClick} />

                {isTableVisible && (
                    <>
                        <input
                            type="text"
                            placeholder="Search..."
                            style={{
                                marginLeft: '20px',
                                flex: '1',
                                borderRadius: '16px',
                                background: 'var(--Neutral-10, #FFF)',
                                border: 'none',
                                padding: '10px'
                            }}
                        />
                        <Button onClick={handleOpenModal}
                            style={{
                                marginLeft: '10px',
                                borderRadius: '22px',
                                background: '#08A3E0',
                                color: 'white',
                                padding: '10px 20px',
                                textTransform: 'none'
                            }}
                            endIcon={<AddIcon style={{ color: 'white' }} />} >
                            Invite
                        </Button>
                        <Modal isOpen={isModalOpen} title="Send Invite" onClose={handleCloseModal}>
                            <div style={{ padding: '20px' }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6}>
                                        <div className='text-box-style'><BasicTextField label="Agency Name" id="streetAddress" className='w-90 custom-textfield' /></div>
                                        <div className='text-box-style'><BasicTextField label="Agency Admin Name " id="townCity" className='w-90 custom-textfield' /></div>
                                        <div className='text-box-style'><BasicTextField label="Email" id="country" className='w-90 custom-textfield' /></div>
                                        <div className='text-box-style'><BasicTextField label="Contact" id="locality" className='w-90 custom-textfield' /></div>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <div className='text-box-style'><BasicTextField label="Region" id="postalCode" className='w-90 custom-textfield' /></div>
                                        <div className='text-box-style'><BasicTextField label="Country" id="country2" className='w-90 custom-textfield' /></div>
                                    </Grid>
                                </Grid>
                                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                                    <Button
                                        variant="contained"
                                        style={{
                                            marginRight: '10px',
                                            borderRadius: '16px',
                                            background: '#194A9F',
                                            boxShadow: '3px 2px 4px 0px rgba(126, 126, 126, 0.25) inset',
                                            color: 'white',
                                            width: '15%',
                                        }}
                                    // onClick={() => {}}
                                    >
                                        Send
                                    </Button>
                                    <Button
                                        variant="contained"
                                        onClick={handleCloseModal}
                                        style={{
                                            borderRadius: '16px',
                                            background: '#194A9F',
                                            boxShadow: '3px 2px 4px 0px rgba(126, 126, 126, 0.25) inset',
                                            color: 'white',
                                            width: '15%',
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                </div>

                            </div>
                        </Modal>
                        <Button style={{ marginLeft: '10px', borderRadius: '22px', background: '#08A3E0', color: 'white', padding: '10px 20px', textTransform: 'none' }}
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
