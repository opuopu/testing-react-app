
## TEST REACT APP WITH RTL

### STEP-1
Install Some Dependencies
``` yarn add vitest jsdom @testing-library/react @testing-library/jest-dom ```
### STEP -2
Setup Enviroment
In vite.config.js file
```
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
  },
});
``` js


