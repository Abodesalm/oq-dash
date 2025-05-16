import { getTranslations } from "next-intl/server";
import BtnLink from "./BtnLink";

async function Asection({ theArray, title }) {
  const t_links = await getTranslations("links");
  return (
    <section className="h-fit border-t border-light dark:border-lightdark ">
      <h2 className="font-medium mt-2 text-size-4">{t_links(title)}</h2>
      <div className={`flex flex-row flex-wrap gap-6 mt-2`}>
        {theArray.map((el) => {
          return <BtnLink url={el.url} title={el.title} key={el.url} />;
        })}
      </div>
    </section>
  );
}

export default Asection;
