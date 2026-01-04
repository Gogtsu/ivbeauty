/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gold: {
                    light: '#F8F1D0',
                    DEFAULT: '#D4AF37',
                    dark: '#AA8C2C',
                },
                champagne: '#F7E7CE',
                nude: '#E3C1B4',
                'soft-white': '#FAFAFA',
            },
            fontFamily: {
                serif: ['Playfair Display', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
