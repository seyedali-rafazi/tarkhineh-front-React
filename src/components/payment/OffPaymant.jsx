import React, { useState } from "react";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import { offIcon } from "../../icons/PaymentIcon";
import useAddOff from "../../feachers/payment/addCoupon";

function OffPaymant() {
  const [off, setOff] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { addCoupon, isPending } = useAddOff();

  const onCkickSubmit = (data) => {
    addCoupon(data);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 justify-evenly items-center border border-secondery-400 rounded-lg px-3 py-5">
      <div className="flex border-b border-secondery-400 py-3 gap-2 w-full lg:border-b-0 lg:py-0 lg:w-1/3">
        <span className="text-secondery-500">{offIcon}</span>
        <p>ثبت کد تخفیف</p>
      </div>
      <form
        className="flex gap-2 items-center justify-center h-full w-full md:w-2/4"
        onSubmit={handleSubmit(onCkickSubmit)}
      >
        <div className="textField ">
          <TextField
            className="w-full"
            placeholder=" کد تخفیف"
            errors={errors}
            name="couponCode"
            type="text"
            value={off}
            onChange={(v) => setOff(v.target.value)}
            register={register}
          />
        </div>
        {off == "" ? (
          <button className="border  font-bold text-secondery-50 bg-secondery-400  rounded-sm cursor-not-allowed w-auto whitespace-nowrap px-5 py-2">
            ثبت کد
          </button>
        ) : (
          <button
            type="submit"
            className="border border-tint-600  font-bold text-primary bg-secondery-50  rounded-sm  hover:bg-primary hover:text-secondery-50 duration-300 w-auto whitespace-nowrap px-5 py-2"
          >
            ثبت کد
          </button>
        )}
      </form>
    </div>
  );
}

export default OffPaymant;
