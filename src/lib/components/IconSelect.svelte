<script lang="ts" generics="T extends string">
    /* global T */

    import type { ListboxProps } from "@rgossiaux/svelte-headlessui/components/listbox/Listbox.svelte";

    import type { ComponentType } from "svelte";

    import {
        Listbox,
        ListboxButton,
        ListboxOptions,
        ListboxOption,
    } from "@rgossiaux/svelte-headlessui";

    interface $$Props extends ListboxProps<"div"> {
        value: T;
        options: Record<T, { label: string; icon: ComponentType }>;
    }

    export let value: T;
    export let options: Record<T, { label: string; icon: ComponentType }>;

    $: keys = Object.keys(options) as T[];
</script>

<Listbox {...$$restProps} bind:value class="relative">
    <ListboxButton class="text-2xl p-2 rounded-full hover:bg-mantle"
        ><svelte:component this={options[value].icon} /></ListboxButton
    >
    <ListboxOptions
        class="absolute bg-base shadow-sm z-10 rounded-sm mt-2 right-0 flex flex-col w-64"
    >
        {#each keys as value (value)}
            {@const { label, icon } = options[value]}
            <ListboxOption
                {value}
                class="flex flex-row gap-2 p-4 hover:bg-mantle cursor-pointer"
            >
                <svelte:component this={icon} class="text-2xl" />
                <span>{label}</span>
            </ListboxOption>
        {/each}
    </ListboxOptions>
</Listbox>
