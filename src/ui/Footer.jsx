import React from "react";
import { instagram, telegram, twitter } from "../icons/SocialMedia-icon";
import TextField from "./TextField";
import { useForm } from "react-hook-form";

function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onCkickSubmit = (e) => {
    e.preventdefault();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-cover bg-home-footer bg-center w-full h-72 mt-3 justify-center content-center gap-5">
      <div className="flex justify-evenly gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-lg text-secondery-100">دسترسی آسان</h2>
          <ul className="flex gap-3 flex-col text-secondery-300 text-sm">
            <li>پرسش های متداول</li>
            <li>قوانین ترخینه</li>
            <li>حریم خصوصی</li>
            <ul className="flex  gap-2">
              <li>{instagram}</li>
              <li>{telegram}</li>
              <li>{twitter}</li>
            </ul>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-lg text-secondery-100">
            شعبه های ترخینه
          </h2>
          <ul className="flex gap-3 flex-col text-secondery-300 text-sm">
            <li> شعبه اکباتان</li>
            <li> شعبه چالوس</li>
            <li> شعبه اقدسیه</li>
            <li> شعبه ونک</li>
          </ul>
        </div>{" "}
      </div>
      <div className="hidden lg:flex flex-col pl-10">
        <h2 className="font-bold text-lg text-secondery-100">پیام به ترخینه</h2>
        <form
          onSubmit={onCkickSubmit}
          className="grid grid-cols-2 content-center gap-3">
          <div>
            <TextField
              className="textField !border-secondery-600 placeholder:text-secondery-400"
              placeholder="نام و نام خانوادگی"
              errors={errors}
              name="name"
              type="text"
              register={register}
              validationSchema={{
                required: "نام  و نام خانوادگی  ضروری است",
              }}
            />
            <TextField
              className="textField !border-secondery-600 placeholder:text-secondery-400"
              placeholder="شماره تماس"
              errors={errors}
              name="phoneNumber"
              type="number"
              register={register}
              validationSchema={{
                required: "تلفن همراه ضروری است",
              }}
            />
            <TextField
              className="textField !border-secondery-600 placeholder:text-secondery-400"
              placeholder="آدرس ایمیل"
              errors={errors}
              name="email"
              type="text"
              register={register}
              validationSchema={{
                required: "ایمیل  ضروری است",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "ایمیل نامعتبر است",
                },
              }}
            />
          </div>
          <div className="h-full">
            <textarea
              name="ourMessage"
              type="text"
              id="ourMessage"
              autoComplete="off"
              {...register("ourMessage")}
              placeholder="پیام شما"
              className="textField !border-secondery-600 placeholder:text-secondery-400 mt-2 h-[125px]"
            />
            <button
              type="submit"
              className="w-full font-bold col-start-2 text-secondery-400 text-sm bg-transparent border border-secondery-600 py-2 rounded-md">
              ارسال پیام
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Footer;
