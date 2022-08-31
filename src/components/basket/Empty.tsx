import styled from "styled-components";

export const Empty = () => {
    return (
        <Em>
            <EmptyCart>Your Shopping Cart is empty.</EmptyCart>
        </Em>

    )
}
export const Em = styled.div`
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FC915F;
  width: 50%;
  margin: auto;
  border-radius: 30px;
`

export const EmptyCart = styled.p`
  text-align: center;
  color: white;
  margin: 2rem;
`