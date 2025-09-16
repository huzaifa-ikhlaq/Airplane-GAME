import { useState, useEffect, useRef } from 'react';
import AirplaneImg from '../assets/fighter-Airplane.png';

export default function Airplane({ airplaneRef }) {
    const [position, setPosition] = useState(0);    
    const airplaneWidth = 128;

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowLeft") {
                setPosition((prev) => Math.max(prev - 20, 0)); // move left, stop at 0
            } else if (event.key === "ArrowRight") {
                setPosition((prev) =>
                    Math.min(prev + 20, window.innerWidth - airplaneWidth)
                );
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div className=''>
            <img className="size-32 absolute  bottom-4 " style={{ left: position }} ref={airplaneRef} src={AirplaneImg} alt="Fighter Airplane" />
        </div>
    );
}