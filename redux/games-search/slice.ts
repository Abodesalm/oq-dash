import { createSlice } from "@reduxjs/toolkit";
import { queries } from "@/types/states";

export const queriesSlice = createSlice({
  initialState: <queries>{
    search: undefined,
    page: 1,
    tags: undefined,
    year: undefined,
    platforms: undefined,
    price: undefined,
    metacritic: undefined,
    sort: undefined,
  },
  name: "queriesSlice",
  reducers: {
    searching: (state, { payload }) => {
      state.page = 1;
      state.search = payload;
    },

    pre_page: (state) => {
      if (state.page === 1) {
        return state;
      } else {
        state.page = state.page - 1;
      }
    },
    next_page: (state, { payload }) => {
      if (payload < 10) {
        return state;
      } else {
        state.page = state.page + 1;
      }
    },

    add_tag: (state, { payload }) => {
      state.page = 1;
      if (state.tags === undefined) {
        state.tags = [payload];
      } else {
        state.tags = state.tags.concat(payload);
      }
    },
    del_tag: (state, { payload }) => {
      state.page = 1;
      if (state.tags?.length === 1) {
        state.tags = undefined;
      } else {
        state.tags = state.tags?.filter((el) => {
          return el !== payload;
        });
      }
    },

    add_platform: (state, { payload }) => {
      state.page = 1;
      if (state.platforms === undefined) {
        state.platforms = [payload];
      } else {
        state.platforms = state.platforms.concat(payload);
      }
    },
    del_platform: (state, { payload }) => {
      state.page = 1;
      if (state.platforms?.length === 1) {
        state.platforms = undefined;
      } else {
        state.platforms = state.platforms?.filter((el) => {
          return el !== payload;
        });
      }
    },

    set_year: (state, { payload }) => {
      state.page = 1;
      if (payload === "all") {
        state.year = undefined;
      } else {
        state.year = payload;
      }
    },
    set_price: (state, { payload }) => {
      state.page = 1;
      state.price = payload;
    },
    set_metac: (state, { payload }) => {
      state.page = 1;
      if (payload === "all") {
        state.metacritic = undefined;
      } else {
        state.metacritic = payload;
      }
    },
    set_sort: (state, { payload }) => {
      state.page = 1;
      if (payload === "all") {
        state.sort = undefined;
      } else {
        state.sort = payload;
      }
    },

    reset: (state) => {
      state.page = 1;
      state.tags = undefined;
      state.year = undefined;
      state.platforms = undefined;
      state.price = undefined;
      state.metacritic = undefined;
    },
  },
});

export const {
  searching,
  pre_page,
  next_page,
  add_tag,
  del_tag,
  add_platform,
  del_platform,
  set_year,
  set_price,
  set_metac,
  set_sort,
  reset,
} = queriesSlice.actions;
export default queriesSlice.reducer;

//  recruitment@gopaderd.org
