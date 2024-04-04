import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { emptyPage } from "../../../icons/dashboard-icon";
import Modal from "../../../ui/Modal";
import { useForm } from "react-hook-form";
import TextField from "../../../ui/TextField";
import useUpdateUser from "../../authentication/useUpdateUser";
import toast from "react-hot-toast";
import useUser from "../../authentication/useUser";
import EmptyAddress from "./EmptyAddress";
import Loading from "../../../ui/Loading";
import FullAddress from "./FullAddress";

function AddressDashboard({ user }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { isUpdating, updateUser } = useUpdateUser();

  const onCkickSubmitAddress = (data) => {
    updateUser(data, {
      onSuccess: () => {
        toast.success("آدرس شما با موفقیت بروزرسانی شد");
        setOpen(false)
      },
    });
  };

  return (
    <div className="flex flex-col items-center gap-5 border border-secondery-500 rounded-lg p-5">
      <button
        onClick={() => navigate(-1)}
        className="md:hidden flex justify-start w-full">
        <FaArrowRight />
      </button>
      <p className="flex justify-start w-full font-bold text-lg">آدرس ها </p>
      <span className="w-full block h-0.5 bg-secondery-500 rounded-full"></span>

      {user.address == null ? (
        <EmptyAddress
          setOpen={setOpen}
          open={open}
          onCkickSubmitAddress={onCkickSubmitAddress}
        />
      ) : (
        <FullAddress
          user={user}
          setOpen={setOpen}
          open={open}
          onCkickSubmitAddress={onCkickSubmitAddress}
        />
      )}
    </div>
  );
}

export default AddressDashboard;
