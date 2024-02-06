import React from "react";
import PropsTypes from 'prop-types';

export default function EncouragementsItem(props) {
    const {item} = props;

    return (
        <div className="encouragements-item">
            <span>
                <img className="encouragements-item-image" src={item.img} alt={item.name} width={70} height={100} />
            </span>
            {/* <span className="encouragements-item-name">{item.name}</span> */}
        </div>
    );
}

EncouragementsItem.propsTypes = {
    item: PropsTypes.object.isRequired
}