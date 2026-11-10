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

    const nodeRect = node.getBoundingClientRect();
    const parentRect = parent?.getBoundingClientRect();

    const top = nodeRect.top - (parentRect?.top ?? 0);
    const left = nodeRect.left - (parentRect?.left ?? 0);

    return {
        ...defaultScale,
        css: (t, u) =>
            `${defaultScale.css?.(t, u) ?? ""}
            top: ${top}px;
            left: ${left}px;`,
    };
};
