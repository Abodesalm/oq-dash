let space = "local";
let API_URL;
if (space === "local") {
  API_URL = `http://127.0.0.1:8000`;
} else if (space === "host") {
  API_URL = `https://zed-games-api.onrender.com`;
}

const api = {
  main_api: `${API_URL}/api`,
  games_api: `${API_URL}/api/games`,
  covers_api: `${API_URL}/img/games`,
  avatar_api: `${API_URL}/img/avatars`,
  assets_api: `${API_URL}/img/assets`,
  users_api: `${API_URL}/api/users`,
  signup_api: `${API_URL}/api/users/signup`,
  login_api: `${API_URL}/api/users/login`,
  users_get_api: `${API_URL}/api/users/get`,
};

export const years = [
  2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013,
  2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000,
  1999, 1998, 1997, 1996,
];

export const allGenres = [
  "action",
  "FPS",
  "shooter",
  "open world",
  "battle royal",
  "stealth",
  "rpg",
  "indie",
  "platform",
  "survival",
  "horror",
  "adventure",
  "simulation",
  "puzzle",
  "multiplayer",
  "singleplayer",
  "strategy",
  "sports",
  "racing",
  "fighting",
  "cards",
  "hack & slash",
  "family-friendly",
  "sandbox",
  "metroidvania",
  "rogue-like",
  "souls-like",
  "party",
  "retro",
  "comedy",
  "co-op",
  "pixel-art",
  "historical",
  "tycoon",
  "turn-based",
];

export const platforms = [
  "PC",
  "PS1",
  "PS2",
  "PS3",
  "PS4",
  "PS5",
  "XBOX 1",
  "XBOX 360",
  "XBOX SS",
  "XBOX SX",
  "mobile",
  "switch",
  "wii",
];

export const searchs = [
  {
    title: `series`,
    url: `/research?s=series`,
  },
  { title: `developer`, url: `/research?s=dev` },
  {
    title: `publisher`,
    url: `/research?s=pub`,
  },
  { title: `users`, url: `/users` },
  { title: `games`, url: `/games` },
];

export const sections = [
  { title: `golden`, url: `/golden` },
  { title: `about`, url: `/about` },
];

export const avatars = [
  "default.jpg",
  "assassin.jpg",
  "chicken.jpg",
  "cj.jpg",
  "creeper.jpg",
  "cyber.jpg",
  "dead-cells.jpg",
  "gordon.jpg",
  "hl.jpg",
  "katana.jpg",
  "metro.jpg",
  "rider.jpg",
  "sheepy-1.jpg",
  "sheepy-2.jpg",
  "stray.jpg",
];

export const {
  main_api,
  games_api,
  covers_api,
  users_api,
  signup_api,
  login_api,
  users_get_api,
  avatar_api,
  assets_api,
} = api;
