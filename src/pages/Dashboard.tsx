import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom"

export const Dashboard = () => {
    const location = useLocation();

    function haskey<K extends string, T extends object>
        (key: K, object: T): object is T & Record<K, unknown> {
        return key in object
    }

    useEffect(() => {
        if(!(location.state && typeof location.state === 'object')){
            return;
        }

        if(!haskey('from', location.state)) {
            return;
        }

        if(!(typeof location.state.from === 'string')) {
            return;
        }

    }, [location.state]);

    return (
        <Link to='/' state={{ from2: 'teste' }}>
            Dashboard
        </Link>
    )
}

