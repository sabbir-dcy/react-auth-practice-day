import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../../../Auth/firebase.init";

export function RequireAuth(props) {
  const [user] = useAuthState(auth)
  const location = useLocation()


  /**
   * *jodi already login thake tahole login page e niye jabe
   * else, children page e niye jabe...children page holo store
   * karon amra Store page RequireAuth er children hisebe boshabo
   */
  if (!user) {
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
  }
  return props.children
} 