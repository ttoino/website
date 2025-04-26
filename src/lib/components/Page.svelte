<script lang="ts">
    import type { Snippet } from "svelte";

    import { fly } from "svelte/transition";

    let {
        children,
        class: className = "",
    }: {
        children?: Snippet;
        class?: string;
    } = $props();
</script>

<div
    transition:fly={{ y: 32 }}
    class="col-span-full row-span-full w-full p-4 {className}"
>
    {@render children?.()}
</div>
