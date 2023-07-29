<script lang="ts">
    import { fly } from "svelte/transition";
</script>

<div transition:fly={{ y: 32 }} class="col-span-full row-span-full p-4 w-full {$$props.class ?? ""}">
    <slot />
</div>