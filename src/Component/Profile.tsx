import {Link} from "react-router-dom";

interface ProfilePropsInterface {
    name: string
}

export default function Profile({name}: ProfilePropsInterface) {
    return (
        <div className="container">
            <h1 className="text-center">Hello {name.toUpperCase()}</h1>
            <Link to='/' className='btn btn-primary'>Vers la home</Link>
        </div>
    )
}
