// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    // Disable "template root requires exactly one element"
    'vue/no-multiple-template-root': 'off',
  },
})
