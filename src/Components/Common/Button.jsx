import React from "react";
import cn from "../../../assets/cn/Cn";
import { Button } from "@nextui-org/react";

const Buttons = ({ name, className }) => {
  return (
    <div>
      <Button className={cn(
          "px-3 py-1 bg-transparent border-2 border-[#F9E79F] rounded-lg font-semibold text-[#F9E79F] mt-5",
          className
        )}>{name}</Button>
    </div>
  );
};

export default Buttons;
