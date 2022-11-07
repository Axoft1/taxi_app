/** Настройки Yandex maps */
import { YMaps, Map } from "@pbe/react-yandex-maps";

const MapApp = () => {
  return (
    <div className="h-screen  w-screen">
      <YMaps>
        <div>г.Мыски</div>
        <Map defaultState={{ center: [53.71, 87.81], zoom: 12 }} />
      </YMaps>
    </div>
  );
};

export default MapApp;
