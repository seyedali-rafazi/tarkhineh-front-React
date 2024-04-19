import React from "react";
import { useNavigate } from "react-router-dom";
import InformationSection from "../../ui/InformationSection";
import { TiTick } from "react-icons/ti";
import ChooseDelivery from "./ChooseDelivery";
import AddressDashboard from "../../feachers/user/addres-section/AddressDashboard";
import UserDescription from "./UserDescription";

function ShippingSection({ products, user }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 lg:flex-row  w-full">
      <div className="flex gap-4 flex-col w-full justify-between">
        <ChooseDelivery />
        <AddressDashboard user={user} />
        <UserDescription />
      </div>
      <InformationSection products={products} shippingPrice="0">
        <button
          onClick={() => navigate("/payment" , { replace: true })}
          className="flex h-12 w-full justify-center items-center text-secondery-50 bg-primary p-2 rounded-md">
          <span>
            <TiTick className="w-6 h-6" />
          </span>
          <p className="p-2"> ثبت سفارش</p>
        </button>
      </InformationSection>
    </div>
  );
}

export default ShippingSection;
