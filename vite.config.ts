
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
    resolve: {
      alias: [{find: '@', replacement: '/src'}]
    },
  }

  if (command !== 'serve') {
    config.base = '/Onepiecewiki/'
  }

  return config
})