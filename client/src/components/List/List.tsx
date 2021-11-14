import React from "react";

import './List.css';

import Item from '../Item/Item';


const List = (props: any) => {

    return (
        <ul className="column">
            {props.list.map((item:any, index: number) => (
                <Item key={index} item={item} index={index} />
            ))}
        </ul>
    );
}

export default List;