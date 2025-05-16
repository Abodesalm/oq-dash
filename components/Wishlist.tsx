"use client";

import { wishlisting } from "@/services/games";
import { toast } from "react-toastify";

const Wishlist = ({ wishlist, id, className = "" }) => {
  const check = wishlist?.includes(id);
  const handle = async () => {
    const patch = await wishlisting(id);
    if (patch.status === "success") {
      toast.success("Added to wishlist!");
    } else {
      toast.error(patch.message);
    }
  };
  if (check) {
    return <div className={`btn-prime-outline  ${className}`}>in wishlist</div>;
  } else {
    return (
      <button className={`btn-accent  ${className}`} onClick={handle}>
        add to wishlist
      </button>
    );
  }
};

export default Wishlist;
