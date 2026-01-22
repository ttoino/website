<script lang="ts">
    import type { Snippet } from "svelte";

    import "./style.css";

    import { browser } from "$app/environment";
    import { onNavigate } from "$app/navigation";
    import { page } from "$app/state";
    import Header from "$lib/components/Header.svelte";
    import { setTheme } from "$lib/context/theme";
    import themeScript from "$lib/js/theme?url";
    import { MediaQuery } from "svelte/reactivity";
    import { fly } from "svelte/transition";

    import type { Snapshot } from "./$types";

    let {
        children,
    }: {
        children?: Snippet;
    } = $props();

    let index = $derived(page.route.id === "/");

    // Store user scroll between navigation
    let scrollElement: HTMLDivElement | null = $state(null);
    let scrollPosition: number = $state(0);

    // Reset scroll before the snapshot is restored
    onNavigate(() => void (scrollPosition = 0));

    export const snapshot: Snapshot<number | undefined> = {
        capture: () => scrollElement?.scrollTop,
        restore: (value) => {
            if (value !== undefined) scrollPosition = value;
        },
    };

    $effect(() => {
        // eslint-disable-next-line svelte/@typescript-eslint/no-unnecessary-condition
        if (scrollElement) scrollElement.scrollTop = scrollPosition;
    });

    // Handle theme
    const mediaQuery = new MediaQuery("(prefers-color-scheme: dark)");

    let storageTheme: null | string = $state(
        browser ? window.localStorage.getItem("theme") : null,
    );

    let theme: "dark" | "light" = $derived(
        storageTheme === "dark" || storageTheme === "light"
            ? storageTheme
            : mediaQuery.current
              ? "dark"
              : "light",
    );

    setTheme(() => theme);

    $effect(() => {
        if (browser)
            document.documentElement.classList.toggle("dark", theme === "dark");
    });
</script>

<svelte:window
    onstorage={(e) => void (e.key === "theme" && (storageTheme = e.newValue))}
/>

<svelte:head>
    <script src={themeScript}></script>
</svelte:head>

<div
    class="grid h-full overflow-hidden motion-safe:transition-all"
    class:grid-rows-[auto_0fr]={index}
    class:grid-rows-[auto_1fr]={!index}
>
    <Header
        {index}
        onToggleTheme={() => {
            const newTheme = theme === "light" ? "dark" : "light";
            storageTheme = newTheme;
            window.localStorage.setItem("theme", newTheme);
        }}
    />

    <main
        class="grid grid-cols-1 grid-rows-1 justify-items-center overflow-hidden"
    >
        {#key page.url.pathname}
            <div
                bind:this={scrollElement}
                class="col-span-full row-span-full flex w-full flex-col items-center overflow-x-hidden overflow-y-auto p-4"
                transition:fly={{ y: 32 }}
            >
                {@render children?.()}
            </div>
        {/key}
    </main>
</div>
