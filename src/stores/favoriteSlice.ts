import type { StateCreator } from "zustand";
import type { Recipe } from "../types";
import { createRecipesSlice, type RecipesSliceType } from "./recipiceStore";
import { createNotificationSlice, type NotificationSliceType } from "./notificationSlice";

export type FavoriteSliceType = {
  favorites: Recipe[];
  handleClickFavorite: (recipie: Recipe) => void;
  favoriteExist: (id :Recipe['idDrink']) => boolean;
  loadFromStorage: () => void

};

export const createFavoriteSlice: StateCreator<FavoriteSliceType & RecipesSliceType & NotificationSliceType, [], [], FavoriteSliceType> = (set,get,api) => ({
  favorites: [],
  handleClickFavorite: (recipie) => {
    if (get().favoriteExist(recipie.idDrink)) {
      set((state) => ({
        favorites: state.favorites.filter(favorite => favorite.idDrink !== recipie.idDrink)
      }))
      createNotificationSlice(set,get, api).showNotification({
         text: 'Se ha eliminado de favoritos',
         error: false })
      
    } else {
      console.log("no existe");

      set((state) => ({
        favorites: [...state.favorites, recipie],
      }))

      createNotificationSlice(set,get, api).showNotification({
         text: 'Se ha añadio a favoritos',
         error: false })
      
      
    }
    createRecipesSlice( set,get,api).closeModal()
    localStorage.setItem('favorites', JSON.stringify(get().favorites))
  },
    favoriteExist: (id) => {
      return get().favorites.some(favorite => favorite.idDrink === id)
    },
    loadFromStorage: () => {
      const storedFavorites = localStorage.getItem('favorites')
      if(storedFavorites){
        set({
          favorites: JSON.parse(storedFavorites)
        })
      }
    }

});
