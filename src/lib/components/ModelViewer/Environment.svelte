<script lang="ts">
    import { Environment } from "@threlte/extras";
    import dayHdri from "$lib/images/hdri/day.hdr?url";
    import nightHdri from "$lib/images/hdri/night.hdr?url";

    // TODO
    const theme = () => "dark";

    let url = $derived(theme() === "dark" ? nightHdri : dayHdri);
</script>

<Environment {url} />
