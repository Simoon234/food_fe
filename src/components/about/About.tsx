import styled from "styled-components";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import food from '../../assets/images/food.jpg';
import {SectionName} from "../common/SectionName";
import {AboutBg} from "../../assets/styled/AboutBg";

export const About = () => {
    return (
        <>
            <AboutBg>
                <div className='bg layer'></div>
            </AboutBg>
            <AboutBox>
                <div className='about-info-left'>
                    <SectionName text='About us'
                                 title='Let Us Tell You a Little About Ourselves'
                                 description={`Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                             Accusamus aliquam, animi assumenda autem consectetur consequatur eveniet expedita in, iusto
                             laudantium natus nesciunt omnis optio praesentium.Quas quis suscipit ullam voluptatibus. dolor sit amet, consectetur adipisicing elit.
                             Beatae cumque delectus, exercitationem illum in ipsam molestiae necessitatibus pariatur quibusdam quidem quo repellendus saepe sapiente tempora voluptates. Debitis nemo perferendis unde?`}/>
                    <div className='about-info-read-more'>
                        <span>Read More</span>
                        <KeyboardDoubleArrowRightIcon className='icon'/>
                    </div>
                </div>
                <img className='image' src={food} alt="table with meals"/>
            </AboutBox>
        </>
    )
}

export const AboutBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  .image {
    min-width: 500px;
    border-radius: 12px;
    box-shadow: 0 0 12px #6d6d6d;
    margin-left: 5rem;
  }

  .about-info-left {
    position: relative;

    .about-info-read-more {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      cursor: pointer;

      span {
        margin-right: 1rem;
        padding: 0.5rem 0;
        transition: 250ms linear;
        color: #FC915F;

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