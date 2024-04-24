import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import useUpdateUser from "../../authentication/useUpdateUser";
import toast from "react-hot-toast";
import EmptyAddress from "./EmptyAddress";
import FullAddress from "./FullAddress";
import useUser from "../../authentication/useUser";
import PanelSceleton from "../../../ui/PanelSceleton";

function AddressDashboard() {
  const { isLoading, user } = useUser();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { isUpdating, updateUser } = useUpdateUser();


  const onCkickSubmitAddress = (data) => {
    updateUser(data, {
      onSuccess: () => {
        toast.success("آدرس شما با موفقیت بروزرسانی شد");
        setOpen(false);
      },
    });
  };

  return isLoading ? (
    <PanelSceleton />
  ) : (
    <div className="flex flex-col items-center gap-5 border border-secondery-500 rounded-lg p-5">
      <button
        onClick={() => navigate(-1)}
        className="lg:hidden flex justify-start w-full"
      >
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
