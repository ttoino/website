<script lang="ts">
    import IconSelect from "$lib/components/IconSelect.svelte";
    import Page from "$lib/components/Page.svelte";
    import Project from "$lib/components/Project.svelte";
    import type { Project as ProjectT } from "$lib/projects";
    import { projects as _projects } from "$lib/projects";
    import SortDateAsc from "$lib/icons/sort-date-ascending.svg?component";
    import SortDateDesc from "$lib/icons/sort-date-descending.svg?component";
    import SortNameAsc from "$lib/icons/sort-alphabetical-ascending.svg?component";
    import SortNameDesc from "$lib/icons/sort-alphabetical-descending.svg?component";
    import TagIcon from "$lib/icons/tag.svg?component";
    import TechIcon from "$lib/icons/technology.svg?component";
    import { flip } from "svelte/animate";
    import { tags, type TagId } from "$lib/tags";
    import { technologies, type TechnologyId } from "$lib/technologies";
    import { myScale } from "$lib/transition/myscale";
    import { MetaTags } from "svelte-meta-tags";

    const sortByDate = (a: ProjectT, b: ProjectT) => {
        if (a.endDate && b.endDate)
            return a.endDate.getTime() - b.endDate.getTime();

        if (a.endDate) return -1;

        if (b.endDate) return 1;

        return a.startDate.getTime() - b.startDate.getTime();
    };
    const sortByName = (a: ProjectT, b: ProjectT) =>
        a.name.localeCompare(b.name);

    const sortings = {
        "date-asc": {
            label: "Date (oldest first)",
            icon: SortDateAsc,
            sort: sortByDate,
        },
        "date-desc": {
            label: "Date (newest first)",
            icon: SortDateDesc,
            sort: (a: ProjectT, b: ProjectT) => -sortByDate(a, b),
        },
        "name-asc": {
            label: "Name (A-Z)",
            icon: SortNameAsc,
            sort: sortByName,
        },
        "name-desc": {
            label: "Name (Z-A)",
            icon: SortNameDesc,
            sort: (a: ProjectT, b: ProjectT) => -sortByName(a, b),
        },
    } as const;

    let sort: keyof typeof sortings = "date-desc";

    let selectedTags: TagId[] = Object.keys(tags) as TagId[];
    let selectedTechnologies: TechnologyId[] = Object.keys(
        technologies,
    ) as TechnologyId[];

    $: projects = _projects
        .filter(
            (p) =>
                p.tags.some((t) => selectedTags.includes(t)) &&
                p.technologies.some((t) => selectedTechnologies.includes(t)),
        )
        .sort(sortings[sort].sort);

    const setTag = (tag: TagId) =>
        (selectedTags =
            selectedTags.length === 1 && selectedTags[0] === tag
                ? (Object.keys(tags) as TagId[])
                : [tag]);
    const setTechnology = (technology: TechnologyId) =>
        (selectedTechnologies =
            selectedTechnologies.length === 1 &&
            selectedTechnologies[0] === technology
                ? (Object.keys(technologies) as TechnologyId[])
                : [technology]);
</script>

<MetaTags
    title="Projects • toino"
    description="My personal and university projects"
/>

<Page class="flex max-w-screen-xl flex-col gap-2 md:gap-4">
    <div class="flex flex-row items-center gap-1">
        <h2 class="mr-auto text-4xl">Projects</h2>

        <IconSelect
            bind:value={selectedTags}
            items={tags}
            multiple
            icon={TagIcon}
            name="tags"
            label="Filter by tags"
        />

        <IconSelect
            bind:value={selectedTechnologies}
            items={technologies}
            multiple
            icon={TechIcon}
            name="technologies"
            label="Filter by technologies"
        />

        <IconSelect
            bind:value={sort}
            items={sortings}
            name="sorting"
            label="Sort by"
        />
    </div>

    <div
        class="relative grid grid-cols-1 gap-4 sm:grid-cols-[repeat(auto-fill,minmax(theme(spacing.64),1fr))]"
    >
        {#each projects as project (project.id)}
            <div
                class="grid place-content-stretch place-items-stretch"
                transition:myScale={{ duration: 300 }}
                animate:flip={{ duration: 300 }}
            >
                <Project
                    {project}
                    {selectedTags}
                    {setTag}
                    {selectedTechnologies}
                    {setTechnology}
                />
            </div>
        {/each}
    </div>
</Page>
