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
import {auth} from "./config/firebase.js";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    })
  })
  return (
      <Router>
        <div className="App">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Routes>
                <Route
                  path="/"
                  element={user ? <Navigate to="/profile" /> : <Register />}
                />

                <Route path="/register" element={<Register />} />

              </Routes>
              <ToastContainer />
            </div>
          </div>
        </div>
      </Router>
  )
}

export default App;
