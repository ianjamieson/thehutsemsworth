/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,jsx}',
        './src/components/**/*.{js,jsx}',
    ],
    theme: {
        colors: {
            black: 'black',
            transparent: 'transparent',
            current: 'currentColor',
            'white': '#ffffff',
            'blue': {
                100: '#C2DFE9',
                200: '#9FBBC5',
                300: '#7D98A2',
                400: '#5C7780',
                500: '#3d5760',
            },
        },
        extend: {
            maxWidth: {
                container: '1024px'
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ]
};
