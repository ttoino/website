<script lang="ts">
    import { fly } from "svelte/transition";
</script>

<div
    transition:fly={{ y: 32 }}
    class="col-span-full row-span-full w-full p-4 {$$props.class ?? ''}"
>
    <slot />
</div>
