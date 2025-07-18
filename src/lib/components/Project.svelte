<script lang="ts">
    import type { Project } from "$lib/projects";

    import Github from "$lib/icons/github.svg?component";
    import OpenInNew from "$lib/icons/open-in-new.svg?component";
    import { type TagId, tags } from "$lib/tags";
    import { technologies, type TechnologyId } from "$lib/technologies";

    let {
        onSetTag,
        onSetTechnology,
        project,
        selectedTags,
        selectedTechnologies,
    }: {
        onSetTag: (tag: TagId) => unknown;
        onSetTechnology: (technology: TechnologyId) => unknown;
        project: Project;
        selectedTags: TagId[];
        selectedTechnologies: TechnologyId[];
    } = $props();
</script>

<article
    class="bg-ctp-mantle relative flex flex-col overflow-hidden rounded-md p-2 md:p-4"
>
    {#if project.image}
        <enhanced:img
            class="-m-2 mb-2 aspect-video h-auto w-[calc(--spacing(4)+100%)] max-w-[unset] object-cover shadow-inner md:-m-4 md:mb-2 md:w-[calc(--spacing(8)+100%)]"
            alt=""
            src={project.image}
        />
    {/if}

    <h3 class="text-2xl" class:mr-4={!project.image}>{project.name}</h3>
    <p class="mb-auto">{project.description}</p>

    {#if project.tags}
        <ul class="mt-2 flex flex-row flex-wrap gap-2 text-2xl">
            {#each project.tags as tag, i (i)}
                {@const Icon = tags[tag].icon}

                <li class="flex" title={tags[tag].label}>
                    <button
                        class="-m-1 flex cursor-pointer p-1 transition-opacity"
                        class:opacity-40={!selectedTags.includes(tag)}
                        onclick={() => onSetTag(tag)}
                        type="button"
                    >
                        <Icon aria-hidden="true" />
                        <span class="sr-only">{tags[tag].label}</span>
                    </button>
                </li>
            {/each}
        </ul>
    {/if}

    {#if project.technologies}
        <ul class="mt-2 flex flex-row flex-wrap gap-2 text-2xl">
            {#each project.technologies as tech, i (i)}
                {@const Icon = technologies[tech].icon}

                <li class="flex" title={technologies[tech].label}>
                    <button
                        class="-m-1 flex cursor-pointer p-1 transition-opacity"
                        class:opacity-40={!selectedTechnologies.includes(tech)}
                        onclick={() => onSetTechnology(tech)}
                        type="button"
                    >
                        <Icon aria-hidden="true" />
                        <span class="sr-only">{technologies[tech].label}</span>
                    </button>
                </li>
            {/each}
        </ul>
    {/if}

    <div
        class="absolute right-0 top-0 flex flex-row-reverse gap-2 rounded-bl-md p-2 text-2xl"
        class:bg-inherit={project.image}
    >
        {#if project.repo}
            <!-- eslint-disable svelte/no-navigation-without-base -->
            <a
                href={project.repo}
                rel="noopener noreferrer"
                target="_blank"
                title="Repository"
            >
                <!-- eslint-enable svelte/no-navigation-without-base -->
                <Github aria-hidden="true" />
                <span class="sr-only">Repository</span>
            </a>
        {/if}

        {#if project.url}
            <!-- eslint-disable svelte/no-navigation-without-base -->
            <a
                href={project.url}
                rel="noopener noreferrer"
                target="_blank"
                title="Open project"
            >
                <!-- eslint-enable svelte/no-navigation-without-base -->
                <OpenInNew aria-hidden="true" />
                <span class="sr-only">Open project</span>
            </a>
        {/if}
    </div>
</article>
