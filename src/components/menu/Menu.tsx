import {SectionLayout} from "../common/SectionLayout";
import styled from "styled-components";
import menu1 from '../../assets/images/menu1.png';
import menu2 from '../../assets/images/menu2.png';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import React, {useMemo, useState} from "react";

export const Menu = () => {
    const [add, setAdd] = useState(0);

    //STARS
    const fiveStars = useMemo(() => {
        const arr2 = Array.from(Array(5).keys());
        return arr2.map(() => {
            return <StarBorderIcon/>
        });
    }, []);

    //TEST
    const addToBasket = () => {
        setAdd((prev) => prev + 1)
    }

    return (
        <>
            <SectionLayout text='Menu' title='Our favorite menu' description='There is a huge selection of delicious
            food on our menu, so everyone will find something to taste.'/>
            <ListOfFav>
                <div className='meal-box'>
                    <div className='imageBox'>
                        <img src={menu1} alt=""/>
                    </div>
                    <div className='meal-details'>
                        <h2>Berry Lettuce</h2>
                        <div className='meal-opinions'>
                            {fiveStars.map((item, i) =>
                                <span key={i}>{item}</span>
                            )}
                            <span>(999)</span>
                        </div>
                        <p>$32.00</p>
                    </div>
                    <span onClick={addToBasket} className='addToBasket'/>
                </div>
                <div className='meal-box'>
                    <div className='imageBox'>
                        <img src={menu2} alt=""/>
                    </div>
                    <div className='meal-details'>
                        <h2>Berry Lettuce</h2>
                        <div className='meal-opinions'>
                            {fiveStars.map((item, i) =>
                                <span key={i}>{item}</span>
                            )}
                            <span>(999)</span>
                        </div>
                        <p>$32.00</p>
                    </div>
                    <span onClick={addToBasket} className='addToBasket'/>
                </div>
                <div className='meal-box'>
                    <div className='imageBox'>
                        <img src={menu1} alt=""/>
                    </div>
                    <div className='meal-details'>
                        <h2>Berry Lettuce</h2>
                        <div className='meal-opinions'>
                            {fiveStars.map((item, i) =>
                                <span key={i}>{item}</span>
                            )}
                            <span>(999)</span>
                        </div>
                        <p>$32.00</p>
                    </div>
                    <span onClick={addToBasket} className='addToBasket'/>
                </div>
            </ListOfFav>
        </>
    )
}

export const ListOfFav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  margin-top: 4rem;

  .meal-box {
    position: relative;
    width: 320px;
    height: 150px;
    background-color: #2C373A;
    margin: 2rem 0 5rem 0;
    border-radius: 8px;

    .imageBox {
      position: relative;

      img {
        position: absolute;
        left: -80px;
        top: -80px;
        width: 150px;
        height: 150px;
      }
    }

    .addToBasket {
      position: absolute;
      background: linear-gradient(to right, #ff4000, #db9110 99%);
      right: 0;
      bottom: 0;
      padding: 0.3rem;
      width: 40px;
      text-align: center;
      border-top-left-radius: 12px;
      cursor: pointer;


      &:after {
        content: "+";
        font-size: 1.9rem;
        color: white;
        transition: 250ms ease-in;
      }

      &:hover:after {
        color: #000000;
      }
    }

    .meal-details {
      text-align: center;
      padding: 1rem;
      color: white;

      .meal-opinions {
        display: flex;
        align-items: center;
        justify-content: center;

        span {
          font-size: 0.8rem;
        }
      }

      h2, p {
        margin: 1.1rem 0;
      }
    }
  }
`