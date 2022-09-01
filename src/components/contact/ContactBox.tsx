import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';

export const ContactBox = () => {
    return (
        <ContactBoxes>
            <div className="boxes">
                <HomeIcon className="icon"/>
                <h2>Address</h2>
                <p>Test</p>
            </div>
            <div className="boxes">
                <SmartphoneIcon className="icon"/>
                <h2>Phone</h2>
                <p>Test</p>
            </div>
            <div className="boxes">
                <MailOutlineIcon className="icon"/>
                <h2>E-Mail</h2>
                <p>Test</p>
            </div>
            <div className="boxes">
                <QueryBuilderIcon className="icon"/>
                <h2>Hours</h2>
                <p>Test</p>
            </div>
        </ContactBoxes>
    )
}

export const ContactBoxes = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;

  .boxes {
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 240px;
    box-shadow: 0 0 12px #dfd6d6;
    border-radius: 12px;
    padding: 2rem;

    .icon {
      color: #FC915F;
    }

    h2 {
      margin: 2rem 0 1rem 0;
    }

    p {
      font-size: 0.8rem;
    }
  }
`