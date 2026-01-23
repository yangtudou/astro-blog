// @ts-check
import { defineConfig } from 'astro/config';

// @Unocss
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
    markdown: {
        shikiConfig: {
            themes: {
                light: 'vitesse-light',
                dark: 'vitesse-dark',
            },
        }
    },
    integrations: [
        UnoCSS({
            injectReset: true
        })
    ]
});
