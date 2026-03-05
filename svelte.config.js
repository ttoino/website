import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            routes: {
                exclude: ["<all>", "/sitemap.xml"],
            },
        }),
    },
    preprocess: vitePreprocess(),
};

export default config;
