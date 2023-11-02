import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
   resolve: {
      alias: {
        src: '/src'
      }
   },
  css: {
    preprocessorOptions: {
      sass: {
        // Додайте будь-які налаштування Sass тут, наприклад, indentedSyntax: true для .sass файлів.
      },
    },
  },
});


