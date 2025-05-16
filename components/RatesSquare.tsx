import coloring from "@/utils/coloring";

export default function RatesSquare({ rates }) {
  return (
    <div className="flex flex-row items-center justify-evenly gap-2 w-1/2 md:w-2/3">
      <Rate title={`story`} rating={rates.story} />
      <Rate title={`beauty`} rating={rates.beauty} />
      <Rate title={`gameplay`} rating={rates.gameplay} />
      <Rate title={`general`} rating={rates.general} />
    </div>
  );
}

const Rate = ({ rating, title }) => {
  return (
    <div className="flex flex-col items-center">
      <p className={`capitalize text-size-6`}>{title}</p>
      <p className={`rate-${coloring(rating)} text-size-5 font-medium `}>
        {rating}
      </p>
    </div>
  );
};
