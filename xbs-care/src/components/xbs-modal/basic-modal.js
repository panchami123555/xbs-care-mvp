import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

function Modal({ isOpen, title, children, onClose }) {
    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1050,
        }}>
            <div style={{
                padding: '20px',
                background: '#FFF',
                borderRadius: '5px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                margin: '15px',
                position: 'relative',
                zIndex: 1051,
                width: '45%',
                height: 'auto',
            }}>
                <h2 style={{ color: '#194A9F' }}>{title}</h2>
                {children}
                <button onClick={onClose} style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer'
                }}>
                    <CloseIcon /> {/* Use the Close icon */}
                </button>
            </div>
        </div>
    );
}

export default Modal;
