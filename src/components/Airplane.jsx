import AirplaneImg from '../assets/fighter-Airplane.png';

export default function Airplane() {
    return (
        <div className='min-h-screen'>
            <img className="size-42 absolute bottom-6 left-1/2 -translate-x-1/2" src={AirplaneImg} alt="Fighter Airplane" />
        </div>
    );
}
