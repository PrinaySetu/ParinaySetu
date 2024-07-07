import React from 'react';
import ProfileFormTemplate from './ProfileFormTemplate';
import data from '../../../data/data.json'; // Import the entire data.json file
import { createContact, updateContact, getUserContacts } from '../../../services/operations/contacts'
import FormSections from '../../Common/FormSections';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';


const ContactForm = () => {
    return (
        <div className="w-full gap-[3rem] bg-white items-center flex flex-col text-center text-45xl text-black font-subheading">
            <Header />
            <FormSections />
            <ProfileFormTemplate
                fields={data.contact.fields} // Access the profile fields directly from data.profile
                createFunction={createContact}
                updateFunction={updateContact}
                getData={getUserContacts}
            />
            <Footer />
        </div>
    );
}
export default ContactForm;