// @ts-check
import { defineConfig } from 'astro/config';

// 引入 vue
import vue from '@astrojs/vue';

// 引入 Unocss
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
	  UnoCSS({
      injectReset: true
    }),
  ],
});