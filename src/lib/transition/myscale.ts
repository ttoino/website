import {
    scale,
    type ScaleParams,
    type TransitionConfig,
} from "svelte/transition";

export const myScale = (
    node: Element,
    config: ScaleParams,
): TransitionConfig => {
    const defaultScale = scale(node, config);

    const parent = node.parentElement;

    const top =
        node.getBoundingClientRect().top -
        (parent?.getBoundingClientRect().top ?? 0);
    const left =
        node.getBoundingClientRect().left -
        (parent?.getBoundingClientRect().left ?? 0);

    return {
        ...defaultScale,
        css: (t, u) => {
            return (
                defaultScale.css?.(t, u) +
                `
                top: ${top}px;
                left: ${left}px;
            `
            );
        },
    };
};
