export interface Interest {
    description: string;
    id: string;
    models: string[];
    name: string;
}

const interestsWithoutModels = [
    { description: "", id: "cubing", name: "Cubing" },
    {
        description: "",
        id: "gaming",
        name: "Gaming",
    },
    {
        description: "",
        id: "music",
        name: "Music",
    },
] as const satisfies readonly Omit<Interest, "models">[];

const interestModels: Record<string, string> = import.meta.glob("./*/*.glb", {
    base: "./models/interests",
    eager: true,
    import: "default",
    query: "url",
});

export const interests = interestsWithoutModels.map((interest) => ({
    ...interest,
    models: Object.entries(interestModels)
        .filter(([name]) => name.includes(interest.id))
        .map(([, model]) => model),
}));
