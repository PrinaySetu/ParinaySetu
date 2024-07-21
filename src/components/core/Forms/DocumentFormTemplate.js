import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { uploadDocument, updateDocument } from '../../../services/operations/document';
import { toast } from 'react-hot-toast';

const DocumentForm = () => {
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);
    const [isEdit, setIsEdit] = useState(false);
    const [dataFetched, setDataFetched] = useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data logic here if needed
                setDataFetched(true);
            } catch (error) {
                console.error("Error fetching data:", error);
                setDataFetched(true);
            }
        };

        fetchData();
    }, []);

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            Object.entries(data).forEach(([key, value]) => {
                if (value instanceof FileList) {
                    // Handle FileList (multiple files)
                    Array.from(value).forEach((file, index) => {
                        formData.append(`${key}[${index}]`, file);
                    });
                } else if (value instanceof File) {
                    // Handle single File
                    formData.append(key, value);
                } else if (Array.isArray(value) && value.length > 0 && value[0] instanceof File) {
                    // Handle array of Files
                    value.forEach((file, index) => {
                        formData.append(`${key}[${index}]`, file);
                    });
                } else if (value !== null && value !== undefined) {
                    // Handle other form data
                    formData.append(key, value);
                }
            });

            console.log("FormData entries:", Array.from(formData.entries()));

            const response = await (isEdit ? updateDocument : uploadDocument)(formData, token);
            if (response) {
                toast.success('Documents uploaded successfully');
            }
        } catch (error) {
            console.error("Upload error:", error);
            toast.error('Failed to upload documents');
        }
    };

    return (
        <div className="flex flex-col text-start w-full max-[320px]:max-w-60 max-w-xs md:max-w-screen-sm p-4 md:p-8 bg-floral-white rounded-xl shadow-md">
            <h2 className="text-2xl md:text-4xl text-center mb-3 md:mb-5 text-gray-800">
                <span>{isEdit ? 'Update' : 'Create'} </span>
                <span className="text-blue-600">Document Upload</span>
            </h2>
            <div className="text-lg md:text-xl text-center text-gray-500 mb-6 md:mb-8">Please upload your documents</div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                <div className="flex flex-col">
                    <label className="flex flex-col gap-2 text-sm md:text-base font-semibold text-gray-700">
                        Photos
                        <input type="file" name="photos" multiple {...register('photos')} className="py-2 md:py-3 px-3 md:px-4 text-sm md:text-base border-2 border-[#D3D3D3] border-gray-300 rounded-md bg-white outline-none transition-colors duration-300 ease-in-out" />
                    </label>
                </div>

                <div className="flex flex-col">
                    <label className="flex flex-col gap-2 text-sm md:text-base font-semibold text-gray-700">
                        Family Photos
                        <input type="file" name="familyPhoto" multiple {...register('familyPhoto')} className="py-2 md:py-3 px-3 md:px-4 text-sm md:text-base border-2 border-[#D3D3D3] border-gray-300 rounded-md bg-white outline-none transition-colors duration-300 ease-in-out" />
                    </label>
                </div>

                <div className="flex flex-col">
                    <label className="flex flex-col gap-2 text-sm md:text-base font-semibold text-gray-700">
                        Education Documents
                        <input type="file" name="educationDocuments" multiple {...register('educationDocuments')} className="py-2 md:py-3 px-3 md:px-4 text-sm md:text-base border-2 border-[#D3D3D3] border-gray-300 rounded-md bg-white outline-none transition-colors duration-300 ease-in-out" />
                    </label>
                </div>

                <div className="flex flex-col">
                    <label className="flex flex-col gap-2 text-sm md:text-base font-semibold text-gray-700">
                        Income Proofs
                        <input type="file" name="incomeProofs" multiple {...register('incomeProofs')} className="py-2 md:py-3 px-3 md:px-4 text-sm md:text-base border-2 border-[#D3D3D3] border-gray-300 rounded-md bg-white outline-none transition-colors duration-300 ease-in-out" />
                    </label>
                </div>

                <div className="flex flex-col">
                    <label className="flex flex-col gap-2 text-sm md:text-base font-semibold text-gray-700">
                        Property Proofs
                        <input type="file" name="propertyProofs" multiple {...register('propertyProofs')} className="py-2 md:py-3 px-3 md:px-4 text-sm md:text-base border-2 border-[#D3D3D3] border-gray-300 rounded-md bg-white outline-none transition-colors duration-300 ease-in-out" />
                    </label>
                </div>

                <div className="flex flex-col">
                    <label className="flex flex-col gap-2 text-sm md:text-base font-semibold text-gray-700">
                        Address Proofs
                        <input type="file" name="addressProofs" multiple {...register('addressProofs')} className="py-2 md:py-3 px-3 md:px-4 text-sm md:text-base border-2 border-[#D3D3D3] border-gray-300 rounded-md bg-white outline-none transition-colors duration-300 ease-in-out" />
                    </label>
                </div>

                <div className="flex flex-col">
                    <label className="flex flex-col gap-2 text-sm md:text-base font-semibold text-gray-700">
                        ID Proofs
                        <input type="file" name="idProofs" multiple {...register('idProofs')} className="py-2 md:py-3 px-3 md:px-4 text-sm md:text-base border-2 border-[#D3D3D3] border-gray-300 rounded-md bg-white outline-none transition-colors duration-300 ease-in-out" />
                    </label>
                </div>

                <div className="flex flex-col">
                    <label className="flex flex-col gap-2 text-sm md:text-base font-semibold text-gray-700">
                        Other Documents
                        <input type="file" name="otherDocuments" multiple {...register('otherDocuments')} className="py-2 md:py-3 px-3 md:px-4 text-sm md:text-base border-2 border-[#D3D3D3] border-gray-300 rounded-md bg-white outline-none transition-colors duration-300 ease-in-out" />
                    </label>
                </div>

                <div className="flex justify-center mt-8">
                    <button type="submit" className="mt-2 py-2 md:py-3 px-4 md: px-6 text-sm md:text-lg font-semibold text-white bg-blue-500 rounded-md transition-all duration-300 hover:bg-blue-600 transform hover:-translate-y-1">
                        {isEdit ? 'Update' : 'Upload Documents'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default DocumentForm;
