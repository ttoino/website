<script lang="ts">
    import { page } from "$app/stores";
    import Header from "$lib/components/Header.svelte";
    import "./style.css";

    let index = false;
    $: index = $page.route.id === "/";
</script>

<div
    class:grid-rows-[auto_0fr]={index}
    class:grid-rows-[auto_1fr]={!index}
    class="grid h-full overflow-hidden motion-safe:transition-all"
>
    <Header {index} />

    <main
        class="grid grid-cols-[1fr] grid-rows-[1fr] justify-items-center overflow-auto"
    >
        <slot />
    </main>
</div>
