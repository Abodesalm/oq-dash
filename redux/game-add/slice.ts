import { createSlice } from "@reduxjs/toolkit";
import { gameState } from "@/types/states";

export const gameSlice = createSlice({
  initialState: <gameState>{
    name: "",
    developer: undefined,
    publisher: undefined,
    series: undefined,
    release: undefined,
    trailer: undefined,
    price: undefined,
    metacritic: undefined,
    rank: undefined,
    keywords: [],
    tags: [],
    platforms: [],
    descriptions: {
      en: undefined,
      ar: undefined,
      de: undefined,
      fr: undefined,
      es: undefined,
    },
    DLCs: [],
    req: {
      min: {
        CPU: undefined,
        GPU: undefined,
        RAM: undefined,
        VRAM: undefined,
        storage: undefined,
      },
      rec: {
        CPU: undefined,
        GPU: undefined,
        RAM: undefined,
        VRAM: undefined,
        storage: undefined,
      },
    },
  },
  name: "gameSlice",
  reducers: {
    name: (state, { payload }) => {
      state.name = payload;
    },
    keywords: (state, { payload }) => {
      state.keywords = payload.split(",");
    },
    dev: (state, { payload }) => {
      if (payload === "") {
        state.developer = undefined;
      } else {
        state.developer = payload;
      }
    },
    pub: (state, { payload }) => {
      if (payload === "") {
        state.publisher = undefined;
      } else {
        state.publisher = payload;
      }
    },
    series: (state, { payload }) => {
      if (payload === "") {
        state.series = undefined;
      } else {
        state.series = payload;
      }
    },
    trailer: (state, { payload }) => {
      if (payload === "") {
        state.trailer = undefined;
      } else {
        state.trailer = payload;
      }
    },
    rank: (state, { payload }) => {
      if (payload === "") {
        state.rank = undefined;
      } else {
        state.rank = payload;
      }
    },

    price: (state, { payload }) => {
      state.price = payload;
    },
    meta: (state, { payload }) => {
      state.metacritic = payload;
    },
    release: (state, { payload }) => {
      state.release = payload;
    },

    // Descriptions
    desc_en: (state, { payload }) => {
      if (payload === "") {
        state.descriptions.en = undefined;
      } else {
        state.descriptions.en = payload;
      }
    },
    desc_ar: (state, { payload }) => {
      if (payload === "") {
        state.descriptions.ar = undefined;
      } else {
        state.descriptions.ar = payload;
      }
    },
    desc_fr: (state, { payload }) => {
      if (payload === "") {
        state.descriptions.fr = undefined;
      } else {
        state.descriptions.fr = payload;
      }
    },
    desc_de: (state, { payload }) => {
      if (payload === "") {
        state.descriptions.de = undefined;
      } else {
        state.descriptions.de = payload;
      }
    },
    desc_es: (state, { payload }) => {
      if (payload === "") {
        state.descriptions.es = undefined;
      } else {
        state.descriptions.es = payload;
      }
    },

    // Arrays
    add_tag: (state, { payload }) => {
      if (state.tags === undefined) {
        state.tags = [payload];
      } else {
        state.tags = state.tags.concat(payload);
      }
    },
    del_tag: (state, { payload }) => {
      if (state.tags?.length === 1) {
        state.tags = [];
      } else {
        state.tags = state.tags?.filter((el) => {
          return el !== payload;
        });
      }
    },
    add_platform: (state, { payload }) => {
      if (state.platforms === undefined) {
        state.platforms = [payload];
      } else {
        state.platforms = state.platforms.concat(payload);
      }
    },
    del_platform: (state, { payload }) => {
      if (state.platforms?.length === 1) {
        state.platforms = [];
      } else {
        state.platforms = state.platforms?.filter((el) => {
          return el !== payload;
        });
      }
    },
    add_dlc: (state, { payload }) => {
      if (state.DLCs === undefined || state.DLCs === null) {
        state.DLCs = [payload];
      } else {
        state.DLCs = state.DLCs.concat(payload);
      }
    },
    del_dlc: (state, { payload }) => {
      if (state.DLCs?.length === 1) {
        state.DLCs = [];
      } else {
        state.DLCs = state.DLCs?.filter((el) => {
          return el.name !== payload.name;
        });
      }
    },

    // Req
    min_cpu: (state, { payload }) => {
      if (payload === "") {
        state.req.min.CPU = undefined;
      } else {
        state.req.min.CPU = payload;
      }
    },
    min_gpu: (state, { payload }) => {
      if (payload === "") {
        state.req.min.GPU = undefined;
      } else {
        state.req.min.GPU = payload;
      }
    },
    min_ram: (state, { payload }) => {
      state.req.min.RAM = payload;
    },
    min_vram: (state, { payload }) => {
      state.req.min.VRAM = payload;
    },
    min_storage: (state, { payload }) => {
      state.req.min.storage = payload;
    },

    rec_cpu: (state, { payload }) => {
      if (payload === "") {
        state.req.rec.CPU = undefined;
      } else {
        state.req.rec.CPU = payload;
      }
    },
    rec_gpu: (state, { payload }) => {
      if (payload === "") {
        state.req.rec.GPU = undefined;
      } else {
        state.req.rec.GPU = payload;
      }
    },
    rec_ram: (state, { payload }) => {
      state.req.rec.RAM = payload;
    },
    rec_vram: (state, { payload }) => {
      state.req.rec.VRAM = payload;
    },
    rec_storage: (state, { payload }) => {
      state.req.rec.storage = payload;
    },
    set_all: (state, { payload }) => {
      state.name = payload.name;
      state.keywords = payload.keywords;
      state.developer = payload.developer;
      state.publisher = payload.publisher;
      state.trailer = payload.trailer;
      state.series = payload.series;
      state.rank = payload.rank;
      state.release = payload.release;
      state.price = payload.price;
      state.metacritic = payload.metacritic;

      state.descriptions = payload.descriptions;
      state.req = payload.req;
      state.DLCs = payload.DLCs;
    },
  },
});

export const {
  name,
  keywords,
  dev,
  pub,
  trailer,
  series,
  rank,
  release,
  price,
  meta,

  desc_en,
  desc_ar,
  desc_de,
  desc_fr,
  desc_es,

  add_tag,
  del_tag,
  add_dlc,
  del_dlc,
  add_platform,
  del_platform,

  min_cpu,
  min_gpu,
  min_ram,
  min_vram,
  min_storage,
  rec_cpu,
  rec_gpu,
  rec_ram,
  rec_vram,
  rec_storage,

  set_all,
} = gameSlice.actions;
export default gameSlice.reducer;
