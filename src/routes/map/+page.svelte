<script>
    import {onMount} from 'svelte';
    import L from 'leaflet';

    /** @type {import('./$types').PageData} */
	export let data;
    
    onMount(() => {
        const map = L.map('map').setView([44.8401746, 15.8942923], 7);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        for (const castle of data.castles) {
            L
                .marker([castle.lat, castle.long])
                .bindPopup(castle.name)
                .addTo(map);
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