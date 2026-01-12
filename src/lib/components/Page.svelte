<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";

    let {
        children,
        class: className = "",
        ...props
    }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div class="w-full {className}" {...props}>
    {@render children?.()}
</div>
