import { streamText } from 'ai'
import { openrouter } from './ai'

const aiServices = {
  async generateRecipe(prompt: string) {
    const result = streamText({
      model: openrouter('liquid/lfm-2.5-1.2b-thinking:free'),
      prompt
    })

    return result.textStream
  }
}

export default aiServices
