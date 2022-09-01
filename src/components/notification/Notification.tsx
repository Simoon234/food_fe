import styled from "styled-components";
import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";


export const BackDrop = () => <BackDropBG/>

export const NotificationModal = (props: any) => {
    return (
        <Mid>
            <NotificationWrapper>
                <p>Do you want to be notified?</p>
                <small>You will get information about new features and many many more.</small>
                <form>
                    <label htmlFor="email">
                        <input type="email" name="email" placeholder='Your email address'/>
                    </label>
                    <button className='send' onClick={props.onClick}>Send</button>
                </form>
                <button className='close' onClick={props.onClick}>X</button>
            </NotificationWrapper>
        </Mid>
    )
}

export const Notification = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setOpen(true);
        }, 2000)
    }, [])
    return (
        <>
            {open &&
                ReactDOM.createPortal(<BackDrop/>, document.getElementById('backdrop-root') as HTMLElement)}
            {open &&
                ReactDOM.createPortal(<NotificationModal
                    onClick={() => setOpen(false)}/>, document.getElementById('modal-root') as HTMLElement)}

        </>
    )
}

export const Memo = React.memo(Notification);

export const Mid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 200000;
`

export const NotificationWrapper = styled.div`
  position: fixed;
  top: 30%;
  background: #ffffff;
  width: 54%;
  color: #000000;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  z-index: 2000;

  form {
    position: relative;

    input {
      width: 100%;
      padding: 0.9rem;
      border-radius: 120px;
      border: 2px solid orange;
      margin-top: 1rem;
      font-size: 1rem;
      outline: none;
      box-shadow: 0 0 3px #f5900a;

      &:focus {
        border: 2px solid #5234e3;
      }
    }

    .send {
      position: absolute;
      background: #ff9a13;
      border: none;
      cursor: pointer;
      right: 10px;
      bottom: 5px;
      width: 120px;
      height: 40px;
      border-radius: 120px;
      color: white;
      transition: 250ms ease-in;


      &:hover {
        background: orangered;
      }
    }

  }

  .close {
    position: absolute;
    top: 12px;
    right: 12px;
    background: orange;
    border: none;
    padding: 0.3rem;
    width: 30px;
    cursor: pointer;
    color: white;
    border-radius: 4px;

    transition: 250ms ease-in;

    &:hover {
      background: orangered;
    }
  }

  p {
    color: orange;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  small {
    font-size: 0.7rem;
    font-style: italic;
    margin-bottom: 1rem;
  }


`

export const BackDropBG = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: #000000;
  opacity: 0.4;
  z-index: 200;
  left: 0;
`