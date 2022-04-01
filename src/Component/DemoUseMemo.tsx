import {useEffect, useMemo, useState} from "react";

interface DataInterface {
    name: string,
    number: number
}

export default function DemoUseMemo() {
    const [data, setData] = useState<DataInterface>({name: "", number: 0});

    const fib = (n: number): number => {
        return (n <= 1) ? n : fib(n - 1) + fib(n - 2)
    }

    // Je mets le résultat en mémoire et, si aucun des éléments en dépendance
    // ne change, je ressors la valeur en mémoire plutôt que de re-calculer
    const memoFib = useMemo(() => fib(data.number), [data.number]);

    const handleChange = (e: any) => {
        setData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }


    return (
        <div className="container mt-5">
            <h2 className="text-center">Salut {data.name}, voila le nombre correspondant à l'entrée {data.number} de la
                suite de Fibonacci : {memoFib}</h2>
            <form className='mt-5'>
                <input type="text" name='name' placeholder='name' onChange={handleChange}
                       className='form-control'/><br/>
                <input type="number" name='number' placeholder='number, please under 40 !' onChange={handleChange}
                       className='form-control'/>
            </form>

        </div>
    )
}







