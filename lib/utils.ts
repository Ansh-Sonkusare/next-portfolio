import { User } from "@/app";
import clsx, { ClassValue } from "clsx";
import { cache } from "react";
import { twMerge } from "tailwind-merge";


export const cn = (...cls:ClassValue[]) => {
return twMerge(clsx(cls))
}

