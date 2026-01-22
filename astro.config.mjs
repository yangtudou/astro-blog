// @ts-check
import { defineConfig } from 'astro/config';

// @Unocss
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
    integrations: [
        UnoCSS({
            injectReset: true
        })
    ]
});
