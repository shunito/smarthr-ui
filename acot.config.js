module.exports = {
  presets: ['@acot/wcag'],
  extends: ['preset:@acot/wcag/recommended'],
  connection: {
    command: 'yarn storybook',
  },
  rules: {
    '@acot/wcag/focusable-has-indicator': 'off',
    '@acot/wcag/page-has-title': 'off',
    '@acot/wcag/page-has-valid-lang': 'off',
  },
  paths: ['/iframe.html?id=dialog--default&args=&viewMode=story'],
  origin: 'http://localhost:6006',
  reporters: ['@acot/github'],
}
