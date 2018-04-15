export class ESLocation {

  lat: number;
  lon: number;

  constructor(lat: number, lon: number) {
    this.lat = lat;
    this.lon = lon;
  }

  equals(lat: number, lon: number) {
    return this.lat == lat && this.lon == lon;
  }
}
