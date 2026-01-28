import { streamText } from 'ai'
import { openrouter } from './ai'

const aiServices = {
  async generateRecipe(prompt: string) {
    const result = streamText({
      model: openrouter('liquid/lfm-2.5-1.2b-thinking:free'),
      prompt,
      system: 'Eres un bartender con experencia que solo responde de como hacer bebidas pero que es muy amable',
      temperature: 1
    })

    return result.textStream
  }
}

export default aiServices
