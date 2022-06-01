module.exports = {
  coverageDirectory: '../coverage',
  coverageThreshold: {},
  setupFiles: ['./tests/config.js'],
  reporters: ['default', 'jest-junit'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|pem)$':
      'jest-transform-stub',
  },
  rootDir: './',
  unmockedModulePathPatterns: ['react', 'react-dom', 'enzyme'],
  globals: {
    window: true,
  },
};
