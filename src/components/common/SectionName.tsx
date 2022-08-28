import styled from "styled-components";

export const SectionName = ({text}: { text: string }) => {
    return (
        <Span>
            <span>{text}</span>
        </Span>
    )
}

export const Span = styled.span`
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
      background: #FC915F;
    }
  }
`