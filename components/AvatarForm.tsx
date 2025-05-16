"use client";

import { avatars } from "@/public/data";
import Avatar from "./layout/Avatar";

export default function AvatarForm({ state, setState, className = "" }) {
  return (
    <div
      className={`w-full flex flex-row flex-wrap justify-between items-start gap-y-2 gap-x-4 ${className}`}
    >
      {avatars.map((el) => {
        return (
          <div
            className={`bg-dark w-[60px] h-[60px] md:w-[40px] md:h-[40px] rounded-full cursor-pointer ${
              state === el ? "border-4 border-prime" : ""
            }`}
            onClick={() => setState(el)}
            key={el}
          >
            <Avatar avatar={el} className="w-[60px] md:w-[40px]" />
          </div>
        );
      })}
    </div>
  );
}
