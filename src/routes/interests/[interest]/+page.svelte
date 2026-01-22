<script lang="ts">
    import ModelViewer from "$lib/components/ModelViewer/ModelViewer.svelte";

    let { data } = $props();
</script>

<div class="flex-1 p-8">
    <p>{data.interest.description}</p>
</div>

<ModelViewer url={data.model} />
