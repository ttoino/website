<script lang="ts">
    import type { Images } from "$lib/projects";

    import { MediaQuery } from "svelte/reactivity";

    let {
        automatic: baseAutomatic,
        class: className = "",
        imageClass = "",
        images,
        interval = 2500,
        sizes,
    }: {
        automatic?: boolean;
        class?: string;
        imageClass?: string;
        images: Images;
        interval?: number;
        sizes?: string;
    } = $props();

    let currentIndex = $state(0);
    let timer: number | undefined;

    const noMouse = new MediaQuery("pointer: coarse");

    let automatic = $derived(baseAutomatic ?? noMouse.current);

    const clearTimer = () => {
        clearInterval(timer);
        timer = undefined;
    };

    const setTimer = () => {
        clearTimer();
        timer = window.setInterval(
            () => void (currentIndex = (currentIndex + 1) % images.length),
            interval,
        );
    };

    $effect(() => {
        if (currentIndex >= images.length) currentIndex = 0;
    });

    $effect(() => {
        if (!automatic || images.length === 0) {
            clearTimer();
            return;
        }

        setTimer();
        return () => clearTimer();
    });

    const onMouseEnter = () => setTimer();
    const onMouseLeave = () => clearTimer();
</script>

<div
    class="grid grid-cols-1 grid-rows-1 *:col-span-full *:row-span-full {className}"
    onmouseenter={automatic ? undefined : onMouseEnter}
    onmouseleave={automatic ? undefined : onMouseLeave}
    role="img"
>
    {#each images as image, i (i)}
        {#if "dark" in image}
            <enhanced:img
                class="size-full transition-opacity duration-500 dark:hidden {imageClass}"
                class:opacity-0={currentIndex !== i}
                alt=""
                {sizes}
                src={image.light}
            />
            <enhanced:img
                class="size-full transition-opacity duration-500 not-dark:hidden {imageClass}"
                class:opacity-0={currentIndex !== i}
                alt=""
                {sizes}
                src={image.dark}
            />
        {:else}
            <enhanced:img
                class="size-full transition-opacity duration-500 {imageClass}"
                class:opacity-0={currentIndex !== i}
                alt=""
                {sizes}
                src={image}
            />
        {/if}
    {/each}
</div>
