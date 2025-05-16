"use client";
import Link from "next/link";
import Avatar from "./Avatar";

export default function NavSign({ username, isLoged, avatar }) {
  return (
    <>
      {isLoged ? (
        <Link
          href={`/users/${username}`}
          className="w-[30px] h-[30px] rounded-full bg-dark"
        >
          <Avatar avatar={avatar} className="w-[30px]" />
        </Link>
      ) : (
        <Link href={`/auth/login`} className="btn-ui underline">
          login
        </Link>
      )}
    </>
  );
}
