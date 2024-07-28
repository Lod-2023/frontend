import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import Homepage from "./views/Homepage";
import Registerpage from "./views/Registerpage";
import Loginpage from "./views/Loginpage";
import Dashboard from "./views/Dashboard";
import Navbar from "./views/Navbar";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
    return (
        <Router>
            <AuthProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/register" element={<Registerpage />} />
                    <Route path="/login" element={<Loginpage />} />
                    <Route element={<PrivateRoute />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route>
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App;
