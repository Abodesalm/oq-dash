import { covers_api } from "@/public/data";
import Image from "next/image";
import Link from "next/link";
import coloring from "@/utils/coloring";

function UserReview({ name, cover, rates, id, username }) {
  return (
    <div className="flex flex-row w-[200px] h-fit bg-light dark:bg-middark rounded-md">
      <div className="flex flex-col items-center justify-evenly ms-2">
        <Image
          src={`${covers_api}/${cover}`}
          alt={`${name} review`}
          width={120}
          height={180}
          className="rounded-md"
        />
        <p className="text-size-6 capitalize">{name}</p>
      </div>
      <div className="w-full flex flex-col items-start justify-between ms-4 py-2">
        <div className="w-full flex flex-col gap-2">
          <Ratings dot={rates.story} title={`Story`} />
          <Ratings dot={rates.beauty} title={`Beauty`} />
          <Ratings dot={rates.gameplay} title={`Gameplay`} />
          <Ratings dot={rates.general} title={`General`} />
        </div>
        <Link
          href={`/users/${username}/${id}`}
          className="w-full capitalize self-center text-accent underline decoration-accent"
        >
          More Details
        </Link>
      </div>
    </div>
  );
}

const Rate = ({ rating }) => {
  return (
    <p className={`rate-${coloring(rating)}  font-medium me-2`}>{rating}</p>
  );
};

const Ratings = ({ dot, title }) => {
  return (
    <div className="w-full flex flex-row justify-between border-b border-bglight dark:border-darker">
      <p className="capitalize text-size-6">{title}</p>
      <Rate rating={dot} />
    </div>
  );
};

export default UserReview;
