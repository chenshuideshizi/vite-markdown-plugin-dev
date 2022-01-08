import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import md from './plugins/md'
import docs from './plugins/docs'
const { resolve } = require('path')

export default defineConfig({
  plugins: [
    docs(),
    md(),
    vue({
      include: [/\.vue$/, /\.md$/]
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    },
    extensions: ['.js', '.vue']
  }
})
