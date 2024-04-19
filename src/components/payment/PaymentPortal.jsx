import React, { useState } from "react";
import BankOptions from "./BankOptions";
import CachOption from "./CachOption";

function PaymentPortal({ paymentOption }) {
  return paymentOption == "bank" ? <BankOptions /> : <CachOption />;
}

export default PaymentPortal;
