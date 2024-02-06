import React from "react";
import PropsTypes from 'prop-types';

export default function ContestsItem(props) {
    const {item} = props;

    return (
        <div className="contests-item">
            <span>
                <img className="contests-item-image" src={item.img} alt={item.name} width={70} height={100} />
            </span>
            {/* <span className="contests-item-name">{item.name}</span> */}
        </div>
    );
}

ContestsItem.propsTypes = {
    item: PropsTypes.object.isRequired
}