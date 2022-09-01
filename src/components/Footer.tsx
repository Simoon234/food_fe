import styled from "styled-components";
import {Link} from "react-router-dom";
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';

export const Footer = () => {
    return (
        <FooterComp>
            <div className='footer-header'>
                <div className='footer-left-side'>
                    <h3 className='logo'>FooD</h3>
                    <DinnerDiningIcon className='icon'/>
                </div>
                <div className='about'>
                    <h3>About Us</h3>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/menu'>Menu</Link>
                        </li>
                        <li>
                            <Link to='/about-us'>About Us</Link>
                        </li>
                    </ul>
                </div>
                <div className='information'>
                    <h3>Information</h3>
                    <ul>
                        <li>
                            <Link to='#reservation'>About Us</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className='schedule'>
                    <h3>Schedule</h3>
                    <p>Monday - Friday</p>
                    <p>10:00 Am - 6:00 Pm</p>
                </div>
            </div>
            <span className='line'/>
            <p>2022 Szymon 🔥👨‍💻</p>
        </FooterComp>
    )
}

export const FooterComp = styled.div`
  height: 25vh;
  margin: 1rem 0 3rem 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .footer-header {
    display: flex;
    justify-content: space-between;


    .logo {
      background: linear-gradient(to right, #d97317, #d2d267 90%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .icon {
      font-size: 4rem;
      color: #ca9d42;
    }

    .about ul, .information ul, .schedule ul {
      transition: 250ms ease-in;
    }

    .about h3, .information h3, .schedule h3 {
      color: black;
      font-size: 1.1rem;
      margin-bottom: 2rem;
    }


    .about li, .information li, .schedule li {
      margin-bottom: 1rem;
    }

    .about a, .information a, .schedule p {
      color: #6a6666;
      font-size: 0.9rem;
      font-style: italic;
    }

    .about a, .information a {
      &:hover {
        color: orange;
      }
    }
  }

  .line {
    width: 100%;
    background: #544f4f;
    padding: 0.05rem;
    margin-top: 1rem;
  }

  p {
    margin-top: 1rem;
    font-size: 0.8rem;
    font-style: italic;
  }
`