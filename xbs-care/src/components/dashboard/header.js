import React from 'react';

function Header() {
    const userName = "Diane Ward";
    const userRole = "Product Manager";
    const userProfilePhoto = "../assets/images/carelogo.svg";

    return (
        <div style={{
            width: '100%',
            height: '70px',
            background: '#F3F8FE',
            // display: 'flex',
            // justifyContent: 'flex-end',
            alignItems: 'center',
            padding: '10px',
            boxSizing: 'border-box'
        }}>
            <div style={{ textAlign: 'right' }}> 
                <div>{userName}</div>
                <div style={{ fontSize: 'smaller' }}>{userRole}</div>
            </div>
            {/* <img src={userProfilePhoto} alt="User Profile" style={{
                height: '50px', 
                width: '50px', 
                borderRadius: '50%',
                marginLeft: '10px'
            }} /> */}
        </div>
    );
}

export default Header;
