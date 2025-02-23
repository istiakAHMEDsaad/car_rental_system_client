import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return (
      <Spinner/>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to={"/login"} state={location.pathname} />;
};

PrivateRoutes.propTypes = {
  children: PropTypes.object.isRequired,
};

export default PrivateRoutes;

/* 
<div className="min-h-[calc(100vh-248px)] flex items-center justify-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
*/