import React, {Suspense} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Je charge en Lazy Loading mon component <Profile/> mais pour qu'on puisse voir l'effet
// du chargement, je passe une promesse qui ne va se résoudre qu'après 1 seconde
const Profile = React.lazy(() => new Promise<any>(resolve =>
        setTimeout(() => resolve(import('./Component/Profile')), 1000)
    )
);

// Normalement on ferait comme ça
const Home = React.lazy(() => import('./Component/Home'));

export default function App() {
    const loader = {
        width: "100%",
        height: "100vh",
        backgroundColor: 'red',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '50px'
    };

    return (
        <div className="container text-center">
            <BrowserRouter>
                <Suspense fallback={<div style={loader}>Je charge !</div>}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </div>
    );
}
