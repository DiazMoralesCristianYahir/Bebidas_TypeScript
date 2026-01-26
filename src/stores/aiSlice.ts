import type { StateCreator } from "zustand";
import aiServices from "../lib/aiServices";


    export type AISlice = {
     recipe: string
     generateRecipe: (prompt: string) => Promise<void>
}
   export const createAISlice: StateCreator<AISlice, [], [], AISlice> = (set) => ({
    recipe: '',
    generateRecipe: async (prompt) => {
      const data = await aiServices.generateRecipe(prompt)

      for await (const textPart of data) {
        set((state) => ({
          recipe: state.recipe + textPart
        }))
      }
    }
  })

