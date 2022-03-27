import React, {Suspense} from 'react';

const Profile = React.lazy(() => import('./Profile'));
const OtherComponent = React.lazy(() => import('./OtherComponent'));

export default function MyComponent() {
    return (
        <div>
            <Suspense fallback={<div>Chargement...</div>}>
                <Profile/>
                <OtherComponent/>
            </Suspense>
        </div>
    );
}

