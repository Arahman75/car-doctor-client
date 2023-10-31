import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signIn user
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Observer user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false)
        });
        return () => {
            return unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;