/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,njk}"],
    theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {},
        },
    },
    variants: {},
    plugins: [require("@tailwindcss/typography")],
}