import React, { useEffect, useState } from "react";
import {auth} from "../config/firebase.jsx";

function Home(){
    const [userDetails] = useState(null);
    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            console.log(user);


        });
    };
    useEffect(() => {
        fetchUserData();
    }, []);

    async function handleLogout() {
        try {
            await auth.signOut();
            window.location.href = "/login";
            console.log("User logged out successfully!");
        } catch (error) {
            console.error("Error logging out:", error.message);
        }
    }
    return (
        <div>


                    <h3>🙏🙏</h3>
                    <div>
                        <h3>HOLA</h3>
                        {/* <p>Last Name: {userDetails.lastName}</p> */}
                    </div>
                    <button className="btn btn-primary" onClick={handleLogout}>
                        Logout
                    </button>

        </div>
    );
}
export default Home;