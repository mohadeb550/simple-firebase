import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";

export default function Login() {

    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
       signInWithPopup(auth, provider)
       .then(result => {
        const user = result.user;
        console.log(user)
       } )
       .catch((error)=>{
        console.log(error.message)
       })
    }

  return (
    <div>
        <button onClick={handleGoogleSignIn}> Google Login </button>
    </div>
  )
}
