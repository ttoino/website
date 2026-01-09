<script lang="ts">
    import type { Picture } from "vite-imagetools";

    import { fade } from "svelte/transition";

    let {
        automatic = false,
        class: className = "",
        imageClass = "",
        images,
    }: {
        automatic?: boolean;
        class?: string;
        imageClass?: string;
        images: ({ dark: Picture; light: Picture } | Picture)[];
    } = $props();

    let currentIndex = $state(0);
    let timer = $state<number | undefined>();

    const setTimer = () =>
        void (timer = setInterval(
            () => void (currentIndex = (currentIndex + 1) % images.length),
            2500,
        ));

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
                        class="w-full object-cover dark:hidden {imageClass}"
                        alt=""
                        src={image.light}
                    />
                    <enhanced:img
                        class="not-dark:hidden w-full object-cover {imageClass}"
                        alt=""
                        src={image.dark}
                    />
                {:else}
                    <enhanced:img
                        class="w-full object-cover {imageClass}"
                        alt=""
                        src={image}
                    />
                {/if}
            </div>
        {/if}
    {/each}
</div>
