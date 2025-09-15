import Meteorite from './components/Meteorite';
import Airplane from './components/Airplane';

export default function App() {
  return (
    <div className="h-screen w-full object-cover relative overflow-hidden" style={{ backgroundImage: "url(/space.jpg)" }} id="space">
      <Meteorite />
      <Airplane />
    </div>
  );
}