import {SectionLayout} from "../common/SectionLayout";
import {Pagination} from "../pagination/Pagination";
import {useState} from "react";
import styled from "styled-components";
import {AllReviews} from "./ReviewsComponent";

export const Reviews = () => {
    const [page, setPage] = useState(1);

    const clickUp = () => {
        if (page === 5) return
        setPage(prev => prev + 1)
    }

    const clickDown = () => {
        if (page === 1) return;
        setPage(prev => prev - 1);
    }
    return (
        <>
            <ReviewsHeader>
                <SectionLayout description='' text='Review' title='What Our Customers Say'/>
                <Pagination page={page} clickUp={clickUp} clickDown={clickDown}/>
            </ReviewsHeader>
            <AllReviews/>
        </>

    )
}

export const ReviewsHeader = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
`
