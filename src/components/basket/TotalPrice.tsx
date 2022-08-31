import styled from "styled-components";

export const TotalPrice = () => {
    return (
        <Total>
            <p>Your Shopping Cart</p>
            <hr/>
            <div className='total-info-details'>
                <p>Total amount</p>
                <span>$26.98</span>
            </div>
            <button className='order'>Place an Order</button>
        </Total>
    )
}

export const Total = styled.div`
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 0 12px #dfd6d6;
  min-width: 260px;

  hr {
    background: #030303;
    margin: 1rem 0;
  }


  p {
    font-size: 0.9rem;
  }


  .total-info-details {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      color: #6a6666;
      font-size: 1rem;
    }

    span {
      font-size: 1.1rem;
    }

    .total {
      color: orange;
    }
  }

  .order {
    margin-top: 2rem;
    padding: 0.6rem 1.5rem;
    background: #f85b00;
    border-radius: 120px;
    color: white;
    cursor: pointer;
    border: none;
    font-size: 1rem;
    transition: 250ms ease-in;

    &:hover {
      background: #f79434;
      color: #494746;
    }
  }
`