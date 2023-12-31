import {BrowserRouter ,Routes,Route,Navigate} from "react-router-dom"
import { useAuthContext } from "./hooks/useAuthContext";

import Navbar from "./components/navbar";
import Home from "./pages/Home";
import "bootstrap-icons/font/bootstrap-icons.css";
import Login from "./pages/login";
import Signup from "./pages/signup";

function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              exact
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />

            <Route
              exact
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />

            <Route
              exact
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
    </BrowserRouter>
      </div>
  );
}

export default App;
