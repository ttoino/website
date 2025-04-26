/** @type {import('tailwindcss').Config} */
export default {
    content: ["src/**/*.{html,js,svelte,ts}"],
    plugins: [
        require("@catppuccin/tailwindcss"),
        require("@tailwindcss/typography"),
    ],
    theme: {
        extend: {
            animation: {
                "terminal-blink": "terminal-blink 1s step-end infinite",
            },
            fontFamily: {
                mono: ["Iosevka Custom", "Roboto Mono", "monospace"],
            },
            keyframes: {
                "terminal-blink": {
                    "0%, 100%": { opacity: 1 },
                    "50%": { opacity: 0 },
                },
            },
        },
    },
};
