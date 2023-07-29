<script lang="ts">
    import Page from "$lib/components/Page.svelte";
    import Project from "$lib/components/Project.svelte";
    import { projects } from "$lib/projects";
</script>

<Page class="flex flex-col gap-2 md:gap-4 max-w-screen-xl">
    <h2 class="text-4xl">Projects</h2>

    <div class="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(theme(spacing.64),1fr))] gap-4">
        {#each projects as project (project.id)}
            <Project {project} />
        {/each}
    </div>
</Page>
