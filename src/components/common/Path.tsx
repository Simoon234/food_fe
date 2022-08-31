import {useLocation} from "react-router-dom";
import styled from "styled-components";

export const PathComponent = () => {
    const location = useLocation();
    const path = location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2);

    return (
        <PathBox>
            <span>Home</span>
            <p> {'>'} {path}</p>
        </PathBox>
    )
}

export const PathBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin: 2rem 0;
  font-style: italic;

  span {
    opacity: 0.5;
    color: #6a6666;
  }

  p {
    color: #393939;
    margin-left: 0.5rem;
  }
`

export const PathText = styled.p`
  margin: 2rem 0;
  color: #6a6666;
  font-style: italic;
`