import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import ShopContext from '../store/store';

import './MainNavigation.css';

const mainNavigation = props =>{

  const {total} = useContext(ShopContext);
  console.log(total);

  return (
      <header className="main-navigation">
        <nav>
          <ul>
            <li>
              <NavLink to="/">Products</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart ({props.cartItemNumber})</NavLink>
            </li>
            <li>
              total: {total}
            </li>
          </ul>
        </nav>
      </header>
  );
}

export default mainNavigation;
