<script lang="ts" module>
    const dateFormat = Intl.DateTimeFormat("en-US", {
        month: "short",
        year: "numeric",
    });
    const yearFormat = Intl.DateTimeFormat("en-US", {
        year: "numeric",
    });
</script>

<script lang="ts">
    import type { Component } from "svelte";
    import type { SVGAttributes } from "svelte/elements";

    import { afterNavigate } from "$app/navigation";
    import { resolve } from "$app/paths";
    import Carousel from "$lib/components/Carousel.svelte";
    import Page from "$lib/components/Page.svelte";
    import Title from "$lib/components/Title.svelte";
    import ArrowLeft from "$lib/icons/arrow-left.svg?component";
    import Github from "$lib/icons/github.svg?component";
    import OpenInNew from "$lib/icons/open-in-new.svg?component";
    import { type Tag, tags } from "$lib/tags.js";
    import { technologies, type Technology } from "$lib/technologies.js";
    import { MetaTags } from "svelte-meta-tags";

    let { data } = $props();

    let goBack = $state(false);

    afterNavigate(
        ({ from, to }) =>
            void (goBack =
                from?.route.id === "/projects" &&
                to?.route.id === "/projects/[project]"),
    );
</script>

{#snippet iconLink(
    Icon: Component<SVGAttributes<SVGSVGElement>>,
    href: string,
    label: string,
)}
    <p>
        <!-- eslint-disable svelte/no-navigation-without-resolve -->
        <a
            class="inline-flex flex-row items-center gap-2 text-xl hover:underline"
            {href}
            rel="noopener noreferrer"
            target="_blank"
        >
            <!-- eslint-enable svelte/no-navigation-without-resolve -->
            <Icon class="text-2xl" aria-hidden="true" />
            <span>{label}</span>
        </a>
    </p>
{/snippet}

{#snippet tagList<T extends string>(
    title: string,
    list: readonly T[],
    map: Record<T, Tag & Technology>,
)}
    <p class="inline-flex flex-row flex-wrap items-center gap-2">
        {title}:

        {#each list as item (item)}
            {@const Icon = map[item].icon}

            <span
                class="inline-flex flex-row items-center gap-2 rounded-full bg-ctp-mantle px-2 py-1"
            >
                <Icon class="text-xl" aria-hidden="true" />
                <span class="text-base">
                    {map[item].label}
                </span>
            </span>
        {/each}
    </p>
{/snippet}

<MetaTags
    description={data.project.description?.join("\n")}
    openGraph={{
        images: data.project.images?.map((image) => {
            const i = "dark" in image ? image.dark : image;

            return {
                height: i.img.h,
                url: i.img.src,
                width: i.img.w,
            };
        }),
    }}
    title="{data.project.name} • toino"
/>

<Page class="mx-auto flex max-w-(--breakpoint-lg) flex-col gap-4">
    {#if data.project.images}
        <div class="flex aspect-video flex-row justify-center">
            <Carousel
                class="h-full overflow-hidden rounded-2xl *:h-full"
                automatic
                images={data.project.images}
                sizes="min(1920px, 100vw)"
            />
        </div>
    {/if}

    <article class="px-4">
        <header class="flex flex-row items-center gap-4">
            <a
                class="text-[size:--spacing(8)]"
                href={resolve("/projects")}
                onclick={(e) => {
                    if (goBack) {
                        e.preventDefault();
                        e.stopPropagation();
                        history.back();
                    }
                }}
                title="Back to projects"
            >
                <ArrowLeft aria-hidden="true" />
                <span class="sr-only">Back to projects</span>
            </a>

            <Title>{data.project.name}</Title>
        </header>

        {#if data.project.repo || data.project.url}
            <aside
                class="mt-4 flex flex-col gap-2 text-xl md:float-end md:ms-4 md:max-w-100"
            >
                {#if data.project.url}
                    {@render iconLink(
                        OpenInNew,
                        data.project.url,
                        "View project",
                    )}
                {/if}
                {#if data.project.repo}
                    {@render iconLink(Github, data.project.repo, "View code")}
                {/if}

                {@render tagList("Tags", data.project.tags, tags)}

                {@render tagList(
                    "Technologies",
                    data.project.technologies,
                    technologies,
                )}

                <p class="inline-flex flex-row flex-wrap items-center gap-2">
                    <span>Active development:</span>
                    <span>
                        {#if data.project.endDate}
                            {#if data.project.startDate.getDate() == data.project.endDate.getDate()}
                                {yearFormat.format(data.project.startDate)}
                            {:else}
                                {dateFormat.formatRange(
                                    data.project.startDate,
                                    data.project.endDate,
                                )}
                            {/if}
                        {:else}
                            {dateFormat.format(data.project.startDate)} &ndash; Present
                        {/if}
                    </span>
                </p>
            </aside>
        {/if}

        <div class="mt-4 text-lg">
            {#each data.project.description as par, i (i)}
                <p>{par}</p>
            {/each}
        </div>
    </article>
</Page>
