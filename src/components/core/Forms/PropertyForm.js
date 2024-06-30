import React from 'react';
import ProfileFormTemplate from './ProfileFormTemplate';
import data from '../../../data/data.json'; // Import the entire data.json file
import { addProperty, updateProperty, getUserProperty } from '../../../services/operations/property'

const PropertyForm = () => {
    return (
        <ProfileFormTemplate

            fields={data.property.fields} // Access the profile fields directly from data.profile
            createFunction={addProperty}
            updateFunction={updateProperty}
            getData={getUserProperty}
        />
    );
}
export default PropertyForm;