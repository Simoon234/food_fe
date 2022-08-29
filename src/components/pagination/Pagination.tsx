import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styled from "styled-components";

interface Props {
    clickDown: () => void;
    page: number;
    clickUp: () => void;
}

export const Pagination = ({clickDown, clickUp, page}: Props) => {
    return (
        <PaginationWrapper>
            <KeyboardArrowLeftIcon onClick={clickDown} className={page === 1 ? 'disabled arrow-left' : 'arrow-left'}/>
            <span>{page}</span>
            <KeyboardArrowRightIcon onClick={clickUp} className={page === 5 ? 'disabled arrow-right' : 'arrow-right'}/>
        </PaginationWrapper>
    )
}

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;

  span {
    font-size: 0.8rem;
  }

  .disabled {
    opacity: 0.2;
  }

  .arrow-left, .arrow-right {
    font-size: 2rem;
    cursor: pointer;
  }
`