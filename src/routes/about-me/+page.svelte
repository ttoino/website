<script lang="ts">
    import { resolve } from "$app/paths";
    import Page from "$lib/components/Page.svelte";
    import Title from "$lib/components/Title.svelte";
    import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags title="About me • toino" />

<Page class="flex max-w-screen-md flex-col gap-8">
    <Title>About me</Title>

    <div
        class="flex flex-col gap-4 text-lg text-ctp-text **:[a]:font-bold **:[a]:hover:underline"
    >
        <p>
            Hey, I'm João, a software engineer at
            <a class="text-ctp-peach" href="https://cloudflare.com">
                Cloudflare
            </a>
            based in Portugal. I spend most of my time building things with
            <a class="text-ctp-yellow" href="https://svelte.dev/">
                Svelte<span class="text-ctp-surface2">(</span>Kit<span
                    class="text-ctp-surface2">)</span
                >
            </a>
            and
            <a class="text-ctp-blue" href="https://www.typescriptlang.org/">
                TypeScript
            </a>, and I'm pretty obsessed with both.
        </p>

        <p>
            I completed my Bachelor's and Master's in Informatics and Computing
            Engineering at
            <a class="text-ctp-maroon" href="https://fe.up.pt"> FEUP </a>. I
            spent a semester abroad at the University of Leiden in the
            Netherlands, which was a blast.
        </p>

        <p>
            Previously, I worked at Fraunhofer on mobile health apps and ML
            research, and I also TA'd a Compilers class in university. While
            studying I was active at
            <a class="text-ctp-red" href="https://niaefeup.pt">NIAEFEUP</a>,
            where I helped build websites for big student conferences like
            <a class="text-ctp-flamingo" href="https://2023.sinf.pt/">SINF</a>
            and
            <a
                class="text-ctp-sapphire"
                href="https://web.archive.org/web/20250428154304/https://eneiconf.pt/"
            >
                ENEI
            </a>, and contributed to open-source projects used by students every
            day.
        </p>

        <p>
            When I'm not coding, I'm probably tinkering with my self-hosted
            setup, exploring new tech, or ricing my
            <a class="text-ctp-sky" href="https://nixos.org/">NixOS</a>
            setup. Check out my
            <a class="text-ctp-teal" href="https://github.com/ttoino/dotfiles">
                dotfiles
            </a>.
        </p>

        <p>
            Want to see what I've built? Check out my <a
                class="text-ctp-lavender"
                href={resolve("/projects")}
            >
                projects
            </a>.
        </p>
    </div>
</Page>
