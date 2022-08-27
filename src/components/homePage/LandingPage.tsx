import styled from "styled-components";
import logo from '../../assets/images/burger.png';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import BrunchDiningIcon from '@mui/icons-material/BrunchDining';

export const LandingPage = () => {
    return (
        <HomeLp>
            <div className='lp-info'>
                <h4>Welcome To Our</h4>
                <h1>Healthy Food Collection!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet at, atque commodi consectetur
                    eligendi nam obcaecati voluptatem. Accusamus aliquam cum esse, expedita fuga laudantium nam natus
                    quae recusandae voluptatem.</p>
                <div className='food-time'>
                    <div className='time-info'>
                        <BrunchDiningIcon className='icon'/>
                        <div className='lp-details'>
                            <p>Lunch</p>
                            <span>01:00 - 03:00pm</span>
                        </div>
                    </div>
                    <span className='dotes'>......</span>
                    <div className='time-info'>
                        <LunchDiningIcon className='icon'/>
                        <div className='lp-details'>
                            <p>Dinner</p>
                            <span>07:00 - 10:00pm</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='image'></div>
        </HomeLp>
    )
}

export const HomeLp = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .lp-info {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    color: white;
    padding-top: 100px;

    h4 {
      font-size: 2rem;
      margin-bottom: 25px;
      background: linear-gradient(to right, #8956d8, #a4ee87 30%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    h1 {
      font-size: 5rem;
      color: #7b007b;
      margin-bottom: 25px;
      width: 100%;
    }

    p {
      color: black;
      font-size: 1rem;
      line-height: 27px;
      width: 100%;
    }

    .food-time {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-top: 40px;
      height: 80px;
      margin-left: 20px;
      max-width: 550px;
      border: 2px dotted black;
      border-radius: 120px;

      .time-info {
        display: flex;
        align-items: center;
      }

      .lp-details {
        position: relative;

        p {
          font-size: 1.2rem;
        }

        span {
          color: #6d6b6b;
          font-size: 0.9rem;
        }
      }

      .icon {
        margin-right: 12px;
        font-size: 2rem;
        color: #FC915F;
      }


      .dotes {
        position: absolute;
        transform: rotate(90deg);
        color: black;
      }
    }

  }

  .image {
    position: absolute;
    background-image: url(${logo});
    background-repeat: no-repeat;
    width: 500px;
    height: 500px;
    top: 30px;
    right: 0;
    z-index: 100;

    &:after {
      position: absolute;
      right: 0;
      content: "";
      width: 120px;
      height: 4px;
      background: #9542bf;
      border-radius: 300px;

    }

    &:before {
      position: absolute;
      right: -58.52px;
      top: 60px;
      transform: rotate(90deg);
      content: "";
      width: 120px;
      height: 3px;
      background: #9542bf;
      border-radius: 300px;
    }

  }
}
`
