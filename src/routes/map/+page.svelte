<script>
    import {onMount} from 'svelte';

    /** @type {import('./$types').PageData} */
	export let data;
    
    onMount(async () => {
        const Map = await import('$lib/services/map/Map');
        
        const map = new Map.default('map', 44.8401746, 15.8942923, 7);

        for (const castle of data.castles) {
            map.addMarker(
                castle.name,
                castle.lat,
                castle.long,
            );
        }
    });
</script>

<style>
    @import 'leaflet/dist/leaflet.css';

    #map {
        height: 100vh;
        width: 100%;
    }
</style>

<div id="map"></div>