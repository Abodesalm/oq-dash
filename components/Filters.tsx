"use client";

import { useEffect, useState } from "react";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";

export default function Filters({
  name,
  add,
  del,
  data,
  state = false,
  dispatch,
}) {
  const [selected, setSelected] = useState<boolean>();

  useEffect(() => {
    if (data?.includes(name)) {
      setSelected(true);
    }
  }, [data]);

  useEffect(() => {
    if (state) {
      if (selected) add(name);
      else if (!selected) del(name);
    } else if (!state) {
      if (selected) dispatch(add(name));
      else if (!selected) dispatch(del(name));
    }
  }, [selected]);

  return (
    <div
      onClick={() => {
        setSelected(!selected);
      }}
      className={`cursor-pointer flex flex-row items-center gap-1 select-none sm:text-[10px]`}
    >
      {selected ? (
        <GrCheckboxSelected className="text-accent mt-[0.1rem] sm:text-[10px]" />
      ) : (
        <GrCheckbox className="mt-[0.1rem] sm:text-[10px]" />
      )}
      <p>{name}</p>
    </div>
  );
}
