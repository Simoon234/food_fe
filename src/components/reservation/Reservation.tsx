import {SectionLayout} from "../common/SectionLayout";
import styled from "styled-components";
import table from "../../assets/images/reservation.jpg"

export const Reservation = () => {
    let user = false;
    return (
        <ReservationWrapper>
            <div className='image-box'>
                <img src={table} alt=""/>
            </div>
            <div className='reservation-wrapper'>
                <SectionLayout text='Welcome' title='Would You like to Book A table With Us' description='Take a few
            simple steps to book a table'/>
                {user ? <form className='reservation'>
                    <label htmlFor="name">
                        <input type="text" placeholder='Your name'/>
                    </label>
                    <label htmlFor="phone">
                        <input type="tel" id='phone' placeholder='Your phone number. Example: 123-451-678'
                               pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"/>
                    </label>
                    <select name="table-type" id="">
                        <option value=''>Table type</option>
                        <option value="2">2</option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                    </select>
                    <div className='reservation-date'>
                        <label htmlFor="date">
                            <input placeholder='Date' min='1' max='31' type="number"/>
                        </label>
                        <label htmlFor="month">
                            <input placeholder='Month' type="number" min='1' max='12'/>
                        </label>
                        <label htmlFor="month">
                            <input placeholder='Month' type="time" min='1' max='12'/>
                        </label>
                    </div>
                </form> : <h1>Looks like you are not logged in.</h1>}
                {user ? <button type='submit' className='to-book'>To Book</button> :
                    <button type='submit' className='to-book'>Login</button>}
            </div>
        </ReservationWrapper>
    )
}

export const ReservationWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  position: relative;
  margin-top: 6rem;

  .image-box {
    position: relative;
  }

  img {
    position: absolute;
    width: 600px;
    height: 700px;
    right: 720px;
    top: -370px;
    margin-right: 5rem;
    border-radius: 12px;
  }

  .reservation {
    width: 500px;
    margin-top: 1rem;
    padding: 1rem 0;

    select {
      padding: 0.5rem;
      border-radius: 120px;
    }
  }

  .reservation input, select {
    width: 100%;
    padding: 0.8rem;
    border-radius: 120px;
    margin: 1rem 0;
    border: 1px solid #d97618;
    transition: 250ms ease;
    outline: none;
    box-shadow: 0 0 3px #f5900a;
    cursor: pointer;

    &:focus {
      background: #f8f2f2;
      outline: none;
    }
  }

  .reservation-wrapper {
    position: relative;
  }

  .reservation-date {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .to-book {
    width: 220px;
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 120px;
    cursor: pointer;
    background: #d97618;;
    color: white;
    font-size: 1rem;
    border: 1px solid #d97618;
  }


`