/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "side-parfums": "url('./assets/side-parfums.png')",
            },
            backgroundSize: {
                xs: "215px",
                xxs: "125px",
            },
        },
        screens: {
            slg: { max: "1000px" },
            md: { max: "840px" },
            lg: { max: "1200px" },
            mb: { max: "700px" },
            xs: { max: "500px" },
        },
    },
    plugins: [],
};
