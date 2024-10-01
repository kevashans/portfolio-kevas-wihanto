import React from 'react';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa'; // Import a PDF icon or another relevant icon

interface SocialsLinks {
    gitHub?: string;
    linkedIn?: string;
    cvLink?: string; // Add cvLink prop for the CV
    color?: string;
}

const Socials: React.FC<SocialsLinks> = ({ gitHub, linkedIn, cvLink, color }) => {
    return (
        <footer style={footerStyle}>
            <div style={iconContainerStyle}>
                {gitHub && (
                    <a href={gitHub} target="_blank" rel="noopener noreferrer" style={iconStyle}>
                        <FaGithub size={60} color={color} />
                    </a>
                )}

                {linkedIn && (
                    <a
                        href={linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={iconStyle}
                    >
                        <FaLinkedin size={60} color={color} />
                    </a>
                )}

                {cvLink && (
                    <a
                        href={cvLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={iconStyle}
                    >
                        <FaFilePdf size={60} color={color} /> {/* Display PDF icon */}
                    </a>
                )}
            </div>
        </footer>
    );
};

const footerStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    padding: '20px',
    textAlign: 'center',
    color: 'white',
    bottom: 0,
    width: '100%',
};

const iconContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '10px',
};

const iconStyle: React.CSSProperties = {
    color: 'white',
    textDecoration: 'none',
};

export default Socials;
