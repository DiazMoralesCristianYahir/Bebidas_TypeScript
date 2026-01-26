import { create } from 'zustand'
import {devtools} from 'zustand/middleware'
import { createRecipesSlice, type RecipesSliceType } from './recipiceStore'
import  { type FavoriteSliceType,  createFavoriteSlice } from './favoriteSlice'
import { type NotificationSliceType, createNotificationSlice } from './notificationSlice'
import { type AISlice, createAISlice } from './aiSlice'

export const useAppStore = create<RecipesSliceType & FavoriteSliceType & NotificationSliceType & AISlice> ()(devtools( (...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoriteSlice(...a),
    ...createNotificationSlice(...a),
    ...createAISlice(...a),

})))
