/// <reference types="vitest/config" />
import { getViteConfig } from 'astro/config';

export default getViteConfig({
  test: {
    // Vitest configuration options
    // environment - jsdom for react components - download dependency 
    environment: 'jsdom',

    // globals true - avoids having to import the keywords into every test file, it's automatically included and available for use
    globals: true,

    // TO DO : look into cleanup after test runs, possibly setupFile config
  },
});