<script lang="ts">
    import { base } from "$app/paths";
    import Github from "$lib/icons/github.svg?component";

    export let index: boolean;
</script>

<header
    class="bg-ctp-crust sticky top-0 z-10 grid flex-1 content-center items-start justify-stretch justify-items-stretch overflow-clip text-xl duration-1000 focus-within:grid-rows-[1fr] hover:grid-rows-[1fr] motion-safe:transition-all md:grid-rows-[1fr] md:items-stretch"
    class:grid-rows-[0fr]={!index}
    class:grid-rows-[1fr]={index}
    class:grow-0={!index}
>
    <nav
        class="my-auto flex min-h-[2.75rem] flex-col items-center justify-center gap-2 p-2 md:m-0 md:gap-4 md:p-4"
    >
        <a
            class="motion-safe:transition-all md:absolute"
            class:md:left-4={!index}
            class:md:left-[50%]={index}
            class:md:text-9xl={index}
            class:md:text-xl={!index}
            class:md:translate-x-[-1ch]={!index}
            class:md:translate-x-[-50%]={index}
            class:text-6xl={index}
            href="{base}/"
        >
            <h1
                class="motion-safe:after:animate-terminal-blink before:invisible before:content-['\_'] after:content-['\_']"
            >
                toino
            </h1>
        </a>

        <div
            class="flex flex-col gap-2 motion-safe:transition-all md:absolute md:flex-row md:gap-8"
            class:md:translate-y-0={!index}
            class:md:translate-y-20={index}
        >
            <a href="{base}/projects">projects</a>
        </div>

        <div
            class="flex flex-row items-start gap-4 text-2xl md:flex-1 md:self-end"
        >
            <a
                href="https://github.com/ttoino"
                rel="noopener noreferrer"
                target="_blank"
                title="Github"
                ><Github aria-hidden="true" /><span class="sr-only"
                    >Github profile</span
                ></a
            >
            <!-- <button type="button">
                <AnimatedIcon path="/light-dark-mode.json" />
            </button> -->
        </div>
    </nav>
</header>
