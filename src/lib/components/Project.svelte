<script lang="ts">
    import type { Project } from "$lib/projects";
    import Github from "$lib/icons/github.svg?component";
    import OpenInNew from "$lib/icons/open-in-new.svg?component";
    import { tags } from "$lib/tags";
    import { technologies } from "$lib/technologies";

    export let project: Project;
</script>

<article class="bg-mantle rounded-md p-2 md:p-4 relative overflow-hidden flex flex-col">
    <img src="{project.image}" alt="" class="h-auto mb-2 -m-2 md:mb-2 md:-m-4 max-w-[unset]">

    <h3 class="text-2xl">{project.name}</h3>
    <p class="mb-auto">{project.description}</p>

    {#if project.tags}
        <ul class="flex flex-row gap-2 flex-wrap mt-2 text-2xl">
            {#each project.tags as tag, i (i)}
                <li title={tags[tag].name}>
                    <svelte:component
                        this={tags[tag].icon}
                    />
                </li>
            {/each}
        </ul>
    {/if}

    {#if project.technologies}
        <ul class="flex flex-row gap-2 flex-wrap mt-2 text-2xl">
            {#each project.technologies as tech, i (i)}
                <li title={technologies[tech].name}>
                    <svelte:component
                        this={technologies[tech].icon}
                    />
                </li>
            {/each}
        </ul>
    {/if}

    <div class="flex flex-row-reverse gap-2 absolute top-2 right-2 text-2xl">
        {#if project.repo}
            <a href={project.repo} target="_blank" rel="noopener noreferrer">
                <Github />
            </a>
        {/if}

        {#if project.url}
            <a href={project.url} target="_blank" rel="noopener noreferrer">
                <OpenInNew />
            </a>
        {/if}
    </div>
</article>
