import styled from "styled-components";
import {SingleReview} from "./SingleReview";

export const AllReviews = () => {
    return (
        <ReviewsComponent>
            <SingleReview/>
            <SingleReview/>
        </ReviewsComponent>
    )
}
export const ReviewsComponent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`