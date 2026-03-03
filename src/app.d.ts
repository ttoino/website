import "@poppanator/sveltekit-svg/dist/svg";

declare global {
    namespace App {
        interface Platform {
            caches: CacheStorage;
            cf?: IncomingRequestCfProperties;
            ctx: ExecutionContext;
            env: Env;
        }

        // interface Error {}
        // interface Locals {}
        // interface PageData {}
    }
}

export {};
