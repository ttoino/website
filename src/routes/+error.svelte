<script lang="ts">
    import { page } from "$app/state";
</script>

<div class="flex min-h-full flex-col items-center justify-center">
    <h2 class="text-6xl md:text-9xl">{page.status}</h2>
    <h3 class="text-2xl md:text-5xl">{page.error?.message}</h3>
</div>
