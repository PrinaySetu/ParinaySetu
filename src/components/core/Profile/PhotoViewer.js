import React from 'react';
import styled from 'styled-components';

const ViewerOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ViewerImage = styled.img`
    max-width: 90%;
    max-height: 90%;
    border-radius: 8px;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background: white;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    color: black;
`;

const PhotoViewer = ({ photo, onClose }) => {
    if (!photo) return null;

    return (
        <ViewerOverlay>
            <CloseButton onClick={onClose}>×</CloseButton>
            <ViewerImage src={photo} alt="Photo Viewer" />
        </ViewerOverlay>
    );
};

export default PhotoViewer;
