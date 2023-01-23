import L from 'leaflet';
import 'leaflet.markercluster';

export default class Map {
    private map: L.Map;

    public constructor(
        id: string,
        lat: number,
        long: number,
        zoom: number,
    ) {
        this.map = L.map(id).setView([lat, long], zoom);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(this.map);
    }

    public createMarker(
        title: string,
        lat: number,
        long: number,
    ): L.Marker {
        return L
            .marker([lat, long])
            .bindPopup(title);
    }

    public addMarkerGroup(
        markers: L.Marker[],
    ): void {
        const markerGroup = L.markerClusterGroup();

        for (const marker of markers) {
            markerGroup.addLayer(marker);
        }

        this.map.addLayer(markerGroup);
    }
}