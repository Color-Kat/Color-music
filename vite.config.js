import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import * as path from "path";

export default defineConfig({
  build: {
    outDir: path.join(__dirname, "public"),
  },
  base: './',
  plugins: [
    react({}),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@assets': path.resolve(__dirname, './src/assets/'),
      '@pages': path.resolve(__dirname, './src/pages/'),
      '@modules': path.resolve(__dirname, './src/modules/'),
      '@components': path.resolve(__dirname, './src/components/'),
      '@UI': path.resolve(__dirname, './src/UI/'),
      '@hooks': path.resolve(__dirname, './src/hooks/'),
      '@utils': path.resolve(__dirname, './src/utils/')
    },
    extensions: ['.js', '.ts', '.tsx', '.jsx'],
  },
});