import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router-dom";

//* Your web app's Firebase configuration

  const firebaseConfig = {
    apiKey: "AIzaSyCdkY90XFFAn8jCeiVLThF-9XNt1dye1g8",
    authDomain: "movie-app-react-774b2.firebaseapp.com",
    projectId: "movie-app-react-774b2",
    storageBucket: "movie-app-react-774b2.appspot.com",
    messagingSenderId: "169688560580",
    appId: "1:169688560580:web:b8549f783e613e0e34ea91"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
 const auth = getAuth(app);

export const createUser = async (email,password,navigate) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
    console.log(userCredential);
  } catch (error) {
    alert(error.message);
  }
};

export const signIn = async (email , password,navigate) => {
  try {
    await signInWithEmailAndPassword(auth,email,password)
 
  navigate("/") }
  catch (error) {
    console.log(error.message)
  }
}
