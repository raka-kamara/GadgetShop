import { createContext } from "react"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

export const AuthContext = createContext(null);

const auth = getAuth(app);




const AuthProvider = () => {

    const googleProvider = new GoogleAuthProvider()

    const CreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const Login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const Logout = ()=>{
        return signOut(auth);
    }

    const GoogleLogin = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    const authInfo = {
        CreateUser, Login, Logout, GoogleLogin
    };

  return (
    <div>AuthProvider</div>
  )
}

export default AuthProvider