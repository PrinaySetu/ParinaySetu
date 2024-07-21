import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';


const ProfileFormTemplate = ({ fields, createFunction, updateFunction, getData, profilePicture, handleProfilePictureChange, handleProfilePictureUpload, showProfilePictureUpload }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [isEdit, setIsEdit] = useState(false);
  const [dataFetched, setDataFetched] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const fetchData = async () => {
    try {
      const data = await getData(token)(dispatch);
      console.log('dasdasda', data)
      // console.log('dasdasda', Object.keys(data))
      if (data) {
        setIsEdit(true);
        reset(data); // Populate form with fetched data
      }
      // setDataFetched(true);
    } catch (error) {
      console.error("Error fetching data:", error);
      // setDataFetched(true);
    }
  };

  useEffect(() => {

    fetchData();
  }, [getData, token, dispatch, reset]);
  // console.log('token', token)

  const onSubmit = (data) => {
    const apiFunction = isEdit ? updateFunction : createFunction;
    console.log(`Calling ${isEdit ? 'update' : 'create'} function with data:`, data);
    apiFunction(data, token, dispatch);
  };

  return (
    <div className='flex flex-col text-start w-full max-[320px]:max-w-60 max-w-xs md:max-w-screen-sm p-4 md:p-8 bg-floral-white rounded-xl shadow-md'>
      <h2 className="text-2xl md:text-4xl text-center mb-3 md:mb-5 text-gray-800">
        <span>{isEdit ? 'Update' : 'Create'} </span>
        <span className='text-blue-600'>Profile</span>
      </h2>
      <p className="text-lg md:text-xl text-center text-gray-500 mb-6 md:mb-8">Please fill in your details</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 md:gap-6">
        {showProfilePictureUpload && (
          <div className="flex flex-col">
            <label className="flex flex-col gap-2 text-sm md:text-base font-semibold text-gray-700">Profile Picture
              <input
                type="file"
                onChange={handleProfilePictureChange}
                accept="image/*"
                className="py-2 md:py-3 px-3 md:px-4 text-sm md:text-base border-2 border-[#D3D3D3] border-gray-300 rounded-md bg-white outline-none transition-colors duration-300 ease-in-out"
              />
            </label>
            <button onClick={handleProfilePictureUpload} type="button" className="mt-2 py-2 md:py-3 px-4 md: px-6 text-sm md:text-lg font-semibold text-white bg-blue-500 rounded-md transition-all duration-300 hover:bg-blue-600 transform hover:-translate-y-1">
              Upload Profile Picture
            </button>
          </div>
        )}
        {fields.map((field) => (
          <div key={field.name} className="flex flex-col">
            <label className="flex flex-col gap-2 text-sm md:text-base font-semibold text-gray-700">{field.label}
              <input
                type={field.type.toLowerCase()}
                {...register(field.name, { required: field.required })}
                className={`py-2 md:py-3 px-3 md:px-4 text-sm md:text-base border-2 border-[#D3D3D3] rounded-md bg-white outline-none transition-colors duration-300 ease-in-out ${errors[field.name] ? 'border-red-500' : 'border-gray-300'}`}
                placeholder={`Enter your ${field.name.toLowerCase()}`}
              />
            </label>
            {errors[field.name] && <p className="text-red-500 text-xs md:text-sm mt-1">{field.name} is required</p>}
          </div>
        ))}
        <div className="flex justify-center mt-6 md:mt-8">
          <button
            type="submit"
            className="py-3 px-8 text-xl font-semibold text-white bg-blue-500 rounded-md transition-all duration-300 hover:bg-blue-600 transform hover:-translate-y-1"
          >
            {isEdit ? 'Update' : 'Create'}
          </button>
        </div>
      </form>
    </div>

  );
};

export default ProfileFormTemplate;
