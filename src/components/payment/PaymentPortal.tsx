import React, { useState } from "react";
import BankOptions from "./BankOptions";
import CachOption from "./CachOption";

interface PaymentPortalProps {
  paymentOption: string;
}

function PaymentPortal({ paymentOption }: PaymentPortalProps) {
  return paymentOption == "bank" ? <BankOptions /> : <CachOption />;
}

export default PaymentPortal;
