import type { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipes } from "../services/RecipesService"
import type { Categories, Drinks, Drink, SearchFilter, Recipe } from '../types'
import type { FavoriteSliceType } from "./favoriteSlice"


export type RecipesSliceType = {
    categories: Categories
    drinks: Drinks
    selectedRecipe: Recipe
    modal: boolean
    fetchCategories: () => Promise<void>
    searchRecipies: (SearchFilter: SearchFilter) => Promise<void>
    selectRecipe: (id: Drink['idDrink']) => Promise<void>
    closeModal: () => void
}


export const createRecipesSlice : StateCreator<RecipesSliceType & FavoriteSliceType, [], [], RecipesSliceType> = (set) => ({
  categories: {
    drinks:[]
  },
  drinks: {
    drinks: []
  },
  selectedRecipe: {} as Recipe,
  modal: false,
  fetchCategories: async () => {
   const categories = await getCategories()
   set({
    categories
   })
  },
  searchRecipies: async (filters) => {
    const drinks = await getRecipes(filters)
    set({
          drinks
    })
  },
  selectRecipe: async (id) => {
    const selectedRecipe = await getRecipeById(id)
    set({
      modal:true,
      selectedRecipe
    })
  },
  closeModal: () => {
    set({
      modal: false,
      selectedRecipe: {} as Recipe
    })
  }
  
})

