module.exports = {
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: '^.+\\.test\\.ts$',
  moduleFileExtensions: ['ts', 'js'],
  verbose: true,
  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: [7006]
      }
    }
  }
}
