import { getAuth } from "@/services/auth";
import Link from "next/link";
import Langlist from "../layout/Langlist";
import Avatar from "../layout/Avatar";

async function ProfileSection() {
  const session = await getAuth();
  return (
    <section className="flex flex-col items-start gap-2 mt-[1rem_!important]">
      {session.isLoged ? (
        <>
          <Link
            href={`/users/${session.username}`}
            className="w-full flex flex-row pb-2 items-center gap-4 drop-shadow-sm btn-ui-silver"
          >
            <Avatar avatar={session.avatar} className="w-[75px]" />
            <h2 className="font-medium text-size-4">{session.username}</h2>
          </Link>
        </>
      ) : (
        <Link href={`/auth/login`} className=""></Link>
      )}
      <Langlist />
    </section>
  );
}

export default ProfileSection;
