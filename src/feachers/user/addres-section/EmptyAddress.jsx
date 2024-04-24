import React from "react";
import Modal from "../../../ui/Modal";
import TextField from "../../../ui/TextField";
import { emptyPage } from "../../../icons/dashboard-icon";
import { useForm } from "react-hook-form";

function EmptyAddress({ setOpen, open, onCkickSubmitAddress }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="w-full h-full">
      <div className="flex justify-center opacity-45"></div>
      <div className="bg-cover bg-hero-pattern bg-center h-full w-full mx-auto">
        <div className="flex flex-col justify-center items-center gap-8 h-full w-full">
          <p className="font-semibold text-secondery-600 text-center w-full">
            شما در حال حاضر هیچ آدرسی ثبت نکرده اید !
          </p>
          <button
            onClick={() => setOpen(true)}
            className="border-2 font-semibold border-primary text-primary hover:bg-primary hover:text-secondery-50 duration-300 rounded-md px-10 py-2 w-1/3 min-w-48">
            افزودن آدرس
          </button>
          <Modal logo=" آدرس" open={open} onClose={() => setOpen(false)}>
            <form
              className="w-full space-y-4"
              onSubmit={handleSubmit(onCkickSubmitAddress)}>
              <TextField
                className="textField"
                placeholder="  آدرس:"
                errors={errors}
                name="address"
                type="text"
                register={register}
                validationSchema={{
                  required: "  آدرس ضروری است",
                }}
              />
              <button
                type="submit"
                className="w-full font-bold text-slate-50 bg-primary py-2 rounded-md">
                افزودن
              </button>
            </form>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default EmptyAddress;
