import React from "react";

import './Item.css';

const Item = (props: any) => {

    return(
        <li className="item" style={{backgroundColor: props.item.redeemed ? 'brown':'darkseagreen'}}>
            {props.item.code}
        </li>
    );
}

export default Item;