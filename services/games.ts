"use server";

import { games_api } from "@/public/data";
import { getAuth } from "./auth";

export const getGames = async (query = "") => {
  const games = await fetch(`${games_api}?${query}`, { cache: "no-store" })
    .then((data) => data.json())
    .catch((err) => console.log(`${err}`));

  return games;
};

export const getGameByName = async (name) => {
  const game = await fetch(`${games_api}?slug=${name}`, {
    cache: "no-cache",
  })
    .then((data) => data.json())
    .then((data) => data.data.data[0])
    .catch((err) => console.log(err));

  return game;
};

export const getGameOfTheDay = async () => {
  const game = await fetch(`${games_api}/game-of-the-day`, {
    next: { revalidate: 60 * 24 },
  })
    .then((data) => data.json())
    .then((data) => data.data.data)
    .catch((err) => console.log(err));

  return game;
};

export const getGamesCount = async () => {
  const game = await fetch(`${games_api}/games-count`, { cache: "no-store" })
    .then((data) => data.json())
    .then((data) => data.data)
    .catch((err) => console.log(err));

  return game;
};

export const getGameReviews = async (gameId, queries) => {
  const reviews = await fetch(`${games_api}/${gameId}/reviews?${queries}`)
    .then((data) => data.json())
    .catch((err) => console.log(err));
  return reviews;
};

export const addReview = async (
  prevState: { error: undefined | string },
  formData: FormData
) => {
  const { token } = await getAuth();
  const story = formData.get("story");
  const beauty = formData.get("beauty");
  const gameplay = formData.get("gameplay");
  const general = formData.get("general");
  const shortText = formData.get("shortText") as string;
  const storyText = formData.get("storyText") as string;
  const beautyText = formData.get("beautyText") as string;
  const gameplayText = formData.get("gameplayText") as string;
  const generalText = formData.get("generalText") as string;
  const gameId = formData.get("gameId") as string;

  const posting = await fetch(`${games_api}/${gameId}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      rates: {
        story,
        beauty,
        gameplay,
        general,
      },
      texts: {
        short: shortText,
        general: generalText,
        story: storyText,
        beauty: beautyText,
        gameplay: gameplayText,
      },
    }),
  })
    .then((data) => data.json())
    .catch((err) => {
      console.log(err);
    });
  if (posting.status === "success") {
    return "success";
  } else {
    return posting.message;
  }
};

export const wishlisting = async (gameId) => {
  const session = await getAuth();
  const patch = await fetch(`${games_api}/${gameId}/wishlist`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${session.token}`,
    },
  })
    .then((data) => data.json())
    .catch((err) => console.log(err));

  session.wishlist = patch?.data?.user?.wishlist;
  await session.save();
  return patch;
};

export const getGoldenGames = async () => {
  const games = await fetch(`${games_api}/random-golden`, {
    next: { revalidate: 5 },
  })
    .then((data) => data.json())
    .catch((err) => console.log(`${err}`));

  return games;
};
