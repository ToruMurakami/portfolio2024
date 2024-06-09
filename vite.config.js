import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/js/app.jsx", "resources/scss/app.scss"],
            refresh: true,
        }),
    ],
    server: {
        host: "0.0.0.0",
        port: 5173,
        hmr: {
            host: "localhost",
            protocol: "ws",
            clientPort: 5173,
        },
    },
});
