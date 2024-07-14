"use client"
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useCountries } from "@/app/lib/getCountries";
import { icon, latLng } from "leaflet";


const Map = ({ location }: { location: string }) => {
  const { getCountryByValue } = useCountries();
  const latlang = getCountryByValue(location)?.latLang;
  console.log(latlang);
  const Icon = icon({
    iconUrl:
      "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png",
    iconSize: [50, 50],
  });

  return (
    <MapContainer
      center={latlang ?? [52.505, -0.09]}
      scrollWheelZoom={false}
      className="h-[50vh] relative rounded-lg z-0 "
      zoom={7}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker icon={Icon} position={latlang ?? [51.505, -0.09]}></Marker>
    </MapContainer>
  );
};

export default Map;
