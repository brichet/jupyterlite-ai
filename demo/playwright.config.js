import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 120_000,
  use: {
    baseURL: 'http://localhost:8000',
    headless: true
  },
  webServer: {
    command: 'python3 -m http.server 8000 --directory dist',
    port: 8000,
    timeout: 10_000,
    reuseExistingServer: false
  }
});
