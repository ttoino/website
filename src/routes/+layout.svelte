<script lang="ts">
    import type { Snippet } from "svelte";

    import "./style.css";

    import { page } from "$app/state";
    import Header from "$lib/components/Header.svelte";

    let {
        children,
    }: {
        children?: Snippet;
    } = $props();

    let index = $derived(page.route.id === "/");
</script>

<div
    class="grid h-full overflow-hidden motion-safe:transition-all"
    class:grid-rows-[auto_0fr]={index}
    class:grid-rows-[auto_1fr]={!index}
>
    <Header {index} />

    <main
        class="grid grid-cols-1 grid-rows-1 justify-items-center overflow-hidden"
    >
        {@render children?.()}
    </main>
</div>
