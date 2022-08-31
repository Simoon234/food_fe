import {WrapperComponent} from "../../components/basket/Baskets";
import {PathComponent} from "../../components/common/Path";
import {Image} from "../../assets/styled/HeaderStyle";
import {SectionLayout} from "../../components/common/SectionLayout";

export const Login = () => {
    return (
        <WrapperComponent>
            <Image>
                <div className='bg img'/>
            </Image>
            <PathComponent/>
            <SectionLayout text='Contact' title='Our Contact'
                           description='Got any questions? We are here to help you! Contact details down below.'/>
        </WrapperComponent>
    )
}