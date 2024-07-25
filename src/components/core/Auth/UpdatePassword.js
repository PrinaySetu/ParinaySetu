import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { changePassword } from "../../../services/operations/authAPi";
import IconBtn from "../../../pages/IconBtn";

export default function ChangePassword() {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitPasswordForm = async (data) => {
    // console.log("password Data - ", data)
    try {
      await changePassword(token, data);
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-cornsilk px-4">
      <div className="flex flex-col w-full max-w-60 min-[424px]:max-w-xs sm:max-w-sm lg:max-w-lg bg-white p-6 sm:p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-extrabold mb-4 text-richblack-5">Change <span className="text-red">Password</span></h2>
        <form onSubmit={handleSubmit(submitPasswordForm)} className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-6">
            <div className="relative flex flex-col gap-2">
              <label htmlFor="oldPassword" className="text-sm sm:text-[0.875rem] text-gray-900 leading-[1.375rem]">
                Current Password
              </label>
              <input
                type={showOldPassword ? "text" : "password"}
                name="oldPassword"
                id="oldPassword"
                placeholder="Enter Current Password"
                className="bg-white rounded-lg text-gray-900 p-3 border-[1px] border-solid border-stroke-little"
                {...register("oldPassword", { required: true })}
              />
              <span
                onClick={() => setShowOldPassword((prev) => !prev)}
                className="absolute right-3 top-[38px] cursor-pointer"
              >
                {showOldPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB3bf" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB3bf" />
                )}
              </span>
              {errors.oldPassword && (
                <span className="-mt-1 text-[12px] text-pink-200">
                  Please enter your Current Password.
                </span>
              )}
            </div>
            <div className="relative flex flex-col gap-2">
              <label htmlFor="newPassword" className="text-sm sm:text-[0.875rem] text-gray-900 leading-[1.375rem]">
                New Password
              </label>
              <input
                type={showNewPassword ? "text" : "password"}
                name="newPassword"
                id="newPassword"
                placeholder="Enter New Password"
                className="bg-white rounded-lg text-gray-900 p-3 border-[1px] border-solid border-stroke-little"
                {...register("newPassword", { required: true })}
              />
              <span
                onClick={() => setShowNewPassword((prev) => !prev)}
                className="absolute right-3 top-[38px] cursor-pointer"
              >
                {showNewPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB3bf" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB3bf" />
                )}
              </span>
              {errors.newPassword && (
                <span className="-mt-1 text-[12px] text-pink-200">
                  Please enter your New Password.
                </span>
              )}
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-6">
            <button
              onClick={() => navigate("/my-dashboard")}
              className="cursor-pointer rounded-lg bg-gray-700 py-2 px-5 font-semibold text-white"
            >
              Cancel
            </button>
            <IconBtn type="submit" text="Update" />
          </div>
        </form>
      </div>
    </div>
  );
}
