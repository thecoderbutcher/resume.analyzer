import { useLocation, useRoutes } from "react-router-dom";
import { ROUTES } from "../constants/routes";

const AppRoutes = () => {
  const location = useLocation();
  const routes = useRoutes([...ROUTES]);

  return <div key={location.pathname}>{routes}</div>;
};

export default AppRoutes;
