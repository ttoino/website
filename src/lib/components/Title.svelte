<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";

    let {
        children,
        class: className = "",
        ...props
    }: HTMLAttributes<HTMLHeadingElement> = $props();
</script>

<h2 class="text-4xl {className}" {...props}>{@render children?.()}</h2>
