/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                chess: {
                    dark: "#0f172a", // Slate 900
                    accent: "#fbbf24", // Amber 400
                    light: "#f8fafc", // Slate 50
                    board: {
                        white: "#f0d9b5",
                        black: "#b58863"
                    }
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
