<script lang="ts" generics="T extends string">
    /* global T */
    import { fly } from "svelte/transition";
    import type { ComponentType } from "svelte";
    import { focusTrap } from "svelte-focus-trap";
    import { clickoutside } from "@svelte-put/clickoutside";
    import { shortcut } from "@svelte-put/shortcut";
    import CheckIcon from "$lib/icons/check.svg?component";
    import { fade } from "svelte/transition";

    interface BaseProps {
        items: Record<T, { label: string; icon: ComponentType }>;
        name: string;
        label: string;
    }

    interface SingleProps extends BaseProps {
        multiple?: false;
        value: T;
    }

    interface MultipleProps extends BaseProps {
        multiple: true;
        value: T[];
        icon: ComponentType;
        allIcon?: ComponentType;
    }

    type $$Props = SingleProps | MultipleProps;

    export let multiple = false;
    export let items: $$Props["items"];
    export let value: $$Props["value"];
    export let name: $$Props["name"];
    export let label: $$Props["label"];

    let open = false;
    let clicked = false;

    $: keys = Object.keys(items) as T[];
    $: selected = multiple ? undefined : items[value as T];
</script>

<svelte:window
    use:shortcut={{
        enabled: open,
        trigger: {
            key: "Escape",
            callback: () => (open = false),
        },
    }}
/>

<div class="relative">
    <button
        on:click={() => (open = !open) && (clicked = true)}
        class="flex cursor-pointer flex-row items-center rounded-full p-2 transition-colors ease-in-out hover:bg-surface0"
        aria-haspopup="menu"
        id={name}
    >
        <svelte:component
            this={multiple ? $$props["icon"] : selected?.icon}
            class="text-2xl"
            aria-hidden="true"
        />

        <span class="sr-only">{label}</span>
    </button>

    {#if open}
        <div
            class="absolute right-0 z-10 flex max-h-80 w-60 translate-y-1 flex-col overflow-auto rounded bg-surface0 shadow"
            transition:fly={{ y: 20 }}
            use:focusTrap
            use:clickoutside
            on:clickoutside={() =>
                clicked ? (clicked = false) : (open = false)}
            role="menu"
            aria-labelledby={name}
            tabindex="-1"
        >
            {#if multiple}
                <label
                    class="flex cursor-pointer flex-row items-center gap-2 p-2 outline-2 -outline-offset-2 outline-blue transition-colors ease-in-out focus-within:outline hover:bg-surface1"
                >
                    <input
                        type="checkbox"
                        checked={value.length === keys.length}
                        on:change={() =>
                            (value = value.length === keys.length ? [] : keys)}
                        class="sr-only"
                        role="menuitemcheckbox"
                        aria-checked={value.length === keys.length}
                    />

                    <svelte:component
                        this={$$props["allIcon"] ?? $$props["icon"]}
                        class="text-2xl"
                        aria-hidden="true"
                    />

                    <span>All</span>

                    {#if value.length === keys.length}
                        <span
                            transition:fade={{ duration: 100 }}
                            class="ml-auto text-2xl"
                            aria-hidden="true"
                        >
                            <CheckIcon />
                        </span>
                    {/if}
                </label>
            {/if}
            {#each keys as item}
                <label
                    class="flex cursor-pointer flex-row items-center gap-2 p-2 outline-2 -outline-offset-2 outline-blue transition-colors ease-in-out focus-within:outline hover:bg-surface1"
                >
                    {#if multiple}
                        <input
                            type="checkbox"
                            bind:group={value}
                            value={item}
                            class="sr-only"
                            {name}
                            role="menuitemcheckbox"
                            aria-checked={value.includes(item)}
                        />
                    {:else}
                        <input
                            type="radio"
                            bind:group={value}
                            value={item}
                            class="sr-only"
                            {name}
                            role="menuitemradio"
                            aria-checked={value === item}
                            on:click={() => (open = false)}
                        />
                    {/if}

                    <svelte:component
                        this={items[item].icon}
                        class="text-2xl"
                        aria-hidden="true"
                    />

                    <span>{items[item].label}</span>

                    {#if multiple && value.includes(item)}
                        <span
                            transition:fade={{ duration: 100 }}
                            class="ml-auto text-2xl"
                            aria-hidden="true"
                        >
                            <CheckIcon />
                        </span>
                    {/if}
                </label>
            {/each}
        </div>
    {/if}
</div>
