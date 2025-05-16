import ProfileSection from "@/components/settings/ProfileSection";
import { Suspense } from "react";
import Asection from "@/components/settings/Asection";
import { searchs, sections } from "@/public/data";
import Loader from "@/components/layout/Loader";
import { getAuth, logout } from "@/services/auth";

export default async function Settings() {
  const session = await getAuth();
  return (
    <div className="pad w-full">
      <Suspense fallback={<Loader />}>
        <ProfileSection />

        <Asection title={`search`} theArray={searchs} />
        <Asection title={`other`} theArray={sections} />
        {session.isLoged && (
          <form action={logout}>
            <button className="btn-danger mt-8">Log out</button>
          </form>
        )}
      </Suspense>
    </div>
  );
}
