import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";


import { toast } from "react-toastify";
import {auth} from "../config/firebase.jsx";


function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email,password);
            console.log("Usuario Logeado correctamente");
            window.location.href = "/home";
            toast.success("El usuario se logueo correctamente",{
                position: "top-center"
            });


        } catch (error) {
            console.log(error.message);
            toast.error("Usuario incorrecto", {
                position: "bottom-center"
            });
        }
    }

    return (
        <form onSubmit={handleRegister}>
            <h3>Iniciar Sesion</h3>
            <div className="mb-3">
                <label>Email</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Ingresa tu email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>Contraseña</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Ingresar contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Iniciar Sesion
                </button>
            </div>
            <p className="forgot-password text-rigth">
                Nuevo usuario <a href="/register">Registrate</a>
            </p>

        </form>
    );
}
export default Login;