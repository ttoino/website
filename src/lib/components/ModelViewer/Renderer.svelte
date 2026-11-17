<script lang="ts">
    import { useTask, useThrelte } from "@threlte/core";
    import {
        BloomEffect,
        EffectComposer,
        EffectPass,
        RenderPass,
        SMAAEffect,
        ToneMappingEffect,
        ToneMappingMode,
    } from "postprocessing";
    import { onMount } from "svelte";
    import { HalfFloatType, NoToneMapping } from "three";

    const {
        autoRender,
        camera,
        renderer,
        renderStage,
        scene,
        size,
        toneMapping,
    } = useThrelte();

    const composer = new EffectComposer(renderer, {
        frameBufferType: HalfFloatType,
    });

    $effect(() => {
        composer.removeAllPasses();
        composer.addPass(new RenderPass(scene, $camera));
        composer.addPass(
            new EffectPass(
                $camera,
                new BloomEffect({
                    intensity: 0.25,
                    luminanceThreshold: 2,
                }),
                new SMAAEffect(),
                new ToneMappingEffect({ mode: ToneMappingMode.ACES_FILMIC }),
            ),
        );
    });
    $effect(() => {
        composer.setSize($size.width, $size.height);
    });

    onMount(() => {
        const oldAutoRender = $autoRender;
        $autoRender = false;

        const oldToneMapping = $toneMapping;
        $toneMapping = NoToneMapping;

        return () => {
            $autoRender = oldAutoRender;
            $toneMapping = oldToneMapping;
        };
    });

    useTask((t) => composer.render(t), {
        autoInvalidate: false,
        stage: renderStage,
    });
</script>
