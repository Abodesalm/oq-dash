"use client";

import { covers_api } from "@/public/data";
import { wishlisting } from "@/services/games";
import Image from "next/image";
import { toast } from "react-toastify";
import Icon from "./layout/Icon";
import Link from "next/link";

export default function WishlistItem({ name, slug, cover, id }) {
  const handle = async () => {
    const patch = await wishlisting(id);
    if (patch.status === "success") {
      toast.success("removed from wishlist!");
    } else {
      toast.error(patch.message);
    }
  };

  return (
    <div className="w-full flex flex-row bg-light dark:bg-middark p-2 rounded-sm drop-shadow-sm">
      <Image
        src={`${covers_api}/${cover}`}
        alt="cover image"
        width={120}
        height={180}
        className="h-auto md:w-[80px]"
      />
      <h2 className="capitalize text-size-4 ms-4 md:ms-2">{name}</h2>
      <Link
        href={`/games/${slug}`}
        className="w-fit h-fit absolute end-[30px] top-[30px] md:end-[10px] md:top-[10px] text-[25px] md:text-[20px] p-2 rounded-md hover:bg-prime/30 text-prime"
      >
        <Icon i={`toLink`} />
      </Link>
      <button
        className="w-fit h-fit absolute end-[30px] bottom-[30px] md:end-[10px] md:bottom-[10px] p-2 rounded-md text-danger hover:bg-danger/30 text-[25px] md:text-[20px]"
        onClick={handle}
      >
        <Icon i={`remove`} />
      </button>
    </div>
  );
}
