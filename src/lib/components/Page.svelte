<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";

    import { fly } from "svelte/transition";

    let {
        children,
        class: className = "",
        ...props
    }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
    class="col-span-full row-span-full flex w-full flex-col items-center overflow-x-hidden overflow-y-auto p-4"
    transition:fly={{ y: 32 }}
    {...props}
>
    <div class="w-full {className}">
        {@render children?.()}
    </div>
</div>
