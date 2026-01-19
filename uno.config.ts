// uno.config.ts
import { defineConfig, presetAttributify, presetIcons, presetWind4 } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(), // 可选：支持属性化模式，如 <div border="2 red">
    presetIcons(),
    presetWind4(), // 可选：支持图标类，如 <span class="i-mdi-home" />
  ],
})
