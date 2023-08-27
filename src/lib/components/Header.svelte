<script lang="ts">
    // import AnimatedIcon from "./ThemeIcon.svelte";
    import Github from "$lib/icons/github.svg?component";

    export let index: boolean;
</script>

<header
    class:grow={index}
    class:grow-0={!index}
    class="sticky top-0 z-10 flex flex-1 flex-col place-content-center place-items-center gap-2 overflow-clip bg-crust p-2 text-xl duration-1000 motion-safe:transition-all md:gap-4 md:p-4"
>
    <nav class="contents">
        <a
            href="/"
            class:text-6xl={index}
            class:md:text-9xl={index}
            class:md:left-[50%]={index}
            class:md:translate-x-[-50%]={index}
            class:md:left-4={!index}
            class:md:translate-x-[-1ch]={!index}
            class:md:text-xl={!index}
            class="motion-safe:transition-all md:absolute"
        >
            <h1
                class="before:invisible before:content-['\_'] after:content-['\_'] motion-safe:after:animate-terminal-blink"
            >
                toino
            </h1>
        </a>

        <div
            class:md:translate-y-20={index}
            class:md:translate-y-0={!index}
            class="flex flex-col gap-2 motion-safe:transition-all md:absolute md:flex-row md:gap-8"
        >
            <!-- <a href="/about">about_me</a> -->
            <a href="/projects">projects</a>
        </div>

        <div
            class="flex flex-row items-start gap-4 text-2xl md:flex-1 md:self-end"
        >
            <a
                href="https://github.com/ttoino"
                target="_blank"
                rel="noopener noreferrer"
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
