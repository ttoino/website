<script lang="ts">
    import { Canvas, T } from "@threlte/core";
    import { OrbitControls, useProgress } from "@threlte/extras";
    import { NoToneMapping } from "three";

    import Environment from "./Environment.svelte";
    import Model from "./Model.svelte";
    import Renderer from "./Renderer.svelte";

    let {
        url,
    }: {
        url: string;
    } = $props();

    const { progress } = useProgress();
</script>

<div class="grid grid-cols-1 grid-rows-1">
    <div
        class="col-start-1 row-start-1 transition-opacity duration-1000"
        class:opacity-0={$progress < 1}
    >
        <Canvas toneMapping={NoToneMapping}>
            <Renderer />

            <Environment />

            <T.PerspectiveCamera makeDefault position={[2, 1, 2]}>
                <OrbitControls
                    autoRotate
                    enablePan={false}
                    enableZoom={false}
                    maxDistance={2}
                    minDistance={2}
                />
            </T.PerspectiveCamera>

            <Model {url} />
        </Canvas>
    </div>
    <div
        class="pointer-events-none col-start-1 row-start-1 flex items-center justify-center text-center text-4xl transition-opacity duration-1000"
        class:opacity-0={$progress == 1}
    >
        L O A D I N G
    </div>
</div>
