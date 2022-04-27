import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import { publicRoutes, privateRoutes } from "./routesArray/routesArray";
const RoutesSelect = ({ isLogined }) => {
    const { isLoading } = useContext(AuthContext);
    if (isLoading)
    {
        return ''
    }
    return (
        <Routes>
            {
                isLogined
                    ? privateRoutes.map(item => <Route element={item.component} path={item.path} key={item.path}></Route>)
                    : publicRoutes.map(item => <Route element={item.component} path={item.path} key={item.path}></Route>)
            }
        </Routes>
    )

}
export default RoutesSelect;