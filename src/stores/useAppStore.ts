import { create } from 'zustand'
import {devtools} from 'zustand/middleware'
import { createRecipesSlice, type RecipesSliceType } from './recipiceStore'

export const useAppStore = create<RecipesSliceType>()(devtools( (...a) => ({
    ...createRecipesSlice(...a)
})))