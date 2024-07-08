import React from 'react'
import DocumentFormTemp from './DocumentFormTemplate'
// import { uploadDocument, updateDocument } from '../../../services/operations/document';
import FormSections from '../../Common/FormSections';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';

const Document = () => {
  return (
    <div className="w-full gap-[3rem] bg-white items-center flex flex-col text-center text-45xl text-black font-subheading">
      <Header />
      <FormSections />
      <DocumentFormTemp />
      <Footer />
    </div>
  )
}

export default Document