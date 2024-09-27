import { defineConfig } from 'vite';
import build from '@hono/vite-build/cloudflare-pages';
import adapter from '@hono/vite-dev-server/cloudflare';
import honox from 'honox/vite';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    honox({ devServer: { adapter } }),
    build(),
    viteCompression({ algorithm: 'gzip' }),
    viteCompression({ algorithm: 'brotliCompress', ext: '.br' }),
  ],
  build: {
    minify: 'esbuild',
    cssMinify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
});
