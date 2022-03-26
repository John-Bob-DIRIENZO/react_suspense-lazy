import {Link} from "react-router-dom";

export default function Profile() {
    return (
        <div className="container">
            <h1 className="text-center">Hello monde du profile</h1>
            <Link to='/' className='btn btn-primary'>Vers la home</Link>
        </div>
    )
}
