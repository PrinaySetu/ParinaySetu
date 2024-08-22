import React, { useState, useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation

const ArrayFormTemplate = ({ fields, createFunction, updateFunction, getData }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [isEdit, setIsEdit] = useState(false);
  const [dataFetched, setDataFetched] = useState(false);
  const navigate = useNavigate();  // Initialize useNavigate for navigation

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
    <div className="flex flex-col text-start w-full max-[320px]:max-w-60 max-w-xs md:max-w-screen-sm p-4 md:p-8 bg-floral-white rounded-xl shadow-md">
      <h2 className="text-2xl md:text-4xl text-center mb-3 md:mb-5 text-gray-800">
        <span>{isEdit ? 'Update' : 'Create'} </span>
        <span className="text-blue-600">Family Details</span>
      </h2>
      <p className="text-lg md:text-xl text-center text-gray-500 mb-6 md:mb-8">Please fill in your family details</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 md:gap-6">
        {fields.map((field) => (
          field.type !== 'Array' ? (
            <div key={field.name} className="flex flex-col">
              <label className="flex flex-col gap-2 text-sm md:text-base font-semibold text-gray-700">{field.name}
                <input
                  type={field.type.toLowerCase()}
                  {...register(field.name, { required: field.required })}
                  className={`py-2 md:py-3 px-3 md:px-4 text-sm md:text-base border-2 border-[#D3D3D3] rounded-md bg-white outline-none transition-colors duration-300 ease-in-out ${errors[field.name] ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder={`Enter ${field.name.toLowerCase()}`}
                />
              </label>
              {errors[field.name] && <p className="text-red-500 text-xs md:text-sm mt-1">{field.name} is required</p>}
            </div>
          ) : null
        ))}

        <div className="mt-5 p-4 bg-floral-white rounded-md">
          <h3 className="text-lg font-semibold mb-3">Brothers</h3>
          {brothers.map((brother, index) => (
            <div key={brother.id} className="flex flex-col mb-3">
              {fields.find(f => f.name === 'brother').fields.map((bField) => (
                <div key={bField.name}>
                  <label className="flex flex-col gap-2 text-sm md:text-base font-semibold text-gray-700">{bField.name}
                    <input
                      type={bField.type.toLowerCase()}
                      {...register(`brother[${index}].${bField.name}`)} // Use "brothers"
                      className="py-2 md:py-3 px-3 md:px-4 text-sm md:text-base border-2 rounded-md bg-white outline-none transition duration-300 ease-in-out"
                      placeholder={`Enter ${bField.name.toLowerCase()}`}
                    />
                  </label>
                </div>
              ))}
              <button type="button" onClick={() => removeBrother(index)} className="mt-2 py-2 md:py-3 px-4 md:px-6 text-sm md:text-lg font-semibold text-white bg-red hover:bg-red-600 rounded-md transition duration-300 ease-in-out cursor-pointer">Remove Brother</button>
            </div>
          ))}
          <button type="button" onClick={() => addBrother({})} className="py-2 md:py-3 px-4 md:px-6 text-sm md:text-lg font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer">Add Brother</button>
        </div>

        <div className="mt-5 p-4 bg-floral-white rounded-md">
          <h3 className="text-lg font-semibold mb-3">Sisters</h3>
          {sisters.map((sister, index) => (
            <div key={sister.id} className="flex flex-col mb-3">
              {fields.find(f => f.name === 'sister').fields.map((sField) => (
                <div key={sField.name}>
                  <label className="flex flex-col gap-2 text-sm md:text-base font-semibold text-gray-700">{sField.name}
                    <input
                      type={sField.type.toLowerCase()}
                      {...register(`sister[${index}].${sField.name}`)} // Use "sisters"
                      className="py-2 md:py-3 px-3 md:px-4 text-sm md:text-base border-2 rounded-md bg-white outline-none transition duration-300 ease-in-out"
                      placeholder={`Enter ${sField.name.toLowerCase()}`}
                    />
                  </label>
                </div>
              ))}
              <button type="button" onClick={() => removeSister(index)} className="mt-2 py-2 md:py-3 px-4 md:px-6 text-sm md:text-lg font-semibold text-white bg-red hover:bg-red-600 rounded-md transition duration-300 ease-in-out cursor-pointer">Remove Sister</button>
            </div>
          ))}
          <button type="button" onClick={() => addSister({})} className="py-2 md:py-3 px-4 md:px-6 text-sm md:text-lg font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer">Add Sister</button>
        </div>

        <div className="flex justify-center mt-6 md:mt-8">
          <button
            type="submit"
            className="py-3 px-8 text-xl font-semibold text-white bg-blue-500 rounded-md transition-all duration-300 hover:bg-blue-600 transform hover:-translate-y-1 cursor-pointer"
          >
            {isEdit ? 'Update' : 'Create'}
          </button>
        </div>

        {/* Go to Home Button (conditionally rendered) */}
        {isEdit && (
          <div className="flex justify-center mt-6 md:mt-8">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="py-3 px-8 text-xl font-semibold text-white bg-blue-500 rounded-md transition-all duration-300 hover:bg-blue-600 transform hover:-translate-y-1 cursor-pointer"
            >
              Go to Home
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ArrayFormTemplate;
