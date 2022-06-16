import { createContext, useContext, useEffect, useState } from "react";
import {
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    RecaptchaVerifier,
    signInWithPhoneNumber,
} from "firebase/auth";
import { authentication } from '../../config';

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState({});

    function logOut() {
        return signOut(authentication);
    }
    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(authentication, googleAuthProvider);
    }

    function setUpRecaptha(number) {
        const recaptchaVerifier = new RecaptchaVerifier(
            "recaptcha-container",
            {},
            authentication
        );
        recaptchaVerifier.render();
        return signInWithPhoneNumber(authentication, number, recaptchaVerifier);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(authentication, (currentuser) => {
            console.log("Auth", currentuser);
            setUser(currentuser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <userAuthContext.Provider
            value={{
                user,
                logIn,
                logOut,
                googleSignIn,
                setUpRecaptha,
            }}
        >
            {children}
        </userAuthContext.Provider>
    );
}

export function useUserAuth() {
    return useContext(userAuthContext);
}