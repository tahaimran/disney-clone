import { BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Dashboard from "../components/Dashboard/dashboard";
import Login from "../components/Login/login";



function AppRouter() {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/dashboard' element={<Dashboard />} />

            </Routes>
        </Router>
    )
}
export default AppRouter;