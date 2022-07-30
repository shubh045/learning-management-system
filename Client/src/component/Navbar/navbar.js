import React from 'react'
import './navbar.css'
// import Logo from "./component/logo/Logo";
import Logo from '../logo/Logo'
import Addemp from '../AddEmployee/AddEmployee'
import { useNavigate, Link } from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div>
        <nav className='main-nav'>
            {/* Logo Part */}
            <div className='icon'>
                <Logo />
            </div>

            {/* second logo part */}
            <div className='menu-link'>
                <ul>
                    <li>{<button class="button b" onclick="Hell()">Home</button>}</li>
                    <li>{<button class="button b" onClick={() => navigate("/apply-leave")}>Apply Leave</button>}</li>
                    <li>{<button class="button b">Holidays</button>}</li>
                    <li>{<button class="button b">View Profile</button>}</li>
                    <li>{<button class="button b">Add Emp.</button>}</li>
                    {/* <li> <Link to={"/add-employee"} >Add emp</Link> </li> */}
                    <li>{<button class="button b">History</button>}</li>
                    <li>{<button class="button b">Notification</button>}</li>
                </ul>
            </div>

        </nav>
        
        </div>
  )
}

export default Navbar;