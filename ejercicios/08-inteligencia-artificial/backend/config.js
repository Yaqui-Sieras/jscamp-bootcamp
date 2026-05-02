export const DEFAULTS = {
  LIMIT_PAGINATION: 10,
  LIMIT_OFFSET: 0,
  PORT: 1234
}

const VALID_MODELS = ['gpt-4.1', 'gpt-4.1-mini', 'gpt-4o', 'gpt-4o-mini', 'o4-mini', 'mistral/devstral-small-2']

export const CONFIG = {
  MODEL_AI: (() => {
    const model = process.env.MODEL_AI ?? 'gpt-4.1-mini'
    if (!VALID_MODELS.includes(model)) {
      console.warn(`⚠️ Modelo "${model}" no reconocido. Usando gpt-4.1-mini por defecto.`)
      return 'gpt-4.1-mini'
    }
    return model
  })()
}