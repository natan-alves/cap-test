module.exports = {
    clearMocks: true,
    resetMocks: true,
    restoreMocks: true,
    resetModules: true,
    verbose: true,
    testEnvironment: 'node',
    testMatch: ['**/unit/**/*.spec.js'],
    testPathIgnorePatterns: ['/node_modules/'],
    coverageThreshold: {
        global: {
            statements: 90,
            branches: 80,
            functions: 90,
            lines: 90,
        },
    },
    collectCoverageFrom: [
        'src/**/*.js',
        '!**/node_modules/**',
        '!**/test/**',
        '!**/schemas/*.js',
        '!src/**/routes.js',
    ],
    coverageReporters: ['json', 'lcov', 'text', 'clover', 'cobertura'],
};
