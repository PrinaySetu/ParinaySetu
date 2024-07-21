import React, { useState, useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

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
    <div className="flex flex-col text-start w-full max-[320px]:max-w-60 max-w-xs md:max-w-screen-sm p-4 md:p-8 bg-floral-white rounded-xl shadow-md">
      <h2 className="text-2xl md:text-4xl text-center mb-3 md:mb-5 text-gray-800">
        <span>{isEdit ? 'Update' : 'Create'} </span>
        <span className="text-blue-600">Mother's Family Details</span>
      </h2>
      <div className="text-lg md:text-xl text-center text-gray-500 mb-6 md:mb-8">Please fill in your mother's family details</div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 md:gap-6">
        <div className="flex flex-col">
          <label className="flex flex-col gap-2 text-lg font-semibold mb-2 text-[#444]">
            Grandmother's Name
            <input {...register('grandMother', { required: true })} className="p-3 text-lg border-2 border-[#D3D3D3] rounded-md bg-white outline-none transition-colors duration-300" />
          </label>
          {errors.grandMother && <p className="text-[#FF4136] text-sm mt-1">Grandmother's name is required</p>}
        </div>

        <div className="flex flex-col">
          <label className="flex flex-col gap-2 text-lg font-semibold mb-2 text-[#444]">
            Grandmother's Age
            <input type="number" {...register('grandMotherAge', { required: true })} className="p-3 text-lg border-2 border-[#D3D3D3] rounded-md bg-white outline-none transition-colors duration-300" />
          </label>
          {errors.grandMotherAge && <p className="text-[#FF4136] text-sm mt-1">Grandmother's age is required</p>}
        </div>

        <div className="flex flex-col">
          <label className="flex flex-col gap-2 text-lg font-semibold mb-2 text-[#444]">
            Grandmother's Status
            <input type="checkbox" {...register('grandMotherStatus')} />
          </label>
        </div>

        <div className="mt-5 p-4 bg-floral-white rounded-md text-lg">
          <h3 className="font-semibold mb-3">Mama (Mother's Brothers)</h3>
          {mamaFields.map((field, index) => (
            <div key={field.id} className="flex flex-col mb-4">
              <input {...register(`mama.${index}.mamaName`)} placeholder="Name" className="py-2 md:py-3 px-3 md:px-4 text-sm md:text-base border-2 rounded-md bg-white outline-none transition duration-300 ease-in-out" />
              <input type="number" {...register(`mama.${index}.mamaAge`)} placeholder="Age" className="py-2 md:py-3 px-3 md:px-4 text-sm md:text-base border-2 rounded-md bg-white outline-none transition duration-300 ease-in-out" />
              <label>
                <input type="checkbox" {...register(`mama.${index}.mamaStatus`)} />
                Status
              </label>
              <button type="button" onClick={() => removeMama(index)} className="mt-2 py-2 md:py-3 px-4 md:px-6 text-sm md:text-lg font-semibold text-white bg-red hover:bg-red-600 rounded-md transition duration-300 ease-in-out">Remove Mama</button>
            </div>
          ))}
          <button type="button" onClick={() => addMama()} className="py-2 md:py-3 px-4 md:px-6 text-sm md:text-lg font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Add Mama</button>
        </div>

        <div className="mt-5 p-4 bg-floral-white rounded-md text-lg">
          <h3 className="fonr-semibold mb-3">Mausi (Mother's Sisters)</h3>
          {mausiFields.map((field, index) => (
            <div key={field.id} className="flex flex-col mb-3">
              <input {...register(`mausi.${index}.mausiName`)} placeholder="Name" className="py-2 md:py-3 px-3 md:px-4 text-sm md:text-base border-2 rounded-md bg-white outline-none transition duration-300 ease-in-out" />
              <input type="number" {...register(`mausi.${index}.mausiAge`)} placeholder="Age" className="py-2 md:py-3 px-3 md:px-4 text-sm md:text-base border-2 rounded-md bg-white outline-none transition duration-300 ease-in-out" />
              <label>
                <input type="checkbox" {...register(`mausi.${index}.mausiStatus`)} />
                Status
              </label>
              <button type="button" onClick={() => removeMausi(index)} className="mt-2 py-2 md:py-3 px-4 md:px-6 text-sm md:text-lg font-semibold text-white bg-red hover:bg-red-600 rounded-md transition duration-300 ease-in-out">Remove Mausi</button>
            </div>
          ))}
          <button type="button" onClick={() => addMausi()} className="py-2 md:py-3 px-4 md:px-6 text-sm md:text-lg font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Add Mausi</button>
        </div>

        <div className="flex justify-center mt-8">
          <button type="submit" className="py-3 px-8 text-xl font-semibold text-white bg-blue-500 rounded-md transition-all duration-300 hover:bg-blue-600 transform hover:-translate-y-1">
            {isEdit ? 'Update' : 'Create'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MotherFamilyForm;
