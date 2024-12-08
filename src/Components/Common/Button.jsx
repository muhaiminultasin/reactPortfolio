import React from "react";
import cn from "../../../assets/cn/Cn";
import { Button } from "@nextui-org/react";

const Buttons = ({ name, className }) => {
  return (
    <div>
      <Button className={cn(
          "px-3 py-1 bg-darkPrimary shadow-custom-dark hover:shadow-lg text-secondary mt-5 rounded-sm",
          className
        )}>{name}</Button>
    </div>
  );
};

export default Buttons;
