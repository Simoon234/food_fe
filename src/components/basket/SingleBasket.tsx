import styled from "@emotion/styled";
import img from '../../assets/images/menu1.png';
import {Pagination} from "../pagination/Pagination";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const SingleBasket = () => {
    return (
        <Box>
            <img src={img} alt=""/>
            <h3>Krewetki</h3>
            <Pagination page={1} clickUp={() => console.log('test')} clickDown={() => console.log('eo')}/>
            <p>$8.99</p>
            <DeleteOutlineIcon/>
        </Box>
    )
}

export const Box = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 2rem 1rem 0;
  box-shadow: 0 0 12px #dfd6d6;
  border-radius: 20px;


  .e {
    width: 100%;

  }
`