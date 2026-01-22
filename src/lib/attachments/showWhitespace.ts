import type { Attachment } from "svelte/attachments";

const addWhitespace = (character: string, element: Node) => {
    if (!(element instanceof HTMLElement)) return;

    if (element.children.length > 0)
        for (const child of element.children) addWhitespace(character, child);
    else if (element.textContent.length > 0) {
        element.dataset.content = element.textContent;
        element.dataset.whitespaceContent = element.textContent
            .replaceAll(" ", `${character}\u200B`)
            .replaceAll(new RegExp(`[^${character}\u200B]`, "g"), "\u00A0");
    }
};

export const showWhitespace =
    (character: string): Attachment =>
    (element) => {
        addWhitespace(character, element);

        const observer = new MutationObserver((records) => {
            for (const record of records)
                if (
                    record.type === "characterData" &&
                    record.target.parentElement
                )
                    addWhitespace(character, record.target.parentElement);
                else if (record.type === "childList")
                    for (const node of record.addedNodes)
                        addWhitespace(character, node);
        });

        observer.observe(element, {
            characterData: true,
            childList: true,
            subtree: true,
        });

        return () => observer.disconnect();
    };
