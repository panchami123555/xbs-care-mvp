import React from 'react';
import Avatar from '@mui/material/Avatar';
import CustomLabel from '../xbs-input-fields/label';
import homeIcon from '../assets/icons/home.svg';

function Header() {
    const userName = "Diane Ward";
    const userRole = "Product Manager";
    const userProfilePhoto = "../assets/images/carelogo.svg";
    const avatarLetter = userName.charAt(0);

    return (
        <div>
            <div style={{paddingTop: 40}}>
                <img src={homeIcon} alt="Add" style={{ width: '20px' }} />
                <label style={{color:'#259BCB'}}>Your Dashboard</label>
            </div>
            <div style={{
                width: '100%',
                height: '70px',
                background: '#F3F8FE',
                // display: 'flex',
                // justifyContent: 'flex-end',
                alignItems: 'center',
                padding: '10px',
                boxSizing: 'border-box',
                paddingLeft: '90%',
                paddingBottom:'6%'
            }}>
                <div>
                    <div style={{ paddingLeft: '5%', }}>
                        <Avatar style={{ marginLeft: '10px', backgroundColor: '#1976d2' }}>
                            {avatarLetter}
                        </Avatar>
                    </div>
                    <div>{userName}</div>
                    <div style={{ fontSize: 'smaller' }}>{userRole}</div>
                </div>
            </div>
        </div>

    );
}

export default Header;
