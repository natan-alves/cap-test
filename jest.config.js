module.exports = {
    clearMocks: true,
    resetMocks: true,
    verbose: true,
    testEnvironment: 'node',
    testMatch: ['**/*.spec.js'],
    testPathIgnorePatterns: ['/node_modules/'],
    collectCoverageFrom: ['src/**/*.js'],
    coverageReporters: ['json', 'lcov', 'text', 'clover', 'cobertura']
};
