import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './App.css';

function App() {
  return (
    <MapContainer center={[39.062245, 34.387842]} zoom={18} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[39.062245, 34.387842]}>
        <Popup>
          Mucur Meslek Yüksekokulu
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default App;
