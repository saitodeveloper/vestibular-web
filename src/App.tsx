import { Routes, Route } from "react-router-dom";

import { LandingPage, UserPage, LoginPage, RegisterPage } from "@pages";

function App() {
    return (
        <Routes>
            <Route index path="/" element={<LandingPage />}></Route>
            <Route path="user" element={<UserPage />}>
                <Route path="login" element={<LoginPage />}></Route>
                <Route path="register" element={<RegisterPage />}></Route>
            </Route>
        </Routes>
    );
}

export default App;
