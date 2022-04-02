import {useEffect, useRef, useState} from "react";

export default function DemoUseRef() {
    const [timer, setTimer] = useState<number>(0)
    const interval = useRef<any>()

    useEffect(() => {
        // Je stock l'id du timer pour pouvoir le stopper
        interval.current = setInterval(
            () => {
                setTimer(timer + 1)
            },
            1000)

        // Quand je démonte le composant je stoppe le timer
        return () => clearInterval(interval.current)
    }, [timer])

    const stopTimer = () => {
        clearInterval(interval.current)
    }

    const restartTimer = () => {
        setTimer(timer + 1)
    }

    return (
        <div>
            <h1>{timer}</h1>
            <button onClick={stopTimer}>STOP !</button>
            <button onClick={restartTimer}>Restart !</button>
        </div>
    )
}






