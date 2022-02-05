import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faHome } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faInbox } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";

function Navbar() {
  return <div>
      <ul className='navbar'>
        <li>
          <img src='./logo192.png' alt="profile-pic"/>
        </li>
        
        <NavLink end to="/">
        <li>
          <FontAwesomeIcon icon={faHome} />
        </li>
        </NavLink>
        
        <NavLink end to="/messages">
        <li>
          <FontAwesomeIcon icon={faPaperPlane} />
        </li>
        </NavLink>

        <NavLink end to="/inbox">
        <li>
          <FontAwesomeIcon icon={faInbox} />
        </li>
        </NavLink>

        <NavLink end to="/notifications">
        <li>
          <FontAwesomeIcon icon={faBell} />
        </li>
        </NavLink>

        <NavLink end to="/settings">
        <li>
          <FontAwesomeIcon icon={faEllipsisH} />
        </li>
        </NavLink>
      </ul>
  </div>;
}

export default Navbar;
