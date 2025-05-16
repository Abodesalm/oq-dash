"use server";

import { users_api, users_get_api } from "@/public/data";
import { redirect } from "next/navigation";
import { getAuth } from "./auth";

export const getUsers = async (queries) => {
  const user = await fetch(`${users_get_api}?${queries}`)
    .then((data) => data.json())
    .catch((err) => console.log(err));

  return user;
};

export const getUserByName = async (username) => {
  const user = await fetch(`${users_get_api}/${username}`)
    .then((data) => data.json())
    .catch((err) => console.log(err));

  return user;
};

export const getUserReviews = async (userId, queries) => {
  const reviews = await fetch(`${users_api}/${userId}/reviews?${queries}`)
    .then((data) => data.json())
    .catch((err) => console.log(err));
  return reviews;
};

export const editInfo = async (
  prevState: { error: undefined | string },
  formData: FormData
) => {
  const session = await getAuth();

  const username = formData.get("username") as string;
  const bio = formData.get("bio") as string;
  const instagram = formData.get("instagram") as string;
  const discord = formData.get("discord") as string;
  const steam = formData.get("steam") as string;
  const avatar = formData.get("avatar") as string;
  const rawTags = formData.get("tags") as string;
  const tags = rawTags.split(",").slice(0, 3);

  const editing = await fetch(`${users_api}/updateMe`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${session.token}`,
    },
    body: JSON.stringify({
      username,
      bio,
      avatar,
      tags,
      socials: {
        instagram,
        discord,
        steam,
      },
    }),
  })
    .then((data) => data.json())
    .catch((err) => {
      console.log(err);
    });
  if (editing.status === "success") {
    let userData = await editing?.data?.user;
    session.username = userData.username;
    session.avatar = userData.avatar;
    session.tags = userData.tags;

    await session.save();
    return editing;
  } else {
    return editing.message;
  }
};
