import { useEffect, useState } from "react";
import MeteoriteImg from "../assets/meteorite.png";

export default function Meteorite() {
    const [active, setActive] = useState([false, false, false, false, false]);

    useEffect(() => {
        // loop through each meteorite
        active.forEach((_, index) => {
            function animate() {
                // turn on animation
                setActive((prev) => {
                    const newArr = [...prev];
                    newArr[index] = true;
                    return newArr;
                });

                // turn off animation after 3s (reset)
                setTimeout(() => {
                    setActive((prev) => {
                        const newArr = [...prev];
                        newArr[index] = false;
                        return newArr;
                    });

                    // restart after a delay (random 4–8s)
                    setTimeout(animate, Math.random() * 4000 + 4000);
                }, 3000);
            }

            animate(); // start animation loop
        });
    }, []);

    return (
        <div>
            <div className="flex justify-between">
                {active.map((isActive, i) => (
                    <img
                        key={i}
                        className={`size-30 relative -top-36 ${isActive ? "Meteoriete-anim" : ""}`}
                        src={MeteoriteImg}
                        alt={`Meteorite ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
