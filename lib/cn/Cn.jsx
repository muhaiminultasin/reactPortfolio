import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const cn = (...classes) => {
    return twMerge(clsx(...classes))
}

export default cn;