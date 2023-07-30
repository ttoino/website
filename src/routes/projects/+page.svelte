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

    $: projects = [..._projects].sort(sortings[sort].sort);
</script>

<Page class="flex flex-col gap-2 md:gap-4 max-w-screen-xl">
    <div class="flex flex-row">
        <h2 class="text-4xl mr-auto">Projects</h2>
        
            <IconSelect bind:value={sort} options={sortings} />
    </div>

    <div
        class="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(theme(spacing.64),1fr))] gap-4"
    >
        {#each projects as project (project.id)}
            <div class="grid place-content-stretch place-items-stretch" animate:flip={{duration: 300}}>
                <Project {project} />
            </div>
        {/each}
    </div>
</Page>
