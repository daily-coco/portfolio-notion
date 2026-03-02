import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: false,
      },
      injectRegister: 'auto',
      manifest: {
        name: 'portfolio_notion',
        short_name: 'portfolio',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
      },
      workbox: {
        ignoreURLParametersMatching: [/^X-Amz-/i],
        runtimeCaching: [
          {
            urlPattern: ({ url }) =>
              url.hostname === 'prod-files-secure.s3.us-west-2.amazonaws.com',
            handler: 'CacheFirst',
            options: {
              cacheName: 'notion-images',
              cacheableResponse: { statuses: [0, 200] },
              expiration: {
                maxEntries: 200,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30일
              },
            },
          },
        ],
      },
    }),
  ],
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
});
