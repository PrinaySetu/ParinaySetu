import React, { useState, useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

const styles = {
  formContainer: {
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
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
  },
};
const MotherFamilyForm = ({ createFunction, updateFunction, getData }) => {
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);
    const [isEdit, setIsEdit] = useState(false);
    const [dataFetched, setDataFetched] = useState(false);
  
    const { register, control, handleSubmit, formState: { errors }, reset } = useForm();
    const { fields: mamaFields, append: addMama, remove: removeMama } = useFieldArray({
      control,
      name: 'mama'
    });
    const { fields: mausiFields, append: addMausi, remove: removeMausi } = useFieldArray({
      control,
      name: 'mausi'
    });
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getData(token).direct();
          if (data && Object.keys(data).length > 0) {
            setIsEdit(true);
            reset(data);
          }
          setDataFetched(true);
        } catch (error) {
          console.error("Error fetching data:", error);
          setDataFetched(true);
        }
      };
  
      fetchData();
    }, [getData, token, reset]);
  
    const onSubmit = (data) => {
      const apiFunction = isEdit ? updateFunction : createFunction;
      console.log(`Calling ${isEdit ? 'update' : 'create'} function with data:`, data);
      apiFunction(data, token, dispatch);
    };
  
    return (
      <div style={styles.formContainer}>
        <h2 style={styles.formTitle}>
          <span>{isEdit ? 'Update' : 'Create'} </span>
          <span style={styles.highlight}>Mother's Family Details</span>
        </h2>
        <div style={styles.formSubtitle}>Please fill in your mother's family details</div>
        <form onSubmit={handleSubmit(onSubmit)} style={styles.profileForm}>
          <div style={styles.formField}>
            <label style={styles.fieldLabel}>Grandmother's Name</label>
            <input {...register('grandMother', { required: true })} style={styles.fieldInput} />
            {errors.grandMother && <p style={styles.errorMessage}>Grandmother's name is required</p>}
          </div>
  
          <div style={styles.formField}>
            <label style={styles.fieldLabel}>Grandmother's Age</label>
            <input type="number" {...register('grandMotherAge', { required: true })} style={styles.fieldInput} />
            {errors.grandMotherAge && <p style={styles.errorMessage}>Grandmother's age is required</p>}
          </div>
  
          <div style={styles.formField}>
            <label style={styles.fieldLabel}>Grandmother's Status</label>
            <input type="checkbox" {...register('grandMotherStatus')} />
          </div>
  
          <div style={styles.subSection}>
            <h3>Mama (Mother's Brothers)</h3>
            {mamaFields.map((field, index) => (
              <div key={field.id} style={styles.formField}>
                <input {...register(`mama.${index}.mamaName`)} placeholder="Name" style={styles.fieldInput} />
                <input type="number" {...register(`mama.${index}.mamaAge`)} placeholder="Age" style={styles.fieldInput} />
                <label>
                  <input type="checkbox" {...register(`mama.${index}.mamaStatus`)} />
                  Status
                </label>
                <button type="button" onClick={() => removeMama(index)} style={styles.button}>Remove Mama</button>
              </div>
            ))}
            <button type="button" onClick={() => addMama()} style={styles.button}>Add Mama</button>
          </div>
  
          <div style={styles.subSection}>
            <h3>Mausi (Mother's Sisters)</h3>
            {mausiFields.map((field, index) => (
              <div key={field.id} style={styles.formField}>
                <input {...register(`mausi.${index}.mausiName`)} placeholder="Name" style={styles.fieldInput} />
                <input type="number" {...register(`mausi.${index}.mausiAge`)} placeholder="Age" style={styles.fieldInput} />
                <label>
                  <input type="checkbox" {...register(`mausi.${index}.mausiStatus`)} />
                  Status
                </label>
                <button type="button" onClick={() => removeMausi(index)} style={styles.button}>Remove Mausi</button>
              </div>
            ))}
            <button type="button" onClick={() => addMausi()} style={styles.button}>Add Mausi</button>
          </div>
  
          <div style={styles.buttonContainer}>
            <button type="submit" style={{ ...styles.button, ...styles.submitButton }}>
              {isEdit ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default MotherFamilyForm;