import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { useForm } from "react-hook-form";
import TextField from "./TextField";
import useAuth from "../feachers/authentication/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { userPnaelUrl, cartUrl } from "../utils/UrlAddress";
import { baseLogo } from "../icons/Base-icons";
import { useSearchMenu } from "../context/SearchContext";
import { CiSearch } from "react-icons/ci";

export default function NavbarIcons({ user }) {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [openSearch, setOpenSeach] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const { isCreating, createUser } = useAuth();
  const navigate = useNavigate();
  const { searchParams, setSearchParams, searchQuery, setSearchQuery } =
    useSearchMenu();

  const handleSubmitmenu = (event) => {
    event.preventDefault();
    setSearchParams({ q: searchQuery });
    navigate(`/menu?search=${encodeURIComponent(searchQuery)}`);
  };

  const handelUser = () => {
    if (!user) {
      setOpen(true);
    }
    if (user) {
      navigate("/dashboard");
    }
  };

  const handelOrderPanel = () => {
    if (!user) {
      setOpen(true);
    }
    if (user) {
      navigate("/cart");
    }
  };

  const onCkickSubmit = (data) => {
    createUser(data, {
      onSuccess: () => {
        setOpen(false);
        reset();
      },
    });
  };

  // styles
  const ActiveUrlButton = "p-2 duration-300 rounded-lg bg-tint-700 text-white";
  const DisableButon =
    "p-2 duration-300 rounded-lg bg-secondery-300 text-tint-700 ";

  return (
    <div className="flex gap-2 ">
      <button
        className={`${DisableButon} hidden lg:block`}
        onClick={() => setOpenSeach(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
        >
          <path
            fill="currentColor"
            d="M11.5 21.75c-5.65 0-10.25-4.6-10.25-10.25S5.85 1.25 11.5 1.25s10.25 4.6 10.25 10.25-4.6 10.25-10.25 10.25Zm0-19c-4.83 0-8.75 3.93-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.93 8.75-8.75-3.92-8.75-8.75-8.75ZM22 22.75c-.19 0-.38-.07-.53-.22l-2-2a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z"
          ></path>
        </svg>{" "}
      </button>

      <button
        className={
          cartUrl.includes(location.pathname) ? ActiveUrlButton : DisableButon
        }
        onClick={handelOrderPanel}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
        >
          <path
            fill="currentColor"
            d="M18.19 17.75H7.54c-.99 0-1.94-.42-2.61-1.15A3.573 3.573 0 0 1 4 13.9l.83-9.96c.03-.31-.08-.61-.29-.84-.21-.23-.5-.35-.81-.35H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.74c.73 0 1.42.31 1.91.84.27.3.47.65.58 1.04h12.49c1.01 0 1.94.4 2.62 1.12.67.73 1.01 1.68.93 2.69l-.54 7.5c-.11 1.83-1.71 3.31-3.54 3.31ZM6.28 4.62l-.78 9.4c-.05.58.14 1.13.53 1.56.39.43.93.66 1.51.66h10.65c1.04 0 1.98-.88 2.06-1.92l.54-7.5a2.04 2.04 0 0 0-2.06-2.21H6.28v.01ZM16.25 22.75c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm0-2.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5ZM8.25 22.75c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm0-2.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5Z"
          ></path>
          <path
            fill="currentColor"
            d="M21 8.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75Z"
          ></path>
        </svg>{" "}
      </button>

      <button
        onClick={handelUser}
        className={
          userPnaelUrl.includes(location.pathname)
            ? ActiveUrlButton
            : DisableButon
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
        >
          <path
            fill="currentColor"
            d="M12 12.75c-3.17 0-5.75-2.58-5.75-5.75S8.83 1.25 12 1.25 17.75 3.83 17.75 7s-2.58 5.75-5.75 5.75Zm0-10A4.26 4.26 0 0 0 7.75 7 4.26 4.26 0 0 0 12 11.25 4.26 4.26 0 0 0 16.25 7 4.26 4.26 0 0 0 12 2.75ZM20.59 22.75c-.41 0-.75-.34-.75-.75 0-3.45-3.52-6.25-7.84-6.25S4.16 18.55 4.16 22c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-4.27 4.19-7.75 9.34-7.75 5.15 0 9.34 3.48 9.34 7.75 0 .41-.34.75-.75.75Z"
          ></path>
        </svg>
      </button>

      <Modal open={open} onClose={() => setOpen(false)} logo={baseLogo}>
        <div className="flex flex-col justify-center items-center gap-2 ">
          <div>ورود / ثبت نام</div>
          <div className="text-secondery-500 text-xs">
            لطفا شماره تلفن معتبر و رمز عبور را وارد کنید
          </div>
          <form
            className="w-full space-y-4"
            onSubmit={handleSubmit(onCkickSubmit)}
          >
            <TextField
              className="textField"
              placeholder="شماره تلفن:"
              errors={errors}
              name="phoneNumber"
              type="number"
              register={register}
              validationSchema={{
                required: "تلفن همراه ضروری است",
              }}
            />
            <TextField
              className="textField"
              placeholder=" رمز عبور:"
              errors={errors}
              name="password"
              type="text"
              register={register}
              validationSchema={{
                required: "رمز عبور همراه ضروری است",
              }}
            />
            <button
              type="submit"
              className="w-full font-bold text-slate-50 bg-primary py-2 rounded-md"
            >
              ثبت نام / ورود
            </button>
          </form>
          <div></div>
          <div></div>
        </div>
      </Modal>

      <Modal
        open={openSearch}
        onClose={() => setOpenSeach(false)}
        logo="جست و جو"
      >
        <form
          onSubmit={handleSubmitmenu}
          className="flex px-3 py-2 justify-between items-center border border-secondery-400 rounded-lg w-full"
        >
          <input
            className="w-full "
            type="text"
            placeholder="جست و جو"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">
            <CiSearch className="w-6 h-6 text-secondery-600" />
          </button>
        </form>
      </Modal>
    </div>
  );
}
