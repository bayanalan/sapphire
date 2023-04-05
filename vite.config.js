import { sveltekit } from '@sveltejs/kit/vite';

const config = {
  plugins: [sveltekit()],
  server: {
    hmr: false
  }
};

export default config;