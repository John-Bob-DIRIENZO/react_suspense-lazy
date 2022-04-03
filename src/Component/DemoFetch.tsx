import {useEffect, useState} from "react";

export default function DemoFetch() {
    const [fetchedData, setFetchedData] = useState<object>({})

    useEffect(() => {
        fetch('/manifest.json')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setFetchedData(data)
            })
    }, [])

    return (
        <div>
            {Object.entries(fetchedData)
                .map(([key, val]) => (
                    Array.isArray(val) ? '' : <p>{val}</p>
                ))
            }
        </div>
    )
}



