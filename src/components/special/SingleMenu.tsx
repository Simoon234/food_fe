import styled from "styled-components";
import img from "../../assets/images/menu1.png";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {useState} from "react";

export const SingleCard = () => {
    const [active, setActive] = useState(false);

    const addToFav = () => {
        setActive(prev => !prev)
    }


    return (
        <MenuCard>
            <FavoriteBorderIcon onClick={addToFav} className={active ? 'fav-heart active' : 'fav-heart'}/>
            <div className='menu-image-box'>
                <img src={img} alt=""/>
            </div>
            <div className='card-details'>
                <div className='card-top'>
                    <h3>Pepperoni Pizza</h3>
                    <p>Pizza</p>
                </div>
                <p>Great taste!</p>
                <div className='card-bottom'>
                    <span>$60.00</span>
                    <button>Add to cart</button>
                </div>
            </div>
        </MenuCard>
    )
}


export const MenuCard = styled.div`
  width: 300px;
  height: 360px;
  margin: 1rem 0;
  position: relative;
  background: #f7c75b;


  .fav-heart {
    position: absolute;
    background: #e2b63a;
    right: 9px;
    width: 30px;
    height: 30px;
    border-radius: 20%;
    color: black;
    top: 5px;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .active {
    background: #5d1389;
    color: white;
  }

  .menu-image-box {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: -webkit-linear-gradient(-56deg, #FFFBF5 50%, #a69ed6 50%);
  }

  .card-details {
    padding: 2rem;
    color: #434343;

    .card-top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1.5rem;

      p {
        font-size: 0.8rem;
      }
    }

    p {
      font-size: 0.8rem;
      margin-bottom: 1rem;
    }

    .card-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        width: 120px;
        padding: 0.5rem 0;
        border-radius: 3px;
        background: #FFFBF5;
        border: none;
        cursor: pointer;
        font-size: 1.05rem;
        color: #5038dc;
        transition: 250ms ease-out;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
`