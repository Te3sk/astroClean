import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

export default {
  // ...
  integrations: [tailwind()],
}

// https://astro.build/config
// export default defineConfig({});
