import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase.config';
// import App from '../App';


export const AuthContexts = createContext(null)
const auth = getAuth(app);


const AuthPorvider = ({ children }) => {
    const [user, setUser] = useState(null)
    console.log(user);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        signOut(auth)
    }

    const singIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        user,
        createUser,
        singIn,
        logOut
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('auth state change', currentUser);
            setUser(currentUser)
        });

        return () =>{
            unsubscribe();
        }
    },[])

    return (
        <AuthContexts.Provider value={authInfo}>
            {children}
        </AuthContexts.Provider>
    );
};

export default AuthPorvider;