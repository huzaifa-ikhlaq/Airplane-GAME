import { useRef, useEffect, useState } from "react";
import MeteoriteImg from "../assets/Meteorite.png";

export default function Meteorite({ airplaneRef, setScore, score }) {
    const meteoriteRef1 = useRef(null);
    const meteoriteRef2 = useRef(null);
    const meteoriteRef3 = useRef(null);
    const meteoriteRef4 = useRef(null);
    const meteoriteRef5 = useRef(null);

    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        function startMeteoriteAnimation(el, className, duration, restartDelay) {
            if (!el) return;

            // assign a new random X position before starting animation
            const randomX = Math.floor(Math.random() * (window.innerWidth - 100));
            el.style.left = `${randomX}px`;

            el.classList.add(className);

            setTimeout(() => {
                el.classList.remove(className);

                // restart after delay with new random X
                setTimeout(
                    () => startMeteoriteAnimation(el, className, duration, restartDelay),
                    restartDelay
                );
            }, duration);
        }

        startMeteoriteAnimation(meteoriteRef1.current, "Meteoriete-1", 7100, 500);
        startMeteoriteAnimation(meteoriteRef2.current, "Meteoriete-2", 7900, 600);
        startMeteoriteAnimation(meteoriteRef3.current, "Meteoriete-3", 7500, 500);
        startMeteoriteAnimation(meteoriteRef4.current, "Meteoriete-4", 6300, 500);
        startMeteoriteAnimation(meteoriteRef5.current, "Meteoriete-5", 9000, 500);

        // ✅ Collision loop
        const checkCollision = () => {
            if (!airplaneRef.current) return;

            const airplaneBox = airplaneRef.current.getBoundingClientRect();
            const meteorites = [
                meteoriteRef1.current,
                meteoriteRef2.current,
                meteoriteRef3.current,
                meteoriteRef4.current,
                meteoriteRef5.current,
            ];

            for (let m of meteorites) {
                if (!m) continue;
                const meteorBox = m.getBoundingClientRect();

                // simple AABB collision check
                const isColliding =
                    airplaneBox.left < meteorBox.right &&
                    airplaneBox.right > meteorBox.left &&
                    airplaneBox.top < meteorBox.bottom &&
                    airplaneBox.bottom > meteorBox.top;

                if (isColliding) {
                    setGameOver(true);
                    return; // stop once game over
                }
            }
        };

        const interval = setInterval(checkCollision, 100);
        return () => clearInterval(interval);
    }, [airplaneRef]);

    return (
        <div className='relative'>
            <div className="absolute top-0 left-0 w-full h-full">
                <img ref={meteoriteRef1} className="size-27 absolute -top-36" src={MeteoriteImg} alt="Meteorite 1" />
                <img ref={meteoriteRef2} className="size-27 absolute -top-36" src={MeteoriteImg} alt="Meteorite 2" />
                <img ref={meteoriteRef3} className="size-27 absolute -top-36" src={MeteoriteImg} alt="Meteorite 3" />
                <img ref={meteoriteRef4} className="size-27 absolute -top-36" src={MeteoriteImg} alt="Meteorite 4" />
                <img ref={meteoriteRef5} className="size-27 absolute -top-36" src={MeteoriteImg} alt="Meteorite 5" />
            </div>

            {gameOver && (
                <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-60 z-50 flex flex-col justify-center items-center">
                    <span className="text-4xl font-bold text-red-600 mb-6">
                        GAME OVER 💀
                    </span>
                    <div className="bg-neutral-600 text-white rounded-xl px-6 py-4 flex flex-col gap-5">
                        You scored: {score}
                        <button className='bg-green-600 p-2 rounded-xl cursor-pointer text-amber-50' onClick={() => setGameOver(false)}>Play Again</button>

                    </div>
                </div>
            )}

        </div>
    );
}
