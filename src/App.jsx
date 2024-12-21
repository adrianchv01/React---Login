import {useEffect, useState} from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"

import Register from './components/register';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {auth} from "./config/firebase.jsx";
import Login from "./components/login.jsx";
import Home from "./components/home.jsx";

function App() {
  const [user, setUser] = useState(null);  // Estado inicial es null
  const [loading, setLoading] = useState(true);  // Nuevo estado para saber si aún estamos esperando la autenticación

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);  // Actualiza el estado con el usuario autenticado
      setLoading(false);  // Una vez que tenemos el usuario, dejamos de cargar
    });

    return () => unsubscribe();  // Limpiar la suscripción cuando el componente se desmonte
  }, []);

  if (loading) {
    return <div>Loading...</div>;  // Mientras cargamos el estado de autenticación
  }
  return (
      <Router>
        <div className="App">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Routes>
                <Route
                  path="/"
                  element={user ? <Navigate to="/home" /> : <Login />}
                />

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/home"
                    element={user ? <Home /> : <Navigate to="/login" />}
                />

              </Routes>
              <ToastContainer />
            </div>
          </div>
        </div>
      </Router>
  )
}

export default App;
