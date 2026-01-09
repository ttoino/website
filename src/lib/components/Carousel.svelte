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
    let timer = $state<number | undefined>();

    const noMouse = new MediaQuery("pointer: coarse");

    let automatic = $derived(baseAutomatic ?? noMouse.current);

    let setTimer = $derived(
        () =>
            void (timer = setInterval(
                () => void (currentIndex = (currentIndex + 1) % images.length),
                interval,
            )),
    );

    $effect(() => {
        if (!automatic || images.length == 0) return;

        setTimer();

        return () => clearInterval(timer);
    });

    const onMouseEnter = () => setTimer();

    const onMouseLeave = () => clearInterval(timer);
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
