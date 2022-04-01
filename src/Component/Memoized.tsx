import React from "react";

// Le rendu de ce composant est uniquement dépendant de ses props,
// Je peux utiliser React.meme
export const Memoized = React.memo(function ({element}: { element: string }) {
    return (
        <li className='list-group-item'>{element}</li>
    )
})

// Je l'utilise ensuite exactement comme un composant standard
export function List({elements}: { elements: string[] }) {
    return (
        <ul>
            {elements.map(el => <Memoized element={el}/>)}
        </ul>
    )
}

