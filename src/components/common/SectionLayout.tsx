import styled from "styled-components";

export const SectionLayout = ({text, title, description}: { text: string, title: string, description: string }) => {
    return (
        <Common>
            <span>{text}</span>
            <h3>{title}</h3>
            <p className='about-text'>{description}</p>
        </Common>
    )
}

export const Common = styled.span`
  position: relative;

  span {
    color: #FC915F;

    &:before {
      content: "";
      position: absolute;
      top: 10px;
      left: -90px;
      width: 80px;
      height: 2px;
      display: block;
      background: #ff7232;
    }
  }

  h3 {
    width: 70%;
    font-size: 2.2rem;
    line-height: 3rem;
    margin: 1.3rem 0 2rem 0;
  }

  .about-text {
    font-size: 1rem;
    max-width: 740px;
    line-height: 2rem;
    color: #807b7b;
    text-align: justify;
  }
`