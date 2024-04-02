import React from "react";
import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import { PiPencilSimpleLine } from "react-icons/pi";
import useUpdateUser from "../authentication/useUpdateUser";
import { ToastContainer, toast } from "react-toastify";

function EditDashboard() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const { isUpdating, updateUser } = useUpdateUser();

  const onCkickSubmit = (data) => {
    updateUser(data, {
      onSuccess: () => {
        toast.success("داشبورد شما با موفقیت بروزرسانی شد");
      },
    });
  };

  return (
    <div className="flex flex-col items-center gap-5 border border-secondery-500 rounded-lg p-5">
      <p className="flex justify-start w-full font-bold text-lg">پروفایل من </p>
      <span className="w-full block h-0.5 bg-secondery-500 rounded-full"></span>
      <form
        className="flex flex-col gap-10 items-center justify-center h-full"
        onSubmit={handleSubmit(onCkickSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <TextField
            label=" نام  و نام خانوادگی:"
            errors={errors}
            name="name"
            type="text"
            register={register}
            validationSchema={{
              required: "نام  و نام خانوادگی  ضروری است",
            }}
          />
          <TextField
            label=" ایمیل:"
            errors={errors}
            name="email"
            type="text"
            register={register}
            validationSchema={{
              required: "ایمیل  همراه ضروری است",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "ایمیل نامعتبر است",
              },
            }}
          />
        </div>
        <button
          type="submit"
          className="col-start-1 w-80 mx-auto border-2 border-tint-600  font-bold text-primary bg-secondery-50 py-2 rounded-md flex  justify-center items-center gap-2 hover:bg-primary hover:text-secondery-50 duration-300">
          <PiPencilSimpleLine className="w-6 h-6" />
          <span>ویرایش اطلاعات شخصی</span>
        </button>
      </form>
    </div>
  );
}

export default EditDashboard;
