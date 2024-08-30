import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import PhotoViewer from './PhotoViewer';

const PhotosContainer = styled.div`
    padding: 20px;
    background-color: #f9f9f9;
    min-height: 100vh;
`;

const BackButton = styled.button`
    margin-bottom: 20px;
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: 600;
    color: white;
    background-color: #2196f3;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #4169E1;
    }
`;

const CategoryContainer = styled.div`
    margin-bottom: 20px;
    width: 100%;
    border-bottom: 1px solid #ddd;
    padding-bottom: 15px;
`;

const CategoryHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 10px 0;
`;

const CategoryTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
`;

const ToggleIcon = styled.div`
    font-size: 1.5rem;
    color: #333;
`;

const PhotoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
    margin-top: 10px;
`;

const PhotoItem = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }
`;

const RecommendedPhotos = ({ documents }) => {
    const navigate = useNavigate();
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [expandedCategories, setExpandedCategories] = useState({});

    const handlePhotoClick = (photo) => {
        setSelectedPhoto(photo);
    };

    const handleCloseViewer = () => {
        setSelectedPhoto(null);
    };

    const handleBackToProfile = () => {
        navigate('/my-dashboard');
    };

    const toggleCategory = (category) => {
        setExpandedCategories((prev) => ({
            ...prev,
            [category]: !prev[category],
        }));
    };

    return (
        <PhotosContainer>
            <BackButton onClick={handleBackToProfile}>Back to Profile</BackButton>
            <h1>Documents</h1>
            {Object.entries(documents).map(([category, photos]) => (
                <CategoryContainer key={category}>
                    <CategoryHeader onClick={() => toggleCategory(category)}>
                        <CategoryTitle>{category}</CategoryTitle>
                        <ToggleIcon>
                            {expandedCategories[category] ? <FaChevronUp /> : <FaChevronDown />}
                        </ToggleIcon>
                    </CategoryHeader>
                    {expandedCategories[category] && (
                        <PhotoGrid>
                            {(Array.isArray(photos) ? photos : []).map((photo, index) => (
                                <PhotoItem
                                    key={index}
                                    src={photo}
                                    alt={`${category}-photo-${index}`}
                                    onClick={() => handlePhotoClick(photo)}
                                />
                            ))}
                        </PhotoGrid>
                    )}
                </CategoryContainer>
            ))}
            <PhotoViewer photo={selectedPhoto} onClose={handleCloseViewer} />
        </PhotosContainer>
    );
};

export default RecommendedPhotos;
