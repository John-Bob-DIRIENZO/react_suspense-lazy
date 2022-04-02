import {useCallback, useEffect, useState} from "react";

export default function DemoUseCallback() {
    const [number1] = useState<number>(3)
    const [number2] = useState<number>(2)
    const [sum, setSum] = useState<number[]>()

    // Ma fonction n'est plus pure, elle utilise des éléments
    // qui sont indépendants d'elle, ne déclare les dépendances
    const addStuffs = useCallback((): any[] => [number1 + number2], [number1, number2]);

    useEffect(() => {
        console.log(addStuffs())
        setSum(addStuffs())
    }, [addStuffs])

    return <>{sum}</>
}

















