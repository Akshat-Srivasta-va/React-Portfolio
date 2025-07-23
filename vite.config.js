import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),  tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "./src")    
    }
  }
})

//  Explanation ->
//   resolve: -> This tells Vite: “I want to customize how module paths are resolved.”
//   alias: ->  Here you define shortcut names for folders. These are custom aliases for paths.
//  '@' ->  This is your shortcut. You can use @ in imports instead of long relative paths.
// path.resolve() joins the path parts into an absolute path.
// dirname is the current directory (where vite.config.js lives).
// "./src" is the src folder, relative to vite.config.js


