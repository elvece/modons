/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,njk}"],
    theme: {
        container: {
            center: true,
        },
        extend: {
            screens: {
                '3xl': '1792px',
                '4xl': '2048px'
            },
            colors: {},
        },
    },
    variants: {},
    plugins: [require("@tailwindcss/typography")],
}