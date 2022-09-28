import { Outlet, Navigate } from 'react-router-dom'

const AuthentificatedRoute = () => {
    // let auth = {'token':false}
    return(
        isLogged ? <Outlet /> : <Navigate to="/signup" />
    )
}

export default AuthentificatedRoute