<script lang="ts">
    import { resolve } from "$app/paths";
    import { page } from "$app/state";
    import Page from "$lib/components/Page.svelte";
    import { interests } from "$lib/interests";

    let { children } = $props();
</script>

<Page class="mx-auto flex h-full max-w-(--breakpoint-lg) flex-col">
    <nav
        class="h-12 flex max-w-full flex-row items-center gap-8 overflow-x-auto overflow-y-hidden"
    >
        {#each interests as interest (interest.id)}
            {@const current = interest.id === page.params.interest}

            <a
                class="min-w-min grow basis-0 text-center transition-[font-size]"
                class:text-4xl={current}
                href={resolve("/interests/[interest]", {
                    interest: interest.id,
                })}
            >
                {interest.name}
            </a>
        {/each}
    </nav>

    {@render children?.()}
</Page>
