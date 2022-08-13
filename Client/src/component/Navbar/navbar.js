import React from 'react'
import './navbar.css'
// import Logo from "./component/logo/Logo";
import Logo from '../logo/Logo'
import { useNavigate } from 'react-router-dom'
//

// import { useAuthContext } from '../../AuthContext'
// import axios from '../axios'


export const Navbar = () => {

    const navigate = useNavigate()

//     const {user, updateUser, fetchUser} = useAuthContext();
//   
//   const logout = () => {
//     axios
//     .post('logout')
//     .then((response) => {
//       updateUser({})
//       navigate('/login');
//     })
//     .catch((error) => {
//       console.log(error)
//     });
//   };

//     if (user.role === 'hr'||user.role ==='HR')
//     document.getElementById("qwerty").disabled = false;
//     else
//     document.getElementById("qwerty").disabled = true;

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
                    <li>{<button className="button b" onClick={() => navigate("/Calendar")}>Calendar</button>}</li>
                    <li>{<button className="button b" onClick={() => navigate("/team-member")}>Team Members</button>}</li>
                    <li>{<button className="button b" id='qewrty' disabled="false" onClick={() => navigate("/add-emp")}>Add Emp.</button>}</li>
                    {/* <li> <Link to={"/add-employee"} >Add emp</Link> </li> */}
                    <li>{<button class="button b" onClick={() => navigate("/history")}>History</button>}</li>
                    <li>{<button class="button b" onClick={() => navigate("/PendingRequest")}>Pending Request</button>}</li>
                    <li>{<button class="button b" onClick={() => navigate("/AddTeam")}>Create Team</button>}</li>
                </ul>
            </div>

        </nav>
        
        </div>
  )
}

export default Navbar;