import React from 'react';
import { useNavigate } from 'react-router-dom';

const ImageViewer = () => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col items-center gap-8 mt-10'>
            <button
                onClick={() => navigate(-1)}
                className='bg-[#1a202c] text-white px-4 py-2 rounded-xl border-2 border-black hover:bg-white hover:text-black cursor-pointer'
            >
                Go Back
            </button>
            <div className='w-full md:w-3/4 lg:w-1/2'>
                <img
                    src='/assets/image.jpg'
                    alt='Image'
                    className='w-full h-auto border-2 border-solid border-black rounded-xl'
                />
            </div>
        </div>
    );
};

export default ImageViewer;
