import { Link, useLocation } from "react-router-dom"

export const Home = () => {
    const location = useLocation();

    console.log(location);
    return (
        <Link to='/dashboard' state={{from: 'teste'}}>
            Dashboard
        </Link>
    )
}

