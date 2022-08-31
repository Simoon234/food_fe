import styled from "styled-components";
import {SectionLayout} from "../../components/common/SectionLayout";
import {PathComponent} from "../../components/common/Path";
import {Baskets} from "../../components/basket/Baskets";
import {Image} from "../../assets/styled/HeaderStyle";

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


export const BasketWrapper = styled.div`
  position: relative;
  min-height: 100vh;
`