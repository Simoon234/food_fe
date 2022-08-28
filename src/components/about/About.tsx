import styled from "styled-components";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import food from '../../assets/images/food.jpg';
import {SectionName} from "../common/SectionName";

export const About = () => {
    return (
        <AboutBox>
            <div className='about-info-left'>
                <SectionName text='About us'/>
                <h3>Let Us Tell You a Little About Ourselves</h3>
                <p className='about-text'>Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus aliquam, animi assumenda autem consectetur consequatur eveniet expedita in, iusto
                    laudantium natus nesciunt omnis optio praesentium. Q
                    uas quis suscipit ullam voluptatibus. dolor sit amet, consectetur adipisicing elit. <br/>
                    <br/> Beatae cumque delectus, exercitationem illum in ipsam molestiae necessitatibus pariatur
                    quibusdam quidem quo repellendus saepe sapiente tempora voluptates. Debitis nemo perferendis unde?
                </p>
                <div className='about-info-read-more'>
                    <span>Read More</span>
                    <KeyboardDoubleArrowRightIcon className='icon'/>
                </div>
            </div>
            <img className='image' src={food} alt="table with meals"/>
        </AboutBox>
    )
}

export const AboutBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 4rem;

  .image {
    min-width: 500px;
    border-radius: 12px;
    box-shadow: 0 0 12px #6d6d6d;
    margin-left: 5rem;
  }

  .about-info-left {
    position: relative;
    
    h3 {
      width: 70%;
      font-size: 2.2rem;
      line-height: 3rem;
      margin: 1.3rem 0 3rem 0;
    }

    .about-text {
      font-size: 1rem;
      max-width: 700px;
      line-height: 2rem;
      color: #807b7b;
      text-align: justify;
    }

    span {
      font-size: 1.1rem;
    }

    .about-info-read-more {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      cursor: pointer;

      span {
        margin-right: 1rem;
        padding: 0.5rem 0;
        transition: 250ms linear;

        &:hover {
          color: #8956d8;
        }
      }

      .icon {
        color: #FC915F;
        font-size: 1.7rem;
        animation: slide 4s linear infinite;
      }

      @keyframes slide {
        0% {
          opacity: 0;
          transform: translateX(20px);
        }
        20% {
          opacity: 1;
          transform: translateX(10px);
        }
        80% {
          opacity: 1;
          transform: translateX(-20px);
        }
        100% {
          opacity: 0;
          transform: translateX(-5px);
        }
      }
    }
  }
`