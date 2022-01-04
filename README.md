### Repro:

Run `vite client` and visit http://localhost:3000

### Expected:

Webpage with "Hello world!"

### Actual:

```
2:25:05 PM [vite] Internal server error: Loading PostCSS Plugin failed: Cannot find module 'tailwindcss'
Require stack:
- /Users/hpx7/Dev/vite-tailwind/noop.js

(@/Users/hpx7/Dev/vite-tailwind/client/postcss.config.js)
  Plugin: vite:css
  File: /Users/hpx7/Dev/vite-tailwind/client/styles.css?direct
      at load$1 (/vite/dist/node/chunks/dep-76613303.js:19562:11)
      at /vite/dist/node/chunks/dep-76613303.js:19587:16
      at Array.map (<anonymous>)
      at plugins (/vite/dist/node/chunks/dep-76613303.js:19586:8)
      at processResult (/vite/dist/node/chunks/dep-76613303.js:19655:14)
      at /vite/dist/node/chunks/dep-76613303.js:19769:14
      at async resolvePostcssConfig (/vite/dist/node/chunks/dep-76613303.js:20506:22)
      at async compileCSS (/vite/dist/node/chunks/dep-76613303.js:20329:27)
      at async TransformContext.transform (/vite/dist/node/chunks/dep-76613303.js:20015:50)
      at async Object.transform (/vite/dist/node/chunks/dep-76613303.js:36985:30)
```
