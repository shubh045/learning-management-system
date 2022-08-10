import React from 'react'
import './navbar.css'
// import Logo from "./component/logo/Logo";
import Logo from '../logo/Logo'
import { useNavigate } from 'react-router-dom'

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
                    <li>{<button className="button b" onClick={() => navigate("/")}>Home</button>}</li>
                    <li>{<button className="button b" onClick={() => navigate("/apply-leave")}>Apply Leave</button>}</li>
                    <li>{<button className="button b" onClick={() => navigate("/Holiday")}>Holidays</button>}</li>
                    <li>{<button className="button b" onClick={() => navigate("/team-member")}>Team Members</button>}</li>
                    <li>{<button className="button b" onClick={() => navigate("/add-emp")}>Add Emp.</button>}</li>
                    {/* <li> <Link to={"/add-employee"} >Add emp</Link> </li> */}
                    <li>{<button className="button b" onClick={() => navigate("/history")}>History</button>}</li>
                    <li>{<button className="button b" onClick={() => navigate("/PendingRequest")}>Pending Request</button>}</li>
                </ul>
            </div>

        </nav>
        
        </div>
  )
}

export default Navbar;