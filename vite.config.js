import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "p3Reload",
    server: {
        port: 3000,
        host: "0.0.0.0",
    },
    preview: {
        port: 3000,
        host: "0.0.0.0",
    },
    resolve: {
        alias: {
            "@/": "".concat(resolve(__dirname, "src"), "/"),
        },
    },
});