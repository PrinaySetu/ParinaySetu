import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { uploadDocument, updateDocument } from '../../../services/operations/document';
import { toast } from 'react-hot-toast';
import FormSections from '../../Common/FormSections';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';

const styles = {
    formContainer: {
        textAlign: 'start',
        width: '100%',
        maxWidth: '600px',
        margin: '700px auto 0',
        padding: '30px',
        backgroundColor: '#FFFAF0',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
    },
    formTitle: {
        fontSize: '2.5rem',
        textAlign: 'center',
        marginBottom: '20px',
        color: '#333',
    },
    highlight: {
        color: '#4169E1',
    },
    formSubtitle: {
        fontSize: '1.2rem',
        textAlign: 'center',
        color: '#666',
        marginBottom: '30px',
    },
    profileForm: {
        display: 'flex',
        flexDirection: 'column',
        gap: '25px',
    },
    formField: {
        display: 'flex',
        flexDirection: 'column',
    },
    fieldLabel: {
        fontSize: '1rem',
        fontWeight: '600',
        marginBottom: '8px',
        color: '#444',
    },
    inputContainer: {
        position: 'relative',
    },
    fieldInput: {
        width: '100%',
        padding: '12px 15px',
        fontSize: '1rem',
        border: '2px solid #D3D3D3',
        borderRadius: '6px',
        backgroundColor: '#FFFFFF',
        outline: 'none',
        transition: 'border-color 0.3s ease',
    },
    errorMessage: {
        color: '#FF4136',
        fontSize: '0.9rem',
        marginTop: '5px',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '30px',
    },
    button: {
        padding: '12px 25px',
        fontSize: '1.1rem',
        fontWeight: '600',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, transform 0.1s ease',
    },
    submitButton: {
        backgroundColor: '#4169E1',
        '&:hover': {
            backgroundColor: '#3154b1',
            transform: 'translateY(-2px)',
        },
    },
    subSection: {
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#F0F8FF',
        borderRadius: '8px',
        fontSize: '16px'
    },
};

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
                if (Array.isArray(value)) {
                    value.forEach((file) => formData.append(key, file));
                } else {
                    formData.append(key, value);
                }
            });

            const response = await uploadDocument(formData, token);
            if (response) {
                toast.success('Documents uploaded successfully');
            }
        } catch (error) {
            console.error("Upload error:", error);
            toast.error('Failed to upload documents');
        }
    };

    return (
        <div style={styles.formContainer}>
            <h2 style={styles.formTitle}>
                <span>{isEdit ? 'Update' : 'Create'} </span>
                <span style={styles.highlight}>Document Upload</span>
            </h2>
            <div style={styles.formSubtitle}>Please upload your documents</div>
            <form onSubmit={handleSubmit(onSubmit)} style={styles.profileForm}>
                <div style={styles.formField}>
                    <label style={styles.fieldLabel}>Photos</label>
                    <input type="file" name="photos" multiple {...register('photos')} style={styles.fieldInput} />
                </div>

                <div style={styles.formField}>
                    <label style={styles.fieldLabel}>Family Photos</label>
                    <input type="file" name="familyPhoto" multiple {...register('familyPhoto')} style={styles.fieldInput} />
                </div>

                <div style={styles.formField}>
                    <label style={styles.fieldLabel}>Education Documents</label>
                    <input type="file" name="educationDocuments" multiple {...register('educationDocuments')} style={styles.fieldInput} />
                </div>

                <div style={styles.formField}>
                    <label style={styles.fieldLabel}>Income Proofs</label>
                    <input type="file" name="incomeProofs" multiple {...register('incomeProofs')} style={styles.fieldInput} />
                </div>

                <div style={styles.formField}>
                    <label style={styles.fieldLabel}>Property Proofs</label>
                    <input type="file" name="propertyProofs" multiple {...register('propertyProofs')} style={styles.fieldInput} />
                </div>

                <div style={styles.formField}>
                    <label style={styles.fieldLabel}>Address Proofs</label>
                    <input type="file" name="addressProofs" multiple {...register('addressProofs')} style={styles.fieldInput} />
                </div>

                <div style={styles.formField}>
                    <label style={styles.fieldLabel}>ID Proofs</label>
                    <input type="file" name="idProofs" multiple {...register('idProofs')} style={styles.fieldInput} />
                </div>

                <div style={styles.formField}>
                    <label style={styles.fieldLabel}>Other Documents</label>
                    <input type="file" name="otherDocuments" multiple {...register('otherDocuments')} style={styles.fieldInput} />
                </div>

                <div style={styles.buttonContainer}>
                    <button type="submit" style={{ ...styles.button, ...styles.submitButton }}>
                        {isEdit ? 'Update' : 'Upload Documents'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default DocumentForm;