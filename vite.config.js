import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ironpatriot06.github.io/',  // <-- THIS is important
})
