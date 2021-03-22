const colors = require('tailwindcss/colors');

module.exports = {
    purge: [
        './www/index.html',
        './src/**/*.js',
        './src/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors,
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
