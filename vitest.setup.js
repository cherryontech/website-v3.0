// The file runs before any tests are run similar to middleware - this keeps the individual test files clean so that they don't repeat the import statements
// This is also going to allow Vitest expect() assertions to be used with the more human-readable methods from jest-dom
import '@testing-library/jest-dom/vitest'
