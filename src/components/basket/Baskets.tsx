import styled from "styled-components"
import {TotalPrice} from "./TotalPrice";
import {SingleBasket} from "./SingleBasket";

export const Baskets = () => {
    let test = false;
    return (
        <BasketsWrapper>
            <WrapperComponent>
                {/*{test ? <SingleBasket/> : <Empty/>}*/}
                <SingleBasket/>
                <SingleBasket/>
                <SingleBasket/>
            </WrapperComponent>
            <aside>
                <TotalPrice/>
            </aside>
        </BasketsWrapper>
    )
}

export const BasketsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
`


export const WrapperComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`