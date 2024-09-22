import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import PhotoViewer from './PhotoViewer';

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
        <div className="p-5 sm:w-4/5 min-h-screen max-w-5xl mx-auto flex flex-col">
            {/* <button className="mb-5 py-2 px-4 text-white bg-blue-500 rounded-md text-lg font-semibold cursor-pointer transition-colors duration-300 hover:bg-indigo-600" onClick={handleBackToProfile}>Back to Profile</button> */}
            <h1 className="text-3xl font-semibold mb-5">Documents</h1>
            {Object.entries(documents).filter(([category]) => category !== '__v' && category !== '_id').map(([category, photos]) => (
                <div key={category} className="mb-5 w-full border-b border-gray-300 pb-4">
                    <div className="flex justify-between items-center cursor-pointer py-2 outline:none" onClick={() => toggleCategory(category)}>
                        <h2 className="text-5xl font-semibold text-black">{category}</h2>
                        <div className="text-xl text-black">
                            {expandedCategories[category] ? <FaChevronUp /> : <FaChevronDown />}
                        </div>
                    </div>
                    {expandedCategories[category] && (
                        <>
                            {Array.isArray(photos) && photos.length > 0 ? (
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-3">
                                    {photos.map((photo, index) => (
                                        <img
                                            key={index}
                                            src={photo}
                                            alt={`${category}-photo-${index}`}
                                            className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105 shadow-lg cursor-pointer"
                                            onClick={() => handlePhotoClick(photo)}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-500 text-center py-2">No photos available in this category</p>
                            )}
                        </>
                    )}
                </div>
            ))}
            <div className="flex-grow" /> {/* Ensures consistent spacing and layout */}
            <PhotoViewer photo={selectedPhoto} onClose={handleCloseViewer} />
        </div>
    );
};

export default RecommendedPhotos;
