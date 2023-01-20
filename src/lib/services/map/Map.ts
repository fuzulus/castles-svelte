import L from 'leaflet';

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

    public addMarker(
        title: string,
        lat: number,
        long: number,
    ): void {
        L
            .marker([lat, long])
            .bindPopup(title)
            .addTo(this.map);
    }
}