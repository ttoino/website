<script lang="ts">
    import { resolve } from "$app/paths";
    import { page } from "$app/state";
    import Github from "$lib/icons/github.svg?component";
    import { label, links } from "$lib/links";

    let {
        index,
    }: {
        index: boolean;
    } = $props();
</script>

<header
    class="sticky top-0 z-10 grid flex-1 content-center items-start justify-stretch justify-items-stretch overflow-clip bg-ctp-crust text-xl duration-1000 focus-within:grid-rows-[1fr] hover:grid-rows-[1fr] motion-safe:transition-all md:grid-rows-[1fr] md:items-stretch"
    class:grid-rows-[0fr]={!index}
    class:grid-rows-[1fr]={index}
    class:grow-0={!index}
>
    <nav
        class="my-auto flex min-h-11 flex-col items-center justify-center gap-2 p-2 md:m-0 md:gap-4 md:p-4"
    >
        <a
            class="motion-safe:transition-all md:absolute {index
                ? 'text-6xl md:left-1/2 md:-translate-x-1/2 md:text-9xl'
                : 'hover:underline md:left-4 md:-translate-x-[1ch] md:text-xl'}"
            href={resolve("/")}
        >
            <h1
                class="before:invisible before:content-['\_'] after:content-['\_'] motion-safe:after:animate-terminal-blink"
            >
                toino
            </h1>
        </a>

        <div
            class="flex flex-col gap-2 motion-safe:transition-all md:absolute md:flex-row md:gap-8 {index
                ? 'md:translate-y-20'
                : 'md:translate-y-0'}"
        >
            {#each links as link (link)}
                {@const active = !!page.route.id?.startsWith(link)}

                <a
                    class="hover:underline"
                    class:font-bold={active}
                    href={resolve(link)}
                >
                    {label(link)}
                </a>
            {/each}
        </div>

        <div
            class="flex flex-row items-start gap-4 text-2xl md:flex-1 md:self-end"
        >
            <a
                href="https://github.com/ttoino"
                rel="noopener noreferrer"
                target="_blank"
                title="Github"
            >
                <Github aria-hidden="true" />
                <span class="sr-only">Github profile</span>
            </a>
        </div>
    </nav>
</header>
