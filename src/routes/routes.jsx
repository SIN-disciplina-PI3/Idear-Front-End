import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home.jsx'
import Login from '../pages/Login.jsx'

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}

export default AppRoutes;