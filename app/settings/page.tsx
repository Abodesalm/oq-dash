import ProfileSection from "@/components/settings/ProfileSection";
import { Suspense } from "react";
import { searchs, sections } from "@/public/data";
import Loader from "@/components/layout/Loader";
import { getAuth, logout } from "@/services/auth";

export default async function Settings() {
  const session = await getAuth();
  return <div className="pad w-full"></div>;
}
