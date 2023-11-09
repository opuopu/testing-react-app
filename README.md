## TEST REACT APP WITH RTL

### STEP-1 Install Some Dependencies

```cmd
yarn add vitest jsdom @testing-library/react @testing-library/jest-dom
```

### STEP -2 Setup Enviroment

Put This Code Block In **vite.config.js**

```js
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
```

And Add This Script In **package.json**

```js
"test": "vitest --reporter verbose"
```

### STEP -3 Create A File Called setupTest.js In Src Root Directory

And Import This:

```js
import "@testing-library/jest-dom";
```
