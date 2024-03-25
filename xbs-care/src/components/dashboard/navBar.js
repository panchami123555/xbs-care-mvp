import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineUserAdd, AiOutlineUnorderedList } from 'react-icons/ai';
import { FiSettings, FiMail, FiHelpCircle } from 'react-icons/fi';
import logo from '../assets/images/carelogo.svg';

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
            <ul style={{
                listStyleType: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
                justifyContent: 'center'
            }}>
                <li style={{ marginBottom: '5px' }}><Link to="/register"><AiOutlineHome size="24px" /></Link></li>
                <li style={{ marginBottom: '5px' }}><Link to="/agency-list"><AiOutlineUnorderedList size="24px" /></Link></li>
                <li style={{ marginBottom: '5px' }}><Link to="/agency-register"><AiOutlineUserAdd size="24px" /></Link></li>
                <li style={{ marginBottom: '5px' }}><Link to="/settings"><FiSettings size="24px" /></Link></li>
                <li style={{ marginBottom: '5px' }}><Link to="/contact"><FiMail size="24px" /></Link></li>
                <li style={{ marginBottom: '5px' }}><Link to="/help"><FiHelpCircle size="24px" /></Link></li>
            </ul>
        </div>
    );
}

export default Navbar;
