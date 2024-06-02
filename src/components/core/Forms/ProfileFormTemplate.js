import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

const ProfileFormTemplate = ({ fields, createFunction, updateFunction }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isCreate, setIsCreate] = useState(true);

  const onSubmit = (data) => {
    const apiFunction = isCreate ? createFunction : updateFunction;
    console.log(`Calling ${isCreate ? 'create' : 'update'} function with data:`, data);
    apiFunction(data, token, dispatch);
  };

  const toggleMode = () => {
    setIsCreate(!isCreate);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field) => (
          <div key={field.name}>
            <label>{field.name}</label>
            <input type={field.type.toLowerCase()} {...register(field.name, { required: field.required })} />
            {errors[field.name] && <p>{field.name} is required</p>}
          </div>
        ))}
        <button type="submit">{isCreate ? 'Create' : 'Update'}</button>
        <button type="button" onClick={toggleMode}>
          {isCreate ? 'Switch to Update' : 'Switch to Create'}
        </button>
      </form>
    </div>
  );
};

export default ProfileFormTemplate;