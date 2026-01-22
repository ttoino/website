<script lang="ts">
    import { useThrelte } from "@threlte/core";
    import { GLTF, useGltfAnimations } from "@threlte/extras";
    import { Box3, type Group, Vector3 } from "three";

    const TARGET_SIZE = 1;
    const TARGET_POSITION = new Vector3(0, 0, 0);

    interface Props {
        url: string;
    }

    let { url }: Props = $props();

    const { size } = useThrelte();

    let scene: Group | undefined = $state();

    $effect(() => {
        if (scene) {
            const aabb = new Box3().setFromObject(scene);
            const sceneSize = aabb.getSize(new Vector3());
            const center = aabb.getCenter(new Vector3());

            const maxSize = Math.max(sceneSize.x, sceneSize.y, sceneSize.z);
            let scale = TARGET_SIZE / maxSize;
            if ($size.height > $size.width) scale *= $size.width / $size.height;
            const offset = center.clone().negate().multiplyScalar(scale);

            scene.scale.setScalar(scale);
            scene.position.copy(TARGET_POSITION).add(offset);
        }
    });

    const { actions, gltf } = useGltfAnimations();

    $effect(() => {
        Object.values($actions).forEach((a) => a?.play());
    });
</script>

<GLTF {url} bind:gltf={$gltf} bind:scene />
