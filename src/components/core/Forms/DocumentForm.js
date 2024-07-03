import React, { useState } from 'react';
import { uploadDocument, updateDocument } from '../../../services/operations/document';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import FormSections from '../../Common/FormSections';
import Header from '../../Common/Header';

const DocumentUploader = () => {
  const [files, setFiles] = useState({});
  const { token } = useSelector((state) => state.auth);
  const handleFileChange = (e) => {
    const { name, files: selectedFiles } = e.target;
    setFiles((prevFiles) => ({
      ...prevFiles,
      [name]: selectedFiles,
    }));
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    Object.entries(files).forEach(([key, value]) => {
      Array.from(value).forEach((file) => formData.append(key, file));
    });

    const response = await uploadDocument(formData, token);
    if (response) {
      toast.success('Documents uploaded successfully');
    }
  };

  return (
    <div className="w-full relative bg-white text-center text-45xl text-black font-subheading">
      {/* <Header />
      <FormSections /> */}
      <h2>Upload Documents</h2>
      <form onSubmit={handleUpload}>
        <div>
          <label>Photos:</label>
          <input type="file" name="photos" multiple onChange={handleFileChange} />
        </div>
        <div>
          <label>Family Photos:</label>
          <input type="file" name="familyPhoto" multiple onChange={handleFileChange} />
        </div>
        <div>
          <label>Education Documents:</label>
          <input type="file" name="educationDocuments" multiple onChange={handleFileChange} />
        </div>
        <div>
          <label>Income Proofs:</label>
          <input type="file" name="incomeProofs" multiple onChange={handleFileChange} />
        </div>
        <div>
          <label>Property Proofs:</label>
          <input type="file" name="propertyProofs" multiple onChange={handleFileChange} />
        </div>
        <div>
          <label>Address Proofs:</label>
          <input type="file" name="addressProofs" multiple onChange={handleFileChange} />
        </div>
        <div>
          <label>ID Proofs:</label>
          <input type="file" name="idProofs" multiple onChange={handleFileChange} />
        </div>
        <div>
          <label>Other Documents:</label>
          <input type="file" name="otherDocuments" multiple onChange={handleFileChange} />
        </div>
        <button type="submit">Upload Documents</button>
      </form>
    </div>
  );
};

export default DocumentUploader;