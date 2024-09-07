import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FavoriteItem {
  name: string;
  location: string;
  service:string
}

export interface FavoriteState {
  favoriteItems: FavoriteItem[];
}

const initialState: FavoriteState = {
  favoriteItems: [],
};

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<FavoriteItem>) => {
      const itemExists = state.favoriteItems.some(
        (item) => item.name === action.payload.name
      );
      if (!itemExists) {
        state.favoriteItems.push(action.payload);
      }
    },
    remove: (state, action: PayloadAction<string>) => {
      state.favoriteItems = state.favoriteItems.filter(
        (item) => item.name !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = favoriteSlice.actions;
// Selector to access the favorite items
export const selectFavorites = (state: { favorites: FavoriteState }) =>
  state.favorites.favoriteItems;

export default favoriteSlice.reducer;
