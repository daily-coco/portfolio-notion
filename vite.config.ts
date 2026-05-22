/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin(), VitePWA({
    registerType: 'autoUpdate',
    devOptions: {
      enabled: false
    },
    injectRegister: 'auto',
    manifest: {
      name: 'portfolio_notion',
      short_name: 'portfolio',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#ffffff'
    },
    workbox: {
      ignoreURLParametersMatching: [/^X-Amz-/i],
      runtimeCaching: [{
        urlPattern: ({
          url
        }) => url.hostname === 'prod-files-secure.s3.us-west-2.amazonaws.com',
        handler: 'CacheFirst',
        options: {
          cacheName: 'notion-images',
          cacheableResponse: {
            statuses: [0, 200]
          },
          expiration: {
            maxEntries: 200,
            maxAgeSeconds: 60 * 60 * 24 * 30 // 30일
          }
        }
      }]
    }
  })],
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        }
      }
    }]
  }
});