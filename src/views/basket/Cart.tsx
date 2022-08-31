import styled from "styled-components";
import {SectionLayout} from "../../components/common/SectionLayout";
import cart from '../../assets/images/wave-cart.svg'
import {PathComponent} from "../../components/common/Path";
import {Baskets} from "../../components/basket/Baskets";

export const Basket = () => {
    return (
        <>
            <Image>
                <div className='bg img'/>
            </Image>
            <PathComponent/>
            <BasketWrapper>
                <SectionLayout text='Cart' title='Shopping Cart'
                               description='We tried to provide you with the most necessary information.'/>
                <Baskets/>
            </BasketWrapper>
        </>

    )
}

export const Image = styled.div`
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    aspect-ratio: 960/550;
    min-width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -1;
  }

  .img {
    background-image: url(${cart})
  }

`
export const BasketWrapper = styled.div`
  position: relative;
  min-height: 100vh;
`