import React from "react";
import Modal from "./Modal";
import useLogout from "../feachers/authentication/useLogout";
import { LoadingBars } from "./Loading";

function Exist({ open, onClose }) {
  const { logout, isPending } = useLogout();

  return (
    <Modal logo=" خروج" open={open} onClose={onClose}>
      <div className="flex flex-col w-full justify-center items-center gap-8 mt-5">
        <p>آیا میخواهید خارج شوید؟</p>
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="bg-primary font-bold  min-w-24 px-3 sm:px-16 py-2 text-secondery-50 rounded-lg"
          >
            لغو
          </button>
          {isPending ? (
            <button className="bg-red-100 font-bold min-w-24 px-3 sm:px-16 py-2 text-secondery-50 rounded-lg">
              <LoadingBars width="24" />
            </button>
          ) : (
            <button
              onClick={logout}
              className="bg-red-500 font-bold px-3 min-w-24 sm:px-16 py-2 text-secondery-50 rounded-lg"
            >
              خروج
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
}

export default Exist;
