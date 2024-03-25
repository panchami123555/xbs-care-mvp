import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/carelogo.svg';
import factCheck from '../assets/icons/fact_check.svg';
import world from '../assets/icons/groups_2.svg';
import add from '../assets/icons/Vector.svg';
import group from '../assets/icons/groups_2b.svg';
import doc from '../assets/icons/document.svg';
import approve from '../assets/icons/approve.svg';
import settings from '../assets/icons/settings.svg';
import forum from '../assets/icons/forum.svg';

function Navbar() {
    return (
        <div style={{
            width: '96px',
            height: '1021px',
            flexShrink: 0,
            borderRadius: '28px',
            background: '#FFF',
            boxShadow: '0px 13px 4px 0px #E3EEF4',
            float: 'left',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '20px'
        }}>
            <img src={logo} alt="Logo" style={{ width: '48px', marginBottom: '20px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <ul style={{
                    listStyleType: 'none',
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flexGrow: 1, // Allows the list to fill the space
                    justifyContent: 'center'
                }}>
                    <li style={{ marginBottom: '10px' }}><Link to="/register"><img src={factCheck} alt="Register" style={{ width: '30px' }} /></Link></li>
                    <li style={{ marginBottom: '10px' }}><Link to="/world"><img src={world} alt="World" style={{ width: '30px' }} /></Link></li>
                    <li style={{ marginBottom: '10px' }}><Link to="/add"><img src={add} alt="Add" style={{ width: '30px' }} /></Link></li>
                    <li style={{ marginBottom: '10px' }}><Link to="/group"><img src={group} alt="Group" style={{ width: '30px' }} /></Link></li>
                    <li style={{ marginBottom: '10px' }}><Link to="/doc"><img src={doc} alt="Document" style={{ width: '30px' }} /></Link></li>
                    <li style={{ marginBottom: '10px' }}><Link to="/approve"><img src={approve} alt="Approve" style={{ width: '30px' }} /></Link></li>
                    <li style={{ marginBottom: '10px' }}><Link to="/forum"><img src={forum} alt="Forum" style={{ width: '30px' }} /></Link></li>
                </ul>
                <div style={{ alignSelf: 'stretch', textAlign: 'center', paddingBottom: '20px' }}> {/* Adjust padding as needed */}
                    <Link to="/settings"><img src={settings} alt="Settings" style={{ width: '30px' }} /></Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
