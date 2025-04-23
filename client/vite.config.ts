import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

console.log("PROCESS: ", process.env.VITE_BASE_URL)
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
