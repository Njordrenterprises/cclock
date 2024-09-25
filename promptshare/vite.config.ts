import build from '@hono/vite-build/cloudflare-pages';
import adapter from '@hono/vite-dev-server/cloudflare';
import honox from 'honox/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [honox({ devServer: { adapter } }), build()],
  server: {
    host: '0.0.0.0', // or specify your Tailscale IP, e.g., '100.x.y.z'
    port: 5173,
  },
});
