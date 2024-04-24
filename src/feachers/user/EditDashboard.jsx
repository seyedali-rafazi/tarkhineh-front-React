import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import { PiPencilSimpleLine } from "react-icons/pi";
import useUpdateUser from "../authentication/useUpdateUser";
import { FaArrowRight } from "react-icons/fa6";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useUser from "../authentication/useUser";
import PanelSceleton from "../../ui/PanelSceleton";
import {LoadingBars} from "../../ui/Loading";

function EditDashboard() {
  const { isLoading: loadingUser, user } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { isUpdating, updateUser } = useUpdateUser();
  const navigate = useNavigate();
  const [username, setUsername] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const onCkickSubmit = (data) => {
    updateUser(data, {
      onSuccess: () => {
        toast.success("داشبورد شما با موفقیت بروزرسانی شد");
      },
    });
  };

  return loadingUser ? (
    <PanelSceleton />
  ) : (
    <div className="flex flex-col items-center gap-5 border border-secondery-500 rounded-lg p-5">
      <button
        onClick={() => navigate(-1)}
        className="lg:hidden flex justify-start w-full"
      >
        <FaArrowRight />
      </button>
      <p className="flex justify-start w-full font-bold text-lg">پروفایل من </p>
      <span className="w-full block h-0.5 bg-secondery-500 rounded-full"></span>
      <form
        className="flex flex-col gap-10 items-center justify-center h-full w-full"
        onSubmit={handleSubmit(onCkickSubmit)}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 ">
          <TextField
            className="textField"
            placeholder=" نام  و نام خانوادگی:"
            errors={errors}
            name="name"
            type="text"
            value={username}
            onChange={(v) => setUsername(v.target.value)}
            register={register}
            validationSchema={{
              required: "نام  و نام خانوادگی  ضروری است",
            }}
          />
          <TextField
            className="textField"
            placeholder=" ایمیل:"
            errors={errors}
            name="email"
            type="text"
            register={register}
            value={email}
            onChange={(v) => setEmail(v.target.value)}
            validationSchema={{
              required: "ایمیل  همراه ضروری است",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "ایمیل نامعتبر است",
              },
            }}
          />
        </div>
        {isUpdating ? (
          <button
            type="submit"
            className="col-start-1 mx-auto border-2 border-tint-600  bg-secondery-50 rounded-md flex  justify-center items-center gap-2 px-5 py-2 min-w-48"
          >
            <span className="text-xs">
              <LoadingBars width="24" />
            </span>
          </button>
        ) : (
          <button
            type="submit"
            className="col-start-1 mx-auto border-2 border-tint-600  font-bold text-primary bg-secondery-50 py-2 rounded-md flex  justify-center items-center gap-2 hover:bg-primary hover:text-secondery-50 duration-300 px-5"
          >
            <PiPencilSimpleLine className="w-6 h-6" />
            <span className="text-xs">ویرایش اطلاعات شخصی</span>
          </button>
        )}
      </form>
    </div>
  );
}

export default EditDashboard;
