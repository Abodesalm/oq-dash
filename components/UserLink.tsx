import Link from "next/link";
import Avatar from "./layout/Avatar";

export default function UserLink({ username, avatar }) {
  return (
    <Link
      href={`/users/${username}`}
      className={`flex flex-row items-center gap-2 w-fit`}
    >
      <div className="w-[25px] h-[25px] rounded-full bg-dark">
        <Avatar avatar={avatar} className="w-[25px]" />
      </div>
      <h3 className="text-size-6">{username}</h3>
    </Link>
  );
}
