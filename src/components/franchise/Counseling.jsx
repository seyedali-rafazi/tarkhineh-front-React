import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import TextField from "../../ui/TextField";
import { PiPencilSimpleLine } from "react-icons/pi";
import DatePickerField from "../../ui/DatePickerField";

function Counseling() {
  const [name, setName] = useState("");
  const [nationalNumber, setNationalNumber] = useState("");
  const [date, setDate] = useState(new Date(""));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onCkickSubmit = (data) => {
    toast.success("  با موفقیت ارسال شد");
  };
  return (
    <div>
      <h2 className="w-full font-bold text-xl text-center">دریافت مشاوره</h2>
      <div>
        <form
          className="flex flex-col gap-10 items-center justify-center h-full w-full px-4"
          onSubmit={handleSubmit(onCkickSubmit)}
        >
          <div className="flex flex-col justify-center items-center lg:flex-row gap-8 p-3 w-full ">
            <TextField
              className="border border-secondery-400 p-2 rounded-sm w-full h-[44px]"
              placeholder=" نام  و نام خانوادگی"
              errors={errors}
              name="name"
              type="text"
              value={name}
              onChange={(v) => setName(v.target.value)}
              register={register}
              validationSchema={{
                required: "نام  و نام خانوادگی  ضروری است",
              }}
            />
            <TextField
              className="border border-secondery-400 p-2 rounded-sm w-full h-[44px]"
              placeholder="کد ملی"
              errors={errors}
              name="nationalNumber"
              type="number"
              value={nationalNumber}
              onChange={(v) => setNationalNumber(v.target.value)}
              register={register}
              validationSchema={{
                required: "کد ملی  ضروری است",
              }}
            />
            <DatePickerField
              date={date}
              setDate={setDate}
              label="تاریخ مشاوره"
            />
          </div>
          <button
            type="submit"
            className="col-start-1 mx-auto  font-bold text-secondery-50 bg-primary py-2 rounded-md w-auto px-5"
          >
            درخواست مشاوره
          </button>
        </form>
      </div>
    </div>
  );
}

export default Counseling;
