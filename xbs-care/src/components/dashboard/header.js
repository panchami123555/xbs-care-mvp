import React from 'react';
// import logo from '../assets/images/carelogo.svg';

function Header() {
    const userName = "Diane Ward";
    const userRole = "Product Manager";
    // const userProfilePhoto = "../assets/images/carelogo.svg";

    return (
        <div style={{
            // width: '100%',
            // height: '70px',
            // background: '#F3F8FE',
            // display: 'flex',
            // justifyContent: 'space-between',
            // alignItems: 'center',
            // padding: '10px'
        }}>
            <div style={{ textAlign: 'left' }}>
                <div>{userName}</div>
                <div style={{ fontSize: 'smaller' }}>{userRole}</div>
            </div>
            {/* <img src={userProfilePhoto} alt="User Profile" style={{
                height: '50px', 
                width: '50px', 
                borderRadius: '50%',
            }} /> */}
        </div>
    );
}

export default Header;
