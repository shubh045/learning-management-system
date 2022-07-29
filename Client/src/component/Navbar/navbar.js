import React from 'react'
import './navbar.css'
// import Logo from "./component/logo/Logo";
import Logo from '../logo/Logo'

export const Navbar = () => {
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
                    <li>{<button class="button b">Apply Leave</button>}</li>
                    <li>{<button class="button b">Holidays</button>}</li>
                    <li>{<button class="button b">View Profile</button>}</li>
                    <li>{<button class="button b">Add Emp.</button>}</li>
                    <li>{<button class="button b">History</button>}</li>
                    <li>{<button class="button b">Notification</button>}</li>
                </ul>
            </div>

        </nav>
        <section className='hero-section'>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                
        <h1>Welcome to HR Home Page</h1>
        </section>
        </div>
  )
}

export default Navbar;