import {createContext, useEffect, useState, useContext} from "react";
import {auth, db} from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import {setDoc, doc} from "firebase/firestore";

const AuthContext = createContext();

export function AuthContextProvider({children}) {
  const [user, setUser] = useState({});

  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        var users = userCredential.user;
        // ...
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          alert("The email address is already in use");
        } else if (error.code === "auth/invalid-email") {
          alert("The email address is not valid.");
        } else if (error.code === "auth/operation-not-allowed") {
          alert("Operation not allowed.");
        } else if (error.code === "auth/weak-password") {
          alert("The password is too weak.");
        }
      });
    return setDoc(doc(db, "users", email), {
      savedShows: []
    });
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{signUp, logOut, logIn, user}}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
