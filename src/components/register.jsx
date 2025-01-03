import { createUserWithEmailAndPassword } from "firebase/auth";
import React, {useState} from "react";
import { auth, db } from "../config/firebase";
import { setDoc, doc } from "firebase/firestore";
import {toast} from "react-toastify";


function Register(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email,password);
            const user = auth.currentUser;
            console.log(user);
            if (user) {
                toast.success("El usuario se registro correctamente",{
                    position: "top-center",
                });
                console.log("Usuario registrado satisfactoriamente");

            }

        } catch (error) {
            console.log(error.message);
            toast.error(error.message, {
                position: "bottom-center"
            });
        }
    }

    return (
        <form onSubmit={handleRegister}>
            <h3>Registrate</h3>

            <div className="mb-3">
                <label>Email</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Ingresa tu email"
                    onChange={(e)=>setEmail(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label>Contraseña</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Ingresar contraseña"
                    onChange={(e)=> setPassword(e.target.value)}
                    required
                />
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Registrar
                </button>
            </div>

        </form>

    );

}
export default Register;