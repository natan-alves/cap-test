module.exports = {
    clearMocks: true,
    resetMocks: true,
    restoreMocks: true,
    resetModules: true,
    verbose: true,
    testEnvironment: 'node',
    testMatch: ['**/integration/**/*.spec.js'],
    testPathIgnorePatterns: ['/node_modules/'],
    collectCoverageFrom: ['src/**/*.js', '!**/node_modules/**', '!**/test/**'],
    coverageReporters: ['json', 'lcov', 'text', 'clover', 'cobertura']
};
