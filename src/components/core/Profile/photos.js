import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getUserDetails } from '../../../services/operations/profile';
import PhotoViewer from './PhotoViewer';

const PhotosContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f9f9f9;
    min-height: 100vh;
`;

const BackButton = styled.button`
    align-self: flex-start;
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
    margin-bottom: 30px;
    width: 100%;
    max-width: 1200px;
`;

const CategoryTitle = styled.h2`
    margin-bottom: 15px;
    text-align: left;
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
`;

const PhotoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
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

const LoadingIndicator = styled.div`
    font-size: 1.5em;
    color: #666;
    margin-top: 20px;
`;

const ErrorMessage = styled.div`
    color: #e74c3c;
    font-size: 1.2em;
    margin-top: 20px;
`;

const Photos = React.memo(() => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector((state) => state.auth.token);
    const user = useSelector((state) => state.profile.user);
    const [documents, setDocuments] = useState({});
    const [loading, setLoading] = useState(true);
    const [photoLoading, setPhotoLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    useEffect(() => {
        if (token) {
            dispatch(getUserDetails(token))
                .then(() => setLoading(false))
                .catch(err => {
                    setError(err.message);
                    setLoading(false);
                });
        }
    }, [dispatch, token]);

    useEffect(() => {
        if (user && user.additionalDetails?.documents) {
            setDocuments(user.additionalDetails.documents);
            setPhotoLoading(false);
        }
    }, [user]);

    if (loading) return <LoadingIndicator>Loading user details...</LoadingIndicator>;
    if (photoLoading) return <LoadingIndicator>Loading photos...</LoadingIndicator>;
    if (error) return <ErrorMessage>Error: {error}</ErrorMessage>;

    const handlePhotoClick = (photo) => {
        setSelectedPhoto(photo);
    };

    const handleCloseViewer = () => {
        setSelectedPhoto(null);
    };

    const handleBackToProfile = () => {
        navigate('/my-dashboard');
    };

    return (
        <PhotosContainer>
            <BackButton onClick={handleBackToProfile}>Back to Profile</BackButton>
            <h1>Documents</h1>
            {Object.entries(documents).map(([category, photos]) => (
                <CategoryContainer key={category}>
                    <CategoryTitle>{category}</CategoryTitle>
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
                </CategoryContainer>
            ))}
            <PhotoViewer photo={selectedPhoto} onClose={handleCloseViewer} />
        </PhotosContainer>
    );
});

export default Photos;
