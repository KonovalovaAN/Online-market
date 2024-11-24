const path = require('path');

const relativePath = './__mocks__/svgMock.js';
const absolutePath = path.resolve(relativePath);


module.exports = {
    moduleNameMapper: {
        '\\.svg$': absolutePath, // Указываем путь к заглушке
        '\\.(css|scss)$': 'identity-obj-proxy',     // Для CSS файлов
    },
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    testEnvironment: 'jsdom', // Обязательно для React
};
