import styled from "styled-components";
import {SectionLayout} from "../common/SectionLayout";
import {useState} from "react";
import {AllMenu} from "./AllMenu";
import {Category} from "../category/Category";
import {Pagination} from "../pagination/Pagination";

export const SpecialMenu = () => {
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
        <SpecialMenuWrapper>
            <SectionLayout text='Special' title='Special Menu Of Our Restaurant'
                           description='There is huge selection of delicious dishes on our menu, so everyone will find something to their taste'/>
            <div className='special-menu-header'>
                <Category/>
                <Pagination clickUp={clickUp} clickDown={clickDown} page={page}/>
            </div>
            <AllMenu/>
        </SpecialMenuWrapper>
    )
}

export const SpecialMenuWrapper = styled.div`
  margin-top: 5rem;

  .special-menu-header {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .category {
      margin: 1rem;
      background: none;
      padding: 0.4rem;
      cursor: pointer;
      border: none;
      font-size: 0.9rem;
      position: relative;
    }
`