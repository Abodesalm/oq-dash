"use client";
import { covers_api } from "@/public/data";
import Image from "next/image";
import Link from "next/link";
import Genre from "./Genre";
import { usePathname } from "next/navigation";

export default function Card({ name, slug, cover, tags }) {
  const path = usePathname();
  return (
    <Link
      href={`/games/${slug}`}
      className={
        "w-[180px] min-h-[300px] flex flex-col justify-between items-center gap-1 text-center border-2 border-accent rounded-[10px] p-1 text-dark dark:text-white text-[12px] sm:w-[150px] sm:min-h-[250px] capitalize         "
      }
    >
      <Image
        src={`${covers_api}/${cover}`}
        alt={`${name} cover image`}
        width={170}
        height={245}
        className={`w-[170px] h-auto sm:w-[140px] sm:h-auto bg-gray-500 rounded-[6px]`}
      ></Image>
      <p className="font-normal">{name}</p>
      <div className="w-full flex flex-row justify-evenly">
        {tags.slice(0, 2).map((genre) => {
          return <Genre title={genre} key={genre} clas={`flex-center`} />;
        })}
      </div>
    </Link>
  );
}
