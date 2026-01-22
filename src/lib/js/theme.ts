const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

const storageTheme = localStorage.getItem("theme");

const theme =
    storageTheme === "dark" || storageTheme === "light"
        ? storageTheme
        : mediaQuery.matches
          ? "dark"
          : "light";

document.documentElement.classList.toggle("dark", theme === "dark");
