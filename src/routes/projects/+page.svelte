<script lang="ts">
    import type { Project as ProjectT } from "$lib/projects";

    import IconSelect from "$lib/components/IconSelect.svelte";
    import Page from "$lib/components/Page.svelte";
    import Project from "$lib/components/Project.svelte";
    import SortNameAsc from "$lib/icons/sort-alphabetical-ascending.svg?component";
    import SortNameDesc from "$lib/icons/sort-alphabetical-descending.svg?component";
    import SortDateAsc from "$lib/icons/sort-date-ascending.svg?component";
    import SortDateDesc from "$lib/icons/sort-date-descending.svg?component";
    import TagIcon from "$lib/icons/tag.svg?component";
    import TechIcon from "$lib/icons/technology.svg?component";
    import { projects as _projects } from "$lib/projects";
    import { type TagId, tags } from "$lib/tags";
    import { technologies, type TechnologyId } from "$lib/technologies";
    import { myScale } from "$lib/transition/myscale";
    import { MetaTags } from "svelte-meta-tags";
    import { flip } from "svelte/animate";

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
            icon: SortDateAsc,
            label: "Date (oldest first)",
            sort: sortByDate,
        },
        "date-desc": {
            icon: SortDateDesc,
            label: "Date (newest first)",
            sort: (a: ProjectT, b: ProjectT) => -sortByDate(a, b),
        },
        "name-asc": {
            icon: SortNameAsc,
            label: "Name (A-Z)",
            sort: sortByName,
        },
        "name-desc": {
            icon: SortNameDesc,
            label: "Name (Z-A)",
            sort: (a: ProjectT, b: ProjectT) => -sortByName(a, b),
        },
    } as const;

    let sort: keyof typeof sortings = $state("date-desc");

    let selectedTags: TagId[] = $state(Object.keys(tags) as TagId[]);
    let selectedTechnologies: TechnologyId[] = $state(
        Object.keys(technologies) as TechnologyId[],
    );

    let projects = $derived(
        _projects
            .filter(
                (p) =>
                    p.tags.some((t) => selectedTags.includes(t)) &&
                    p.technologies.some((t) =>
                        selectedTechnologies.includes(t),
                    ),
            )
            .sort(sortings[sort].sort),
    );

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

<Page class="flex max-w-(--breakpoint-xl) flex-col gap-2 md:gap-4">
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
        class="relative grid grid-cols-1 gap-4 sm:grid-cols-[repeat(auto-fill,minmax(--spacing(64),1fr))]"
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
