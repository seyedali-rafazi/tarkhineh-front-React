import React, { useState } from "react";
import TextField from "../../ui/TextField";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { Listbox } from "@headlessui/react";
import { provinces } from "../../utils/Cities";

const userOptions = [
  {
    text: "پروانه کسب دارد.",
    optionId: "certificate",
    id: 1,
  },
  {
    text: "پارکینگ دارد.",
    optionId: "park",
    id: 2,
  },
  {
    text: "آشپزخانه دارد.",
    optionId: "kitchen",
    id: 3,
  },
  {
    text: "انبار دارد.",
    optionId: "warhouse",
    id: 4,
  },
];

function UserInformation() {
  const [name, setName] = useState("");
  const [nationalNumber, setNationalNumber] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userAddress, setUserAddreess] = useState("");
  const [selectedProvince, setSelectedProvince] = useState(provinces[0]);
  const [selectedCity, setSelectedCity] = useState(
    selectedProvince.counties[0]
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onCkickSubmit = (data) => {
    toast.success("  با موفقیت ارسال شد");
  };

  const handelChangeCity = (province) => {
    setSelectedProvince(province);
    setSelectedCity(province.counties[0]);
  };

  return (
    <div>
      <div>
        <form
          className="flex flex-col gap-1 items-center justify-center h-full w-full"
          onSubmit={handleSubmit(onCkickSubmit)}
        >
          <h2 className="w-full px-4 text-sm md:text-lg">مشخصات فرد متقاضی</h2>
          <div className="flex flex-col justify-center items-center lg:flex-row gap-8 p-3 w-full ">
            <TextField
              className="w-full outline-none border border-[#CBCBCB] text-sm text-[#353535] placeholder:text-[#717171] placeholder:text-right text-right rounded-md px-3 py-2 md:py-[7px] mb-4 md:text-base"
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
              className="w-full outline-none border border-[#CBCBCB] text-sm text-[#353535] placeholder:text-[#717171] placeholder:text-right text-right rounded-md px-3 py-2 md:py-[7px] mb-4 md:text-base"
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
            <TextField
              className="w-full outline-none border border-[#CBCBCB] text-sm text-[#353535] placeholder:text-[#717171] placeholder:text-right text-right rounded-md px-3 py-2 md:py-[7px] mb-4 md:text-base"
              placeholder="شماره تماس"
              errors={errors}
              name="userNumber"
              type="number"
              value={userNumber}
              onChange={(v) => setUserNumber(v.target.value)}
              register={register}
              validationSchema={{
                required: "شماره تماس ضروری است",
              }}
            />
          </div>

          <h2 className="w-full px-4 text-sm md:text-lg">آدرس ملک متقاضی</h2>
          <div className="flex flex-col justify-center items-center lg:flex-row gap-8 p-3 w-full ">
            <Listbox value={selectedProvince} onChange={handelChangeCity}>
              <div className="relative w-full">
                <Listbox.Button className="w-full outline-none border border-[#CBCBCB] text-sm text-[#353535] placeholder:text-[#717171] placeholder:text-right text-right rounded-md px-3 py-2 md:py-[7px] mb-4 md:text-base">
                  {selectedProvince.name}
                </Listbox.Button>
                <Listbox.Options className="absolute right-0 left-0 top-12 bg-white border border-[#EDEDED] rounded-md shadow-md h-36 md:h-48  overflow-x-hidden text-sm md:text-base px-3 text-[#353535] z-10">
                  {provinces.map((prov, index) => (
                    <div key={prov.id}>
                      <Listbox.Option
                        value={prov}
                        disabled={prov.unavailable}
                        className="py-[9px] md:px-0.5 cursor-pointer"
                      >
                        {prov.name}
                      </Listbox.Option>
                    </div>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>

            <Listbox value={selectedCity} onChange={setSelectedProvince}>
              <div className="relative w-full">
                <Listbox.Button className="w-full outline-none border border-[#CBCBCB] text-sm text-[#353535] placeholder:text-[#717171] placeholder:text-right text-right rounded-md px-3 py-2 md:py-[7px] mb-4 md:text-base">
                  {selectedCity.name}
                </Listbox.Button>
                <Listbox.Options className="absolute right-0 left-0 top-12 bg-white border border-[#EDEDED] rounded-md shadow-md h-36 md:h-48  overflow-x-hidden text-sm md:text-base px-3 text-[#353535] z-10">
                  {selectedProvince.counties.map((city, index) => (
                    <div key={city.id}>
                      <Listbox.Option
                        value={city}
                        disabled={city.unavailable}
                        className="py-[9px] md:px-0.5 cursor-pointer"
                      >
                        {city.name}
                      </Listbox.Option>
                    </div>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>

            <TextField
              className="w-full outline-none border border-[#CBCBCB] text-sm text-[#353535] placeholder:text-[#717171] placeholder:text-right text-right rounded-md px-3 py-2 md:py-[7px] mb-4 md:text-base"
              placeholder="آدرس دقیق"
              errors={errors}
              name="addreass"
              type="text"
              value={userAddress}
              onChange={(v) => setUserAddreess(v.target.value)}
              register={register}
              validationSchema={{
                required: "آدرس ضروری است",
              }}
            />
          </div>

          <h2 className="w-full px-4 text-sm md:text-lg">امکانات ملک متقاضی</h2>
          <div className="flex flex-col gap-3 w-full justify-start items-start p-3 md:flex-row">
            {userOptions.map((userOption) => (
              <div className="flex gap-2 items-center" key={userOption.id}>
                <input
                  className="w-3 h-3 md:w-4 md:h-4 rounded-sm md:rounded bg-white border-primary accent-primary"
                  id={userOption.optionId}
                  type="checkbox"
                />
                <label htmlFor="">{userOption.text}</label>
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="col-start-1 mx-auto  font-bold text-secondery-50 bg-primary py-2 rounded-md w-auto px-5"
          >
            ثبت اطلاعات
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserInformation;
