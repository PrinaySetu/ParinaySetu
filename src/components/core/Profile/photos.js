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
`;

const CategoryContainer = styled.div`
    margin-bottom: 30px;
    width: 100%;
`;

const CategoryTitle = styled.h2`
    margin-bottom: 10px;
    text-align: left;
    width: 100%;
`;

const PhotoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
`;

const PhotoItem = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
`;

const LoadingIndicator = styled.div`
    font-size: 1.5em;
    color: #666;
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
            setPhotoLoading(false); // Assume photos are loaded immediately after documents are set
        }
    }, [user]);

    if (loading) return <LoadingIndicator>Loading user details...</LoadingIndicator>;
    if (photoLoading) return <LoadingIndicator>Loading photos...</LoadingIndicator>;
    if (error) return <div>Error: {error}</div>;

    const handlePhotoClick = (photo) => {
        setSelectedPhoto(photo);
    };

    const handleCloseViewer = () => {
        setSelectedPhoto(null);
    };

    return (
        <PhotosContainer>
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
