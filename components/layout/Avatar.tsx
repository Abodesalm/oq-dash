import { avatar_api } from "@/public/data";
import Image from "next/image";

export default function Avatar({ avatar, className = "" }) {
  return (
    <Image
      src={`${avatar_api}/${avatar}`}
      alt="avatar"
      width={50}
      height={50}
      className={` h-auto rounded-full ${className}`}
    />
  );
}
