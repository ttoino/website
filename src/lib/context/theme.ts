import { getContext, setContext } from "svelte";

const KEY = "theme";

export const setTheme = (theme: () => "dark" | "light") =>
    setContext(KEY, theme);

export const getTheme = () => getContext<() => "dark" | "light">(KEY);
