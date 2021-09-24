// vite.config.json
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import macrosPlugin from 'vite-plugin-babel-macros';
import envCompatible from 'vite-plugin-env-compatible';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    macrosPlugin(),
    envCompatible({
      prefix: 'REACT_APP',
    }),
  ],
  define: {
    'process.platform': JSON.stringify('win32'),
    'process.env': {},
  },
});
