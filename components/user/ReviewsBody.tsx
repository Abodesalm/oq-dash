/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import UserReview from "./UserReview";
import { useEffect, useState } from "react";
import { getUserReviews } from "@/services/users";
import coloring from "@/utils/coloring";
import Link from "next/link";

function ReviewsBody({ id, searching, form }) {
  const [data, setData] = useState<any>();

  const str_query = () => {
    let search = searching && `search=${searching}`;
    let others = `limit=300`;
    let all = [others, search]
      .filter((el) => {
        return el !== undefined && el !== null && el !== "";
      })
      .join("&");

    return all;
  };
  useEffect(() => {
    async function getData() {
      let reviews = await getUserReviews(id, str_query());
      setData(reviews.data.data);
    }
    getData();
  }, [searching]);

  return <>{form ? <TableForm data={data} /> : <FirstForm data={data} />}</>;
}

const FirstForm = ({ data }) => {
  return (
    <section className="w-full min-h-[50vh] flex flex-row flex-wrap justify-between md:justify-center gap-y-4">
      {data?.map((el) => {
        return (
          <UserReview
            name={el.gameId.name}
            cover={el.gameId.cover}
            rates={el.rates}
            id={el.id}
            username={el.userId.username}
            key={el.id}
          />
        );
      })}
    </section>
  );
};

const TableForm = ({ data }) => {
  return (
    <section className="w-full h-fit min-h-[50vh]">
      <table className="w-full text-center normal-table" id="table">
        <thead>
          <tr>
            <th>name</th>
            <th className="text-size-6">general</th>
            <th className="text-size-6">story</th>
            <th className="text-size-6">beauty</th>
            <th className="text-size-6">gameplay</th>
            <th>details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => {
            return (
              <tr key={el?.gameId?.name}>
                <td className="text-size-6">{el?.gameId?.name}</td>
                <td
                  className={` text-size-5 font-medium rate-${coloring(
                    el?.rates?.general
                  )}`}
                >
                  {el?.rates?.general}
                </td>
                <td
                  className={` text-size-5 font-medium rate-${coloring(
                    el?.rates?.story
                  )}`}
                >
                  {el?.rates?.story}
                </td>
                <td
                  className={` text-size-5 font-medium rate-${coloring(
                    el?.rates?.beauty
                  )}`}
                >
                  {el?.rates?.beauty}
                </td>
                <td
                  className={` text-size-5 font-medium rate-${coloring(
                    el?.rates?.gameplay
                  )}`}
                >
                  {el?.rates?.gameplay}
                </td>

                <td>
                  <Link
                    href={`/users/${el?.userId?.username}/${el?.id}`}
                    className="w-full text-size-6 text-accent underline decoration-accent"
                  >
                    details
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default ReviewsBody;
