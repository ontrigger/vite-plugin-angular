## Vite plugin for Angular.

This plugin is work in progress. The interfaces can change any time. Don't use it for production!

Features:

- Fast live-reload, both in browser([vite](https://vitejs.dev/)) and server code([vavite](https://github.com/cyco130/vavite))
- Easy SSR(optional) using [vite-plugin-ssr](https://vite-plugin-ssr.com/), [filesystem routing](https://vite-plugin-ssr.com/filesystem-routing), [layout components](https://vite-plugin-ssr.com/layouts)
- In development mode, it uses [SWC](https://swc.rs/) and the Angular JIT compiler in the browser to keep it fast.
- In build mode, it uses [esbuild](https://esbuild.github.io/) and the Angular AOT compiler to produce small bundles.

Examples without SSR:
- [Simple](./examples/simple/)
- [Angular routing module](./examples/routing-module/)
- [Angular Material](./examples/material/)

Examples with SSR:
- [NestJS SSR](./examples/universal/)
- [vite-plugin-ssr + NestJS](./examples/vps/)
- [vite-plugin-ssr + Express](./examples/vps-express/)

| Related packages                          | Included in @nitedani/vite-plugin-angular |
| ----------------------------------------- | ----------------------------------------- |
| @nitedani/angular-renderer-core           | ✓                                         |
| @nitedani/angular-renderer-express        | X                                         |
| @nitedani/angular-renderer-nestjs         | X                                         |
| @nitedani/vite-plugin-ssr-adapter-express | X                                         |
| @nitedani/vite-plugin-ssr-adapter-nestjs  | X                                         |

TODO:
- add cypress tests to ensure nothing breaks
- provide documentation of the features
- make sure it works with angular libraries
- typechecking in development(currently only build is typechecked)
- handling of environment files(do we need them?)

Usage:

```typescript
// vite.config.ts
import { defineConfig } from "vite";
import { angular } from "@nitedani/vite-plugin-angular/plugin";

export default defineConfig({
  plugins: [angular()],
});
```
