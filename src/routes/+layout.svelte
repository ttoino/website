<script lang="ts">
    import { page } from "$app/stores";
    import Header from "$lib/components/Header.svelte";
    import { fly, slide } from "svelte/transition";
    import "./style.css";

    let index = false;
    $: index = $page.route.id === "/";
</script>

<div
    class:grid-rows-[auto_0fr]={index}
    class:grid-rows-[auto_1fr]={!index}
    class="h-full grid overflow-hidden transition-all"
>
    <Header {index} />

    <main
        class="overflow-auto grid grid-cols-[1fr] grid-rows-[1fr]"
    >
        <slot />
    </main>
</div>
