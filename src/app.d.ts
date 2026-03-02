import "@poppanator/sveltekit-svg/dist/svg";

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
        interface Platform {
            env: Env;
            ctx: ExecutionContext;
            caches: CacheStorage;
            cf?: IncomingRequestCfProperties
        }

        // interface Error {}
        // interface Locals {}
        // interface PageData {}
    }
}

export {};
