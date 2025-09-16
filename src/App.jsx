import { useState, useEffect, useRef } from 'react';
import Meteorite from './components/Meteorite';
import Airplane from './components/Airplane';

export default function App() {
  const airplaneRef = useRef(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScore((prev) => prev + 1);
    }, 15000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="h-screen w-full object-cover relative overflow-hidden" style={{ backgroundImage: "url(/space.jpg)" }} id="space">
      <div className='bg-black opacity-70 absolute top-0 left-0 w-full h-full'></div>
      <dir className='bg-neutral-700 absolute z-50 top-1 right-1 rounded-lg flex justify-center items-center h-8 px-8'>
        <span className='text-lg text-white'> Score: {score}</span>
      </dir>
      <Meteorite
        airplaneRef={airplaneRef}
        setScore={setScore}
        score={score}
        className="relative z-50"
      />
      <Airplane airplaneRef={airplaneRef} className="relative z-50" />
    </div>
  );
}