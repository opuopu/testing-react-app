/* eslint-disable react/no-unknown-property */
/// <reference types="vitest"/>
/// <reference types="vite/client"/>
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTest.js"],
    include: [
      "src/**/*.ts",
      "src/**/*.tsx",
      "src/**/*.js",
      "src/**/*.jsx",
      "__tests__/**/*.ts",
      "__tests__/**/*.tsx",
      "__tests__/**/*.js",
      "__tests__/**/*.jsx",
    ],
  },
});
