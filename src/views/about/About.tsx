import styled from 'styled-components';
import {Image} from '../../assets/styled/HeaderStyle'
import {WrapperComponent} from "../../components/basket/Baskets";
import {PathComponent} from "../../components/common/Path";
import {SectionLayout} from "../../components/common/SectionLayout";
import eat from '../../assets/images/eat-about-us.jpg';
import chef from '../../assets/images/chef.jpg';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const About = () => {
    return (
        <WrapperComponent>
            <Image>
                <div className='bg img'></div>
            </Image>
            <PathComponent/>
            <Welcome>
                <SectionLayout title='About Us'
                               description='Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam aperiam corporis cumque dolore earum hic ipsa iure Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam aperiam corporis cumque dolore earum hic ipsa iure laboriosam nam numquam officia officiis quas, quisquam quod recusandae sunt tempora tempore laboriosam nam numquam officia officiis quas, quisquam quod recusandae sunt tempora tempore dolor sit amet, consectetur adipisicing elit. Accusamus aliquam aperiam corporis cumque dolore earum hic ipsa iure laboriosam nam numquam officia officiis quas, quisquam quod recusandae sunt tempora tempore'
                               text='Welcome'/>
                <div className='image-container'>
                    <img src={eat} alt="eating"/>
                </div>
            </Welcome>
            <Team>
                <div className='image-container'>
                    <img src={chef} alt="eating"/>
                </div>
                <div className='chef'>
                    <SectionLayout text='Team' title='The Best Team ever' description='Our team contains of 30 people'/>
                    <h4>Master Chef</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, debitis dolore eligendi enim error
                        facilis hic impedit libero maxime minus officia optio praesentium tenetur? Accusamus alias
                        commodi dolorum molestiae praesentium!</p>
                    <div className='social-media'>
                        <TwitterIcon className='icon'/>
                        <InstagramIcon className='icon'/>
                        <FacebookIcon className='icon'/>
                        <YouTubeIcon className='icon'/>
                    </div>
                </div>
            </Team>
        </WrapperComponent>
    )
}


export const Welcome = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .image-container {
    margin-top: 3rem;
    padding-left: 2rem;

    img {
      width: 100%;
      height: 100%;
      border-radius: 12px;
    }
  }
`

export const Team = styled.div`
  margin: 5rem 0;
  display: flex;
  align-items: flex-start;

  .image-container {
    width: 1200px;
    height: 500px;
    margin-right: 9rem;

    img {
      width: 100%;
      height: 100%;
      border-radius: 12px;
    }
  }

  .chef {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;

    h4 {
      font-size: 1.2rem;
      margin: 2rem 0;
    }

    p {
      line-height: 2rem;
      font-size: 0.9rem;
      color: grey;
    }

    .social-media {
      margin-top: 2rem;
      display: flex;
      align-items: center;

      .icon {
        margin-right: 2rem;
        cursor: pointer;
        color: #f0752d;
        transition: 250ms ease-out;

        &:hover {
          transform: scale(1.1);
          color: #df590c;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }

  }

`