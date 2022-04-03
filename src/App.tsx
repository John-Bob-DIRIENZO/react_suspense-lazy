import React, {Suspense} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ErrorBoundary from "./Component/ErrorBoundary";
import {List} from "./Component/Memoized";
import DemoUseMemo from "./Component/DemoUseMemo";
import DemoUseCallback from "./Component/DemoUseCallback";
import DemoUseRef from "./Component/DemoUseRef";
import PromisesDemo from "./Component/PromisesDemo";
import DemoFetch from "./Component/DemoFetch";

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
        <ErrorBoundary fallback={<h1>Oops, c'est cassé !</h1>}>
            <div className="container text-center">
                <BrowserRouter>
                    <Suspense fallback={<div style={loader}>Je charge !</div>}>
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/memo' element={<DemoUseMemo/>}/>
                            <Route path='/callback' element={<DemoUseCallback/>}/>
                            <Route path='/ref' element={<DemoUseRef/>}/>
                            <Route path='/promise' element={<PromisesDemo/>}/>
                            <Route path='/fetch' element={<DemoFetch/>}/>
                            <Route path="/list" element={<List elements={['Coucou', 'Francis', 'Huster']}/>}/>
                            <Route path="/profile" element={<Profile name='Francis'/>}/>
                        </Routes>
                    </Suspense>
                </BrowserRouter>
            </div>
        </ErrorBoundary>
    );
}









