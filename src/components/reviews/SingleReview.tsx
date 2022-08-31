import {Avatar} from "@mui/material";
import styled from "styled-components";

export const SingleReview = () => {
    return (
        <ReviewBoxContainer>
            <ReviewBox>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet aperiam cum cumque
                    deserunt dolor dolore eaque excepturi expedita illo ipsa iure, necessitatibus perferendis quam
                    quibusdam quos reiciendis repellat tenetur.</p>
                <div className='reviews-bottom'>
                    <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                        sx={{width: 56, height: 56}}
                    />
                    <h2>AF Hanif</h2>
                </div>
            </ReviewBox>
        </ReviewBoxContainer>
    )
}

export const ReviewBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;

  p {
    padding: 1rem;
    line-height: 26px;
    font-size: 0.9rem;
    color: #ffffff;
    font-style: italic;
  }
`

export const ReviewBox = styled.div`
  width: 100%;
  min-height: 220px;
  background: #A69ED6;
  margin: 1rem 2rem 0 2rem;
  padding: 1rem;
  border-radius: 12px;

  .reviews-bottom {
    display: flex;
    align-items: center;
  }

  .reviews-bottom h2 {
    color: #F7C75B;
    margin-left: 1rem;
  }

  .reviews-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;

    p {
      padding: 1rem;
      line-height: 26px;
      font-size: 0.9rem;
      color: #ffffff;
      font-style: italic;
    }
  }
`