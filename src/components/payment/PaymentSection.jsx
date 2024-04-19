import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InformationSection from "../../ui/InformationSection";
import { MdOutlinePayment } from "react-icons/md";
import OffPaymant from "./OffPaymant";
import ChooseBank from "./ChooseBank";
import PaymentPortal from "./PaymentPortal";
import { TiTick } from "react-icons/ti";
import useCreatePayment from "../../feachers/payment/useCreatePayment";

function PaymentSection({ products, user }) {
  const [paymentOption, setPaymentOption] = useState("bank");
  const navigate = useNavigate();
  const { createPayment, isPending } = useCreatePayment();
  const handelPaymentCick = () => {
    createPayment();
    navigate("/successful-payment", { replace: true });
  };
  return (
    <div className="flex flex-col gap-4 lg:flex-row  w-full">
      <div className="flex gap-8 flex-col w-full ">
        <OffPaymant />
        <ChooseBank
          paymentOption={paymentOption}
          setPaymentOption={setPaymentOption}
        />
        <PaymentPortal paymentOption={paymentOption} />
      </div>
      <InformationSection products={products} shippingPrice="29000">
        <button
          onClick={() => handelPaymentCick()}
          className="flex h-12 w-full justify-center items-center text-secondery-50 bg-primary p-2 rounded-md"
        >
          {paymentOption == "bank" ? (
            <div className="flex gap-2">
              <span>
                <MdOutlinePayment className="w-6 h-6" />
              </span>
              <p>تأیید و پرداخت</p>
            </div>
          ) : (
            <div className="flex gap-2">
              <span>
                <TiTick className="w-6 h-6" />
              </span>
              <p>ثبت سفارش</p>
            </div>
          )}
        </button>
      </InformationSection>
    </div>
  );
}

export default PaymentSection;
