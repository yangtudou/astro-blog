import { defineConfig, presetUno, presetAttributify, presetTypography } from 'unocss'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  presets: [
    presetUno({
      // 在这里显式指定暗色模式为 class 触发
      dark: 'class',
    }),
    presetTypography(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    })
  ],
})