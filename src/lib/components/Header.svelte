<script lang="ts">
    // import AnimatedIcon from "./ThemeIcon.svelte";
    import github from "$lib/icons/github.svg?raw";

    export let index: boolean;
</script>

<header
    class:grow={index}
    class:grow-0={!index}
    class="flex flex-1 flex-col place-content-center place-items-center font-mono gap-2 md:gap-4 bg-crust p-2 overflow-clip sticky top-0 z-10 text-xl transition-all duration-1000"
>
    <nav class="contents">
        <a
            href="/"
            class:text-6xl={index}
            class:md:text-9xl={index}
            class:md:left-[50%]={index}
            class:md:translate-x-[-50%]={index}
            class:md:left-2={!index}
            class:md:translate-x-[-1ch]={!index}
            class:md:text-xl={!index}
            class="transition-all md:absolute"
        >
            <h1
                class="before:content-['\_'] before:invisible after:content-['\_'] motion-safe:after:animate-terminal-blink"
            >
                toino
            </h1>
        </a>

        <!-- <div
            class:md:translate-y-20={index}
            class:md:translate-y-0={!index}
            class="flex flex-col md:flex-row gap-2 md:gap-8 md:absolute transition-all"
        >
            <a href="/about">about_me</a>
            <a href="/projects">projects</a>
        </div> -->

        <div
            class="flex flex-row gap-4 items-start md:self-end md:flex-1 text-2xl"
        >
            <a href="https://github.com/ttoino" target="_blank"
                >{@html github}</a
            >
            <!-- <button type="button">
                <AnimatedIcon path="/light-dark-mode.json" />
            </button> -->
        </div>
    </nav>
</header>
