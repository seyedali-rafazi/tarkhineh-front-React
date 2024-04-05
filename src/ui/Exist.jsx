import React from "react";
import Modal from "./Modal";
import useLogout from "../feachers/authentication/useLogout";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

function Exist({ open, onClose }) {
  const { logout, isPending } = useLogout();
  const navigate = useNavigate();
  const handelClick = () => {
    logout();
    navigate("/");
  };
  return (
    <Modal logo=" خروج" open={open} onClose={onClose}>
      <div className="flex flex-col w-full justify-center items-center gap-8 mt-5">
        <p>آیا میخواهید خارج شوید؟</p>
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="bg-primary font-bold px-16 py-2 text-secondery-50 rounded-lg">
            لغو
          </button>
          {isPending ? (
            <button className="bg-red-100 font-bold px-16 py-2 text-secondery-50 rounded-lg">
              <Loading />
            </button>
          ) : (
            <button
              onClick={handelClick}
              className="bg-red-500 font-bold px-16 py-2 text-secondery-50 rounded-lg">
              خروج
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
}

export default Exist;
