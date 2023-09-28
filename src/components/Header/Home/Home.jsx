import { NavLink } from "react-router-dom";


export default function Home() {
  return (
    <div className="m-5 text-blue-600">
        <NavLink to='/' className='text-xl font-semibold'>  Home </NavLink>
        <NavLink to='/login'  className='text-xl font-semibold'> Login </NavLink>
    </div>
  )
}
