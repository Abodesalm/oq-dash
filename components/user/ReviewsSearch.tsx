"use client";

import Link from "next/link";
import Icon from "../layout/Icon";
import { usePathname } from "next/navigation";

function ReviewsSearch({ setForm, form, setSearch, check }) {
  const path = usePathname();
  return (
    <section className="w-full flex flex-row items-center justify-center gap-12">
      <input
        type="search"
        disabled
        className="input w-1/3 md:w-2/3"
        placeholder="search...   (not working now)"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex flex-row gap-1">
        <button
          className={` w-[30px] h-[30px] flex-center rounded-md  ${
            form ? "btn-ui-radio" : "btn-ui-radio-active"
          } `}
          onClick={() => setForm(false)}
        >
          <Icon i={`normal-form`} />
        </button>
        <button
          className={` w-[30px] h-[30px] flex-center rounded-md  ${
            form ? "btn-ui-radio-active" : "btn-ui-radio"
          } `}
          onClick={() => setForm(true)}
        >
          <Icon i={`table-form`} />
        </button>
      </div>
      {check && (
        <Link className="btn-accent-outline" href={`${path}/wishlist`}>
          <p className="md:hidden">wishlist</p>
          <Icon className="hidden md:flex" i={`wishlist`} />
        </Link>
      )}
    </section>
  );
}

export default ReviewsSearch;
