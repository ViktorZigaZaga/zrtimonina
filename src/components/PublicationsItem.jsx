import React from "react";
// import PropsTypes from 'prop-types';

export default function PublicationsItem(props) {
    const {item} = props;

    return (
        <div className="publications-item">
            <span>
                <img className="publications-item-image" src={item.img} alt={item.name} width={70} height={100} />
            </span>
            {/* <span className="publications-item-name">{item.name}</span> */}
        </div>
    );
}

// PublicationsItem.propsTypes = {
//     item: PropsTypes.object.isRequired
// }