import Link from "next/link";
import Icon from "../layout/Icon";
import { getTranslations } from "next-intl/server";

async function BtnLink({ url, title }) {
  const t_links = await getTranslations("links");
  return (
    <Link
      href={url}
      className={`w-[160px] h-[70px] bg-light dark:bg-middark drop-shadow-md rounded-md flex flex-col justify-center transition-colors ps-2 hover:bg-light/90 hover:dark:bg-darker/80 hover:text-accent`}
      key={url}
    >
      <Icon i={title} className="text-[24px]" />
      <p className="capitalize text-size-5 mt-1">{t_links(title)}</p>
    </Link>
  );
}

export default BtnLink;
