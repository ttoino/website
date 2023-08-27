<script lang="ts">
    import type { Project } from "$lib/projects";
    import Github from "$lib/icons/github.svg?component";
    import OpenInNew from "$lib/icons/open-in-new.svg?component";
    import { tags, type TagId } from "$lib/tags";
    import { technologies, type TechnologyId } from "$lib/technologies";

    export let project: Project;
    export let setTag: (tag: TagId) => unknown;
    export let setTechnology: (technology: TechnologyId) => unknown;
</script>

<article
    class="relative flex flex-col overflow-hidden rounded-md bg-mantle p-2 md:p-4"
>
    <img
        src={project.image}
        alt=""
        class="-m-2 mb-2 h-auto max-w-[unset] md:-m-4 md:mb-2"
    />

    <h3 class="text-2xl">{project.name}</h3>
    <p class="mb-auto">{project.description}</p>

    {#if project.tags}
        <ul class="mt-2 flex flex-row flex-wrap gap-2 text-2xl">
            {#each project.tags as tag, i (i)}
                <li title={tags[tag].label} class="flex">
                    <button
                        class="-m-1 flex cursor-pointer p-1"
                        on:click={() => setTag(tag)}
                    >
                        <svelte:component
                            this={tags[tag].icon}
                            aria-hidden="true"
                        />
                        <span class="sr-only">{tags[tag].label}</span>
                    </button>
                </li>
            {/each}
        </ul>
    {/if}

    {#if project.technologies}
        <ul class="mt-2 flex flex-row flex-wrap gap-2 text-2xl">
            {#each project.technologies as tech, i (i)}
                <li title={technologies[tech].label} class="flex">
                    <button
                        class="-m-1 flex cursor-pointer p-1"
                        on:click={() => setTechnology(tech)}
                    >
                        <svelte:component
                            this={technologies[tech].icon}
                            aria-hidden="true"
                        />
                        <span class="sr-only">{technologies[tech].label}</span>
                    </button>
                </li>
            {/each}
        </ul>
    {/if}

    <div class="absolute right-2 top-2 flex flex-row-reverse gap-2 text-2xl">
        {#if project.repo}
            <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                title="Repository"
            >
                <Github aria-hidden="true" />
                <span class="sr-only">Repository</span>
            </a>
        {/if}

        {#if project.url}
            <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                title="Open project"
            >
                <OpenInNew aria-hidden="true" />
                <span class="sr-only">Open project</span>
            </a>
        {/if}
    </div>
</article>
