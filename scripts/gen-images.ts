import * as fs from "node:fs/promises";
import { type BrowserContext, chromium, type Page } from "playwright";

const SCALE = 3;

const basePreferences = {
    colorScheme: "no-preference",
    deviceScaleFactor: SCALE,
    viewport: {
        height: 2160 / SCALE,
        width: 3840 / SCALE,
    },
} as const;

const browser = await chromium.launch();
const context = await browser.newContext(basePreferences);
const lightContext = await browser.newContext({
    ...basePreferences,
    colorScheme: "light",
});
const darkContext = await browser.newContext({
    ...basePreferences,
    colorScheme: "dark",
});

const project = async (
    id: string,
    fn: (page: Page, screenshot: () => Promise<void>) => Promise<void>,
    themed = false,
) => {
    const helper = async (context: BrowserContext, suffix: string) => {
        const path = `./src/lib/images/projects/${id}${suffix}`;

        if ((await fs.readdir(path).catch(() => [])).length > 0)
            return console.log(`Skipped project ${id}${suffix}`);

        console.log(`Generating images for project ${id}${suffix}`);

        const page = await context.newPage();

        try {
            let index = 0;
            await fn(page, () =>
                page.screenshot({ path: `${path}/${index++}.png` }),
            );
        } catch (e) {
            console.error(
                `Caught error generating images for project ${id}${suffix}`,
            );
            console.error(e);
        }

        await page.close();
    };

    if (themed) {
        await helper(lightContext, "/light");
        await helper(darkContext, "/dark");
    } else {
        await helper(context, "");
    }
};

await project("atrellado", async (page, screenshot) => {
    await page.goto("https://atrellado.toino.pt");
    await page.getByText("Allow cookies").click();
    await screenshot();

    await page.goto("https://atrellado.toino.pt/login");
    await screenshot();
});

await project(
    "ementas",
    async (page, screenshot) => {
        await page.goto(
            "https://web.archive.org/web/20240426163128/https://ementas.toino.pt/en/660ee3c9b2a0add0337e66bc/2024-04-26/",
        );
        await page.locator("#wm-ipp-base").evaluate((e) => e.remove());
        await screenshot();

        await page.goto(
            "https://web.archive.org/web/20240905221505/https://ementas.toino.pt/en/",
        );
        await page.locator("#wm-ipp-base").evaluate((e) => e.remove());
        await screenshot();
    },
    true,
);

await project(
    "jmm",
    async (page, screenshot) => {
        await page.goto(
            "https://jmm.toino.pt/?code=Ly8gSW5zZXJ0IHlvdXIgY29kZSBoZXJlCgovLyBBZnRlciAzcywgaXQgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIGNvbXBpbGVkIGFuZCB0aGUgcmVzdWx0Ci8vIHdpbGwgYmUgc2hvd24gb24gdGhlIG90aGVyIHRhYnMuCi8vCi8vIEEgZ3JlZW4gY2lyY2xlIGluZGljYXRlcyB0aGF0IHRoZSBzdGVwIHdhcyBwZXJmb3JtZWQKLy8gc3VjY2Vzc2Z1bHksIHdoaWxlIGEgcmVkIGNpcmNsZSBpbmRpY2F0ZXMgdGhhdCB0aGVyZSB3ZXJlIGVycm9ycy4KCmltcG9ydCBpbzsKCmNsYXNzIEhlbGxvV29ybGQgewogICAgcHVibGljIHN0YXRpYyB2b2lkIG1haW4oU3RyaW5nW10gYXJncykgewogICAgICAgIGlvLnByaW50bG4oIkhlbGxvIHdvcmxkISIpOwogICAgfQp9Cg%3D%3D",
        );
        await page.getByText("Execution").click();
        await screenshot();
    },
    true,
);

await project(
    "latex-previewer",
    async (page, screenshot) => {
        await page.goto(
            "https://web.archive.org/web/20230806031004/https://latex.toino.pt/",
        );
        await page.locator("#wm-ipp-base").evaluate((e) => e.remove());
        await screenshot();
    },
    true,
);

await project("luis", async (page, screenshot) => {
    await page.goto("https://luis.toino.pt/search?query=");
    await screenshot();

    await page.goto("https://luis.toino.pt/");
    await screenshot();

    await page.goto("https://luis.toino.pt/story/ambitions-embrace");
    await screenshot();

    await page
        .getByRole("main")
        .getByRole("heading")
        .nth(2)
        .scrollIntoViewIfNeeded();
    await screenshot();

    await page.goto("https://luis.toino.pt/search?query=lux");
    await screenshot();
});

await project(
    "meterial-symbols",
    async (page, screenshot) => {
        await page.goto("https://meterial.toino.pt");
        const handle = page.getByRole("slider");
        const slider = handle.locator("xpath=..");
        await handle.dragTo(slider, { targetPosition: { x: 100, y: 0 } });
        await screenshot();
    },
    true,
);

await project(
    "sdle",
    async (page, screenshot) => {
        await page.goto(
            "https://sdle.toino.pt/1fe2b151-2177-4105-bca7-5f8adf3059c2",
            { waitUntil: "networkidle" },
        );
        await screenshot();

        await page.goto("https://sdle.toino.pt");
        await screenshot();
    },
    true,
);

await project("sgi", async (page, screenshot) => {
    await page.goto("https://sgi.toino.pt/tp1/", { timeout: 60000 });
    await screenshot();

    await page.goto("https://sgi.toino.pt/tp2/", { timeout: 60000 });
    await screenshot();

    await page.goto("https://sgi.toino.pt/tp3/", { timeout: 60000 });
    await screenshot();
});

await project(
    "svelte-m3c",
    async (page, screenshot) => {
        await page.goto("https://svelte-m3c-next.toino.pt/components");
        await screenshot();

        await page.goto("https://svelte-m3c-next.toino.pt/components/button");
        await screenshot();
    },
    true,
);

await project(
    "top-commiters",
    async (page, screenshot) => {
        await page.goto("https://commits.toino.pt/PT/contribs/");
        await screenshot();

        await page.goto("https://commits.toino.pt");
        await screenshot();
    },
    true,
);

await project(
    "website",
    async (page, screenshot) => {
        await page.goto("https://toino.pt");
        await screenshot();

        await page.goto("https://toino.pt/projects");
        await screenshot();
    },
    true,
);

await project(
    "xaufome",
    async (page, screenshot) => {
        await page.goto("https://xaufome.toino.pt");
        await screenshot();

        await page.goto("https://xaufome.toino.pt/login/");
        await screenshot();

        await page.goto("https://xaufome.toino.pt/restaurant/?id=1");
        await screenshot();
    },
    true,
);

await browser.close();
