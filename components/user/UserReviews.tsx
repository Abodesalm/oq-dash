"use client";
import { useState } from "react";
import ReviewsBody from "./ReviewsBody";
import ReviewsSearch from "./ReviewsSearch";

export default function UserReviews({ userId, check }) {
  const [search, setSearch] = useState();
  const [form, setForm] = useState();
  return (
    <>
      <ReviewsSearch
        setSearch={setSearch}
        form={form}
        setForm={setForm}
        check={check}
      />
      <ReviewsBody id={userId} searching={search} form={form} />
    </>
  );
}
