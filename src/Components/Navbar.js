import React from 'react';
import './Navbar.css'; // Import your CSS file
import { useAuth0 } from "@auth0/auth0-react";
function Navbar() {
  const { logout ,isAuthenticated ,user } = useAuth0();


  return (
    <div className="navbar">
      <div className="logo">
        Todo App
      </div>
      <div className="nav-buttons">
       {isAuthenticated && <strong><p>{user.name}</p></strong>}  
        {isAuthenticated && (
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className="btn" >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
