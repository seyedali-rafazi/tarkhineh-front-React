import React, { ReactNode } from "react";

interface BranchBarProps {
  children: ReactNode;
}

function BranchBar({ children }: BranchBarProps) {
  return (
    <div className="w-full h-14 bg-rose-100 px-5 flex items-center">
      {children}
    </div>
  );
}

export default BranchBar;
