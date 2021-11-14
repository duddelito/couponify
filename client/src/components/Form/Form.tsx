import React, {useState} from "react";

import './Form.css';

import I18n from "../../services/I18n";
import Input from '../Input/Input';
import Button from '../Button/Button';

const Form = (props: any) => {
    const [value, setValue] = useState('');

    const handleChange = (event: any) => {
        const {value} = event.target;
        setValue(value);
    }

    const handleClick = (event: any) => {
        event.preventDefault();
        props.generateCoupons(value);
    }

    return(
        <div className="form">
            <h4>{I18n.get.labels.addDescription}</h4>
            <form>
                <Input type="text" name="title" value={value} onChange={handleChange} placeholder={I18n.get.labels.title} />
                <Button value={I18n.get.labels.add} onClick={handleClick} />
            </form>
        </div>
    );
}

export default Form;
