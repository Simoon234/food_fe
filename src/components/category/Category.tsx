import {categories} from "../../utils/catergory";
import {useState} from "react";

export const Category = () => {
    const [text, setText] = useState('');
    return (
        <div>
            {categories.map((item, i) => <button className='category' onClick={(e: any) => setText(e.target.innerText)}
                                                 key={i}>{item}</button>)}
        </div>
    )
}