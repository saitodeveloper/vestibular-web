import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

const __dirname = path.dirname(__filename);

export default defineConfig({
    plugins: [react(), svgr()],
    resolve: {
        alias: [
            { find: "@src", replacement: path.resolve(__dirname, "/src") },
            {
                find: "@pages",
                replacement: path.resolve(__dirname, "/src/pages")
            },
            { find: "@icons", replacement: path.resolve("/src/assets/icons") }
        ]
    }
});
