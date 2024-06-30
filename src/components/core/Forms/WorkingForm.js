import React from 'react';
import ProfileFormTemplate from './ProfileFormTemplate';
import data from '../../../data/data.json'; // Import the entire data.json file
import { addWorking, updateWorking, getWorking } from '../../../services/operations/working'

const WorkingForm = () => {
    return (
        <ProfileFormTemplate

            fields={data.working.fields} // Access the profile fields directly from data.profile
            createFunction={addWorking}
            updateFunction={updateWorking}
            getData={getWorking}
        />
    );
}
export default WorkingForm;