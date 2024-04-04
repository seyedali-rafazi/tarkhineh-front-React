import React, { useEffect } from "react";
import Logo from "./Logo";
import { TbX } from "react-icons/tb";
import useOutsideClick from "../hooks/useOutsideClick";

function Modal({ open, children, onClose, logo }) {
  const modalref = useOutsideClick(onClose);
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  return (
    open && (
      <div className="backdrop-blur-sm fixed top-0 left-0 w-full h-screen bg-secondery-800 bg-opacity-10 z-5000">
        <div
          ref={modalref}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondery-50 rounded-lg p-4  transition-all duration-500 ease-out w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-2rem)]">
          <div className="relative flex flex-col items-center">
            <div className="flex justify-center w-full mb-4">
              <div className="font-bold">{logo}</div>
              <button onClick={onClose} className="absolute top-1 left-3">
                <TbX className="w-6 h-6" />
              </button>
            </div>
            <div className="w-full">{children}</div>
          </div>
        </div>
      </div>
    )
  );
}

export default Modal;
