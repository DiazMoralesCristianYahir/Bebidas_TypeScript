import type { StateCreator } from "zustand";
import type { Recipe } from "../types";
import { createRecipesSlice, type RecipesSliceType } from "./recipiceStore";

export type FavoriteSliceType = {
  favorites: Recipe[];
  handleClickFavorite: (recipie: Recipe) => void;
  favoriteExist: (id :Recipe['idDrink']) => boolean;
};

export const createFavoriteSlice: StateCreator<FavoriteSliceType & RecipesSliceType, [], [], FavoriteSliceType> = (set,get,api) => ({
  favorites: [],
  handleClickFavorite: (recipie) => {
    if (get().favoriteExist(recipie.idDrink)) {
      set((state) => ({
        favorites: state.favorites.filter(favorite => favorite.idDrink !== recipie.idDrink)
      }))
      
    } else {
      console.log("no existe");

      set((state) => ({
        favorites: [...state.favorites, recipie],
      }));
    }
    createRecipesSlice( set,get,api).closeModal()
  },
    favoriteExist: (id) => {
      return get().favorites.some(favorite => favorite.idDrink === id)
      
    }

});
