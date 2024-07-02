import React, { useState, useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

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
  },
};


const ArrayFormTemplate = ({ fields, createFunction, updateFunction, getData }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [isEdit, setIsEdit] = useState(false);
  const [dataFetched, setDataFetched] = useState(false);

  const { register, control, handleSubmit, formState: { errors }, reset } = useForm();
  const { fields: brothers, append: addBrother, remove: removeBrother } = useFieldArray({
    control,
    name: 'brother' // Ensure this matches the expected field name
  });
  const { fields: sisters, append: addSister, remove: removeSister } = useFieldArray({
    control,
    name: 'sister' // Ensure this matches the expected field name
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(token)(dispatch);
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
  }, [getData, token, dispatch, reset]);

  const onSubmit = (data) => {
    const apiFunction = isEdit ? updateFunction : createFunction;
    console.log(`Calling ${isEdit ? 'update' : 'create'} function with data:`, data);
    apiFunction(data, token, dispatch);
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.formTitle}>
        <span>{isEdit ? 'Update' : 'Create'} </span>
        <span style={styles.highlight}>Family Details</span>
      </h2>
      <div style={styles.formSubtitle}>Please fill in your family details</div>
      <form onSubmit={handleSubmit(onSubmit)} style={styles.profileForm}>
        {fields.map((field) => (
          field.type !== 'Array' ? (
            <div key={field.name} style={styles.formField}>
              <label style={styles.fieldLabel}>{field.name}</label>
              <div style={styles.inputContainer}>
                <input
                  type={field.type.toLowerCase()}
                  {...register(field.name, { required: field.required })}
                  style={{
                    ...styles.fieldInput,
                    borderColor: errors[field.name] ? '#FF4136' : '#D3D3D3',
                  }}
                  placeholder={`Enter ${field.name.toLowerCase()}`}
                />
              </div>
              {errors[field.name] && <p style={styles.errorMessage}>{field.name} is required</p>}
            </div>
          ) : null
        ))}

        <div style={styles.subSection}>
          <h3>Brothers</h3>
          {brothers.map((brother, index) => (
            <div key={brother.id} style={styles.formField}>
              {fields.find(f => f.name === 'brother').fields.map((bField) => (
                <div key={bField.name}>
                  <label style={styles.fieldLabel}>{bField.name}</label>
                  <input
                    type={bField.type.toLowerCase()}
                    {...register(`brother[${index}].${bField.name}`)} // Use "brothers"
                    style={styles.fieldInput}
                    placeholder={`Enter ${bField.name.toLowerCase()}`}
                  />
                </div>
              ))}
              <button type="button" onClick={() => removeBrother(index)} style={styles.button}>Remove Brother</button>
            </div>
          ))}
          <button type="button" onClick={() => addBrother({})} style={styles.button}>Add Brother</button>
        </div>

        <div style={styles.subSection}>
          <h3>Sisters</h3>
          {sisters.map((sister, index) => (
            <div key={sister.id} style={styles.formField}>
              {fields.find(f => f.name === 'sister').fields.map((sField) => (
                <div key={sField.name}>
                  <label style={styles.fieldLabel}>{sField.name}</label>
                  <input
                    type={sField.type.toLowerCase()}
                    {...register(`sister[${index}].${sField.name}`)} // Use "sisters"
                    style={styles.fieldInput}
                    placeholder={`Enter ${sField.name.toLowerCase()}`}
                  />
                </div>
              ))}
              <button type="button" onClick={() => removeSister(index)} style={styles.button}>Remove Sister</button>
            </div>
          ))}
          <button type="button" onClick={() => addSister({})} style={styles.button}>Add Sister</button>
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

export default ArrayFormTemplate;