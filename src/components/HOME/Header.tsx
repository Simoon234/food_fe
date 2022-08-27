import styled from "styled-components";
import {Link, NavLink} from 'react-router-dom';
import {Avatar} from '@mui/material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export const HeaderComponent = () => {
    let user = false;
    return (
        <Header>
            <Link to='/'><h2>FooD</h2></Link>
            <div className='links'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about-us'>About us</NavLink>
                <NavLink to='/reservation'>Reservation</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </div>
            <div className='rightHeader'>
                <span>2</span>
                <Link to='/basket'><ShoppingCartIcon className='cart'/></Link>
                {user ? <Link to='/user'><Avatar className='avatar' alt="Remy Sharp" src="/static/images/avatar/1.jpg"/></Link> :
                    <Link to='/login'><PermIdentityIcon className='defaultIcon'/> </Link>}
            </div>
        </Header>
    )
}

export const Header = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  color: ${(props) => props.theme.colors.background};

  h2 {
    font-size: ${(props) => props.theme.fontSize.lg};
  }

  .links {
    font-size: ${(props) => props.theme.fontSize.sm};

    a {
      position: relative;
      padding: 1rem;
      margin-left: 0.5rem;
      transition: 250ms ease-in-out;

      &:hover {
        color: #080808;
      }
    }

    .active {
      position: relative;
      color: black;

      &:after {
        position: absolute;
        content: "";
        display: block;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        bottom: 5px;
        left: 50%;
        background-color: #000000;
      }
    }

    a:last-child {
      padding: 1rem 0 1rem 1rem;
    }
  }

  .rightHeader {
    position: relative;
    color: ${(props) => props.theme.colors.background};
    display: flex;
    align-items: center;
    cursor: pointer;

    span {
      position: absolute;
      top: -10px;
      color: #030303;
      right: 25px;
      font-size: 1.2rem;
    }

    .cart {
      font-size: 24px;
      margin-right: 10px;
    }

    .avatar {
      margin-left: 10px;
    }

    .defaultIcon {
      font-size: 26px;
    }
  }
`