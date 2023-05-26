import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

import Lottie from "lottie-react";
import olympicsLoader from "../../public/olympics-loader.json";

const PrivetRoute = ({children}) => {
    console.log(children);
    const {user, loading} = useContext(AuthContext)
    if (loading) {
        return  <Lottie animationData={olympicsLoader} loop={true} />
    }

    if (!user) {
        return <Navigate to='/login'></Navigate>
    }
    return children

};

export default PrivetRoute;