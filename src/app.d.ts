import "@poppanator/sveltekit-svg/dist/svg";

declare global {
    namespace App {
        interface Platform {
            cf: CfProperties;
            ctx: ExecutionContext;
            env: Env;
        }

        // interface Error {}
        // interface Locals {}
        // interface PageData {}
    }
}

export {};
