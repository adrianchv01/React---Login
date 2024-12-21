import { createUserWithEmailAndPassword } from "firebase/auth";
import React, {useState} from "react";
import { auth } from "../config/firebase";


function Register(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email,password);
            const user = auth.currentUser;
            console.log(user);
            if (user) {
                await setDoc(doc(db, "Users", "user.uid"));
                console.log("Usuario registrado satisfactoriamente");
                toast.success("El usuario se registro correctamente");
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