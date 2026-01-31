import { MapPin } from "lucide-react";
import L from "leaflet";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icons in Leaflet with bundlers
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Mumbai area - suitable for transit demo (Thakur College region)
const DEFAULT_CENTER: [number, number] = [19.2066, 72.8756];
const DEFAULT_ZOOM = 12;

export function LiveMap() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="flex h-[360px] items-center justify-center rounded-xl border border-white/10 bg-slate-900/50">
        <div className="flex flex-col items-center gap-2 text-slate-400">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-electric-blue border-t-transparent" />
          <span className="text-sm">Loading map…</span>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-900/50">
      <MapContainer
        center={DEFAULT_CENTER}
        zoom={DEFAULT_ZOOM}
        className="h-[360px] w-full rounded-xl"
        scrollWheelZoom={true}
        style={{ background: "#0f172a" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={DEFAULT_CENTER} icon={defaultIcon}>
          <Popup>
            <div className="flex items-center gap-2 text-slate-800">
              <MapPin className="h-4 w-4 text-electric-blue" />
              <span className="font-semibold">Transit demo area</span>
            </div>
            <p className="mt-1 text-sm text-slate-600">
              Drop real-time vehicle positions or route overlays here.
            </p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
