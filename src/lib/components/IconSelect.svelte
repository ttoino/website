<script lang="ts" generics="T extends string">
    import type { Component } from "svelte";

    import CheckIcon from "$lib/icons/check.svg?component";
    import { Select } from "bits-ui";
    import { fly } from "svelte/transition";
    import { fade } from "svelte/transition";

    interface BaseProps {
        items: Record<T, { icon: Component; label: string }>;
        label: string;
        name: string;
    }

    interface SingleProps extends BaseProps {
        multiple?: false;
        value: T;
    }

    interface MultipleProps extends BaseProps {
        allIcon?: Component;
        icon: Component;
        multiple: true;
        value: T[];
    }

    type Props = MultipleProps | SingleProps;

    let { value = $bindable(), ...props }: Props = $props();

    let keys = $derived(Object.keys(props.items) as T[]);
    let selected = $derived(!props.multiple ? props.items[value as T] : null);
    let Icon = $derived(props.multiple ? props.icon : selected?.icon);
</script>

<Select.Root
    type={props.multiple ? "multiple" : "single"}
    bind:value={value as never}
>
    <Select.Trigger
        class="hover:bg-ctp-surface0 flex cursor-pointer flex-row items-center rounded-full p-2 transition-colors ease-in-out"
    >
        <Icon class="text-2xl" aria-hidden="true" />

        <span class="sr-only">{props.label}</span>
    </Select.Trigger>
    <Select.Portal>
        <Select.Content
            forceMount
            sideOffset={8}
            align="center"
            collisionPadding={16}
            class="bg-ctp-surface0 flex max-h-80 w-60 flex-col overflow-auto rounded-sm py-1 shadow-sm"
        >
            {#snippet child({ open, props: p, wrapperProps })}
                <div {...wrapperProps}>
                    {#if open}
                        <div transition:fly={{ y: 20 }} {...p}>
                            {#each keys as key (key)}
                                <Select.Item
                                    class="outline-ctp-blue hover:bg-ctp-surface1 focus-within:outline-solid flex cursor-pointer flex-row items-center gap-2 p-2 outline-none outline-2 -outline-offset-2 transition-colors ease-in-out"
                                    value={key}
                                >
                                    {#snippet children({ selected })}
                                        {@const item = props.items[key]}
                                        {@const Icon = item.icon}

                                        <Icon
                                            class="text-2xl"
                                            aria-hidden="true"
                                        />

                                        <span>{item.label}</span>

                                        {#if selected}
                                            <span
                                                transition:fade={{
                                                    duration: 100,
                                                }}
                                                class="ml-auto text-2xl"
                                                aria-hidden="true"
                                            >
                                                <CheckIcon />
                                            </span>
                                        {/if}
                                    {/snippet}
                                </Select.Item>
                            {/each}
                        </div>
                    {/if}
                </div>
            {/snippet}
        </Select.Content>
    </Select.Portal>
</Select.Root>
