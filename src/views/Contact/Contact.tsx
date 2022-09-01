import {WrapperComponent} from "../../components/basket/Baskets";
import {PathComponent} from "../../components/common/Path";
import {Image} from "../../assets/styled/HeaderStyle";
import {SectionLayout} from "../../components/common/SectionLayout";
import {ContactBox} from "../../components/contact/ContactBox";
import {MapAndForm} from "../../components/contact/MapAndForm";

export const Contact = () => {
    return (
        <WrapperComponent>
            <Image>
                <div className='bg img'/>
            </Image>
            <PathComponent/>
            <SectionLayout text='Contact' title='Our Contact'
                           description='Got any questions? We are here to help you! Contact details down below.'/>
            <ContactBox/>
            <MapAndForm/>
        </WrapperComponent>
    )
}