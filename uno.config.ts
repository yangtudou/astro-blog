// uno.config.ts
import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(), // 必选：默认的实用类预设（兼容 Tailwind/Windi）
    presetAttributify(), // 可选：支持属性化模式，如 <div border="2 red">
    presetIcons(), // 可选：支持图标类，如 <span class="i-mdi-home" />
  ],
})
