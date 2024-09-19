import { createContext, useEffect, useState } from "react";
import { loginRequest } from "./authentication.service";
import { initializeApp, getApp, getApps } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  getAuth,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthenticationContext = createContext();

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDmKjPYAVuV21WzbePNSEuEIC74i1_Fvy8",
  authDomain: "foodtogo-d9247.firebaseapp.com",
  projectId: "foodtogo-d9247",
  storageBucket: "foodtogo-d9247.appspot.com",
  messagingSenderId: "596026741629",
  appId: "1:596026741629:web:0cf61d13cd27c2ca80b214",
};

let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

let auth;
try {
  auth = getAuth();
} catch (e) {
  const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
}

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usr) => {
      if (usr) {
        setUser(usr);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(auth, email, password)
      .then(async (u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      setIsLoading(false);
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
    });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
