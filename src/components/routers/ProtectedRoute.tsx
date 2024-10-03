import { selectAuthenticatedDetail } from "@/states/userSlice";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

type ProtectedRouteProps = {
  element: React.FC | React.ComponentClass;
  title: string;
  authRequired?: boolean;
};

export default function ProtectedRoute({
  element: Component,
  title,
  authRequired = false,
  ...props
}: ProtectedRouteProps) {
  const { pathname, search } = useLocation();
  const { isAuthenticated } = useSelector(selectAuthenticatedDetail);

  return (
    <>
      {!authRequired || isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Navigate to={`/login?redirectUrl=${pathname}${search}`} replace />
      )}
    </>
  );
}
