import React from "react";
import { useNavigate } from "react-router-dom";
import InformationSection from "../../ui/InformationSection";
import { MdOutlinePayment } from "react-icons/md";

function PaymentSection({ products, user }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 lg:flex-row  w-full">
      <div className="flex gap-4 flex-col w-full justify-between"></div>
      <InformationSection products={products} shippingPrice="29000">
        <button
          onClick={() => navigate("/payment")}
          className="flex h-12 gap-2 w-full justify-center items-center text-secondery-50 bg-primary p-2 rounded-md">
          <span>
            <MdOutlinePayment className="w-6 h-6" />
          </span>
          <p>تأیید و پرداخت</p>
        </button>
      </InformationSection>
    </div>
  );
}

export default PaymentSection;