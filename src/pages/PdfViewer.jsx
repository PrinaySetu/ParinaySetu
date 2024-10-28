import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const PdfViewer = () => {
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
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                    <Viewer fileUrl="/assets/booklet.pdf" />
                </Worker>
            </div>
        </div>
    );
};

export default PdfViewer;
