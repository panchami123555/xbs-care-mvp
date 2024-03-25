import React from 'react';
import BasicTable from '../xbs-table/basic-table';

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
    const handleCardClick = () => {
        console.log('Card clicked');
    };

    return (
        <div style={{ paddingLeft: '200px', paddingTop: '50px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <Card title="Agency Pending" content="614" onClick={handleCardClick} />
                <Card title="Agency In-Review" content="121" onClick={handleCardClick} />
                <Card title="Agency Approved" content="528" onClick={handleCardClick} />

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

                <button style={{ marginLeft: '10px', borderRadius: '22px', background: '#08A3E0', color: 'white', padding: '10px 20px' }}>Invite</button>
                <button style={{ marginLeft: '10px', borderRadius: '22px', background: '#08A3E0', color: 'white', padding: '10px 20px' }}>Filter</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <BasicTable columns={dashboardColumns} rows={dashboardRows} />
            </div>
        </div>
    );
}

export default Dashboard;
