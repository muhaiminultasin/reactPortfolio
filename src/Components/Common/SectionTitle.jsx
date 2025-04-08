import React from "react";
import cn from "../../../lib/cn/Cn";

const SectionTitle = ({title,subTitle,titleClass,subTitleClass,className}) => {
  return (
    <div className={cn("flex flex-col", className)}>
      <p className={cn("text-[14px] text-primary", subTitleClass)}>
        {subTitle}
      </p>
      <h1 className={cn("text-[40px] text-secondary font-[600]", titleClass)}>
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;
