<script lang="ts">
    import { MediaQuery } from "svelte/reactivity";
    import { fade } from "svelte/transition";
    import { type Picture } from "vite-imagetools";

    let {
        automatic: baseAutomatic,
        class: className = "",
        imageClass = "",
        images,
        interval = 2500,
    }: {
        automatic?: boolean;
        class?: string;
        imageClass?: string;
        images: ({ dark: Picture; light: Picture } | Picture)[];
        interval?: number;
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
        {#if currentIndex === i}
            <div transition:fade>
                {#if "dark" in image}
                    <enhanced:img
                        class="w-full dark:hidden {imageClass}"
                        alt=""
                        src={image.light}
                    />
                    <enhanced:img
                        class="w-full not-dark:hidden {imageClass}"
                        alt=""
                        src={image.dark}
                    />
                {:else}
                    <enhanced:img
                        class="w-full {imageClass}"
                        alt=""
                        src={image}
                    />
                {/if}
            </div>
        {/if}
    {/each}
</div>
