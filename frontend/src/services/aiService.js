import { api } from "./api"

export const aiService = {
  chat: (message) => api.post("/ai/chat", { message }),
  suggest: (context) => api.post("/ai/suggest", context),
}
