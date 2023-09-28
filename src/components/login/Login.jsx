 import { BsGoogle } from 'react-icons/bs'
 import { BsGithub } from 'react-icons/bs'
 import { getAuth , signInWithPopup , GoogleAuthProvider ,GithubAuthProvider ,signOut } from 'firebase/auth';
 import app from '../../firebase/firebase.init';
import { useState } from 'react';


export default function Login() {

  const [ userInfo , setUserInfo ] = useState(null)

  const auth = getAuth(app);
  const googleAuthProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();


  const handleSignInGoogle = () => {
  signInWithPopup(auth, googleAuthProvider)
  .then(result => setUserInfo(result.user))
  .catch(error => console.log(error))
  }


  const handleSignInGithub = () => {
    signInWithPopup(auth, githubProvider)
    .then(result => setUserInfo(result.user) )
    .catch(error => console.log(error))
  }


  const handleSignOut = () => {
    signOut(auth)
    .then(result => setUserInfo(null))
    .catch(error => console.log(error.message))
  }



  return (
    <>
  {userInfo?  <button className="bg-orange-100 p-2 rounded m-3" onClick={handleSignOut}> Sign Out <BsGoogle className='inline'/> </button> :
  
  <>
  <button className="bg-orange-100 p-2 rounded m-3" onClick={handleSignInGoogle}> Login with Google <BsGoogle className='inline'/> </button>

  <button className="bg-orange-100 p-2 rounded m-3" onClick={handleSignInGithub}> Login with Github  <BsGithub className='inline'/> </button>
  </>
}
    {
      userInfo &&  <div>
      <h2> {userInfo.displayName || 'Name not found' } </h2>
      <p> {userInfo.email || 'Email Not found ' } </p>
      <img src={userInfo.photoURL}/>
    </div>
    }
   
    </>
  )
}
