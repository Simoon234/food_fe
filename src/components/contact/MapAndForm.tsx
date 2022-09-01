import styled from "styled-components";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import '../../utils/fixMap';
import {SectionLayout} from "../common/SectionLayout";

export const MapAndForm = () => {
    return (
        <FormsAndMap>
            <Map>
                <MapContainer className="cont" center={[51.505, -0.9]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.9]}>
                        <Popup>
                            A pretty CSS3 popup. <br/> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </Map>
            <div className='forms'>
                <SectionLayout text='Contact' title='Send Us A Message'
                               description='Simple way to send a message by using form. '/>
                <form action="">
                    <label htmlFor="name">
                        <input type="text" id='name' placeholder='Your name'/>
                    </label>
                    <label htmlFor="email">
                        <input type="text" id='email' placeholder='Your email address'/>
                    </label>
                    <textarea placeholder='Message'></textarea>
                    <button className='to-send'>Send</button>
                </form>
            </div>
        </FormsAndMap>

    )
}

export const FormsAndMap = styled.div`
  display: flex;

  .forms {
    margin: 5rem 0 0 5rem;
    width: 50%;

    form {
      display: flex;
      margin-top: 2rem;
      flex-direction: column;

      input, textarea {
        width: 100%;
        padding: 0.8rem;
        border-radius: 10px;
        margin: 1rem 0;
        border: 1px solid #d97618;
        transition: 250ms ease;
        outline: none;
        box-shadow: 0 0 3px #f5900a;
        cursor: pointer;

        &:focus {
          background: #f8f2f2;
          outline: none;
        }
      }

      .to-send {
        width: 220px;
        margin-top: 1rem;
        padding: 1rem;
        border-radius: 120px;
        cursor: pointer;
        background: #d97618;;
        color: white;
        font-size: 1rem;
        border: 1px solid #d97618;

      }
    }
  }
`

export const Map = styled.div`
  margin: 2rem 4rem 2rem 0;
  height: 600px;
  width: 400px;
  overflow: hidden;
  background-repeat: no-repeat;

  .cont {
    height: 100%;
    border-radius: 12px;
  }
`