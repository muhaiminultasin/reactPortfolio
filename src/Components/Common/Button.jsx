import React from "react";
import cn from "../../../assets/cn/Cn";
import { Button } from "@nextui-org/react";

const Buttons = ({ name, className, onClick}) => {
  return (
    <div>
      <Button onClick={onClick} className={cn(
          "px-3 py-1 bg-darkPrimary shadow-custom-dark hover:shadow-lg text-primary mt-5 rounded-sm",
          className
        )}>{name}</Button>
    </div>
  );
};

export default Buttons;
