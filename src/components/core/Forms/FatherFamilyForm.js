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
    fontFamily: 'Inter, sans-serif',
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
const FatherFamilyForm = ({ createFunction, updateFunction, getData }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [isEdit, setIsEdit] = useState(false);
  const [dataFetched, setDataFetched] = useState(false);

  const { register, control, handleSubmit, formState: { errors }, reset } = useForm();
  const { fields: tauFields, append: addTau, remove: removeTau } = useFieldArray({
    control,
    name: 'tau'
  });
  const { fields: buaFields, append: addBua, remove: removeBua } = useFieldArray({
    control,
    name: 'bua'
  });
  const { fields: chachaFields, append: addChacha, remove: removeChacha } = useFieldArray({
    control,
    name: 'chacha'
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
        <span style={styles.highlight}>Father's Family Details</span>
      </h2>
      <div style={styles.formSubtitle}>Please fill in your father's family details</div>
      <form onSubmit={handleSubmit(onSubmit)} style={styles.profileForm}>
        <div style={styles.formField}>
          <label style={styles.fieldLabel}>Grandfather's Name</label>
          <input {...register('grandFather', { required: true })} style={styles.fieldInput} />
          {errors.grandFather && <p style={styles.errorMessage}>Grandfather's name is required</p>}
        </div>

        <div style={styles.formField}>
          <label style={styles.fieldLabel}>Grandmother's Name</label>
          <input {...register('grandMother', { required: true })} style={styles.fieldInput} />
          {errors.grandMother && <p style={styles.errorMessage}>Grandmother's name is required</p>}
        </div>

        <div style={styles.formField}>
          <label style={styles.fieldLabel}>Grandfather's Age</label>
          <input type="number" {...register('grandFatherAge', { required: true })} style={styles.fieldInput} />
          {errors.grandFatherAge && <p style={styles.errorMessage}>Grandfather's age is required</p>}
        </div>

        <div style={styles.formField}>
          <label style={styles.fieldLabel}>Grandmother's Age</label>
          <input type="number" {...register('grandMotherAge', { required: true })} style={styles.fieldInput} />
          {errors.grandMotherAge && <p style={styles.errorMessage}>Grandmother's age is required</p>}
        </div>

        <div style={styles.formField}>
          <label style={styles.fieldLabel}>Grandfather's Status</label>
          <input type="checkbox" {...register('grandFatherStatus')} />
        </div>

        <div style={styles.formField}>
          <label style={styles.fieldLabel}>Grandmother's Status</label>
          <input type="checkbox" {...register('grandMotherStatus')} />
        </div>

        <div style={styles.subSection}>
          <h3>Tau (Father's Brothers)</h3>
          {tauFields.map((field, index) => (
            <div key={field.id} style={styles.formField}>
              <input {...register(`tau.${index}.tauName`)} placeholder="Name" style={styles.fieldInput} />
              <input type="number" {...register(`tau.${index}.tauAge`)} placeholder="Age" style={styles.fieldInput} />
              <label>
                <input type="checkbox" {...register(`tau.${index}.tauStatus`)} />
                Status
              </label>
              <button type="button" onClick={() => removeTau(index)} style={styles.button}>Remove Tau</button>
            </div>
          ))}
          <button type="button" onClick={() => addTau()} style={styles.button}>Add Tau</button>
        </div>

        <div style={styles.subSection}>
          <h3>Bua (Father's Sisters)</h3>
          {buaFields.map((field, index) => (
            <div key={field.id} style={styles.formField}>
              <input {...register(`bua.${index}.buaName`)} placeholder="Name" style={styles.fieldInput} />
              <input type="number" {...register(`bua.${index}.buaAge`)} placeholder="Age" style={styles.fieldInput} />
              <label>
                <input type="checkbox" {...register(`bua.${index}.buaStatus`)} />
                Status
              </label>
              <button type="button" onClick={() => removeBua(index)} style={styles.button}>Remove Bua</button>
            </div>
          ))}
          <button type="button" onClick={() => addBua()} style={styles.button}>Add Bua</button>
        </div>

        <div style={styles.subSection}>
          <h3>Chacha (Father's Brothers)</h3>
          {chachaFields.map((field, index) => (
            <div key={field.id} style={styles.formField}>
              <input {...register(`chacha.${index}.chachaName`)} placeholder="Name" style={styles.fieldInput} />
              <input type="number" {...register(`chacha.${index}.chachaAge`)} placeholder="Age" style={styles.fieldInput} />
              <label>
                <input type="checkbox" {...register(`chacha.${index}.chachaStatus`)} />
                Status
              </label>
              <button type="button" onClick={() => removeChacha(index)} style={styles.button}>Remove Chacha</button>
            </div>
          ))}
          <button type="button" onClick={() => addChacha()} style={styles.button}>Add Chacha</button>
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

export default FatherFamilyForm;
