/// <reference types="vitest/config" />
import { getViteConfig } from 'astro/config';

export default getViteConfig({
  test: {
    // Vitest configuration options
    // environment - jsdom for react components - download dependency 
    environment: 'jsdom',

    // globals true - avoids having to import the keywords into every test file, it's automatically included and available for use
    globals: true,

    // cleanup after test runs and importing middleware-like behavior before tests run
    setupFiles: ['./vitest.setup.js'],

    pool: 'forks'
  },
});