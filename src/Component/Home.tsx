import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div className="container">
            <h1 className="text-center">Le monde de la home</h1>
            <Link to='/profile' className='btn btn-primary'>Vers le profile</Link>
        </div>
    )
}
