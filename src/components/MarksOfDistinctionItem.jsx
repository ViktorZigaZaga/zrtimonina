import React from "react";
// import PropsTypes from 'prop-types';

export default function MarksOfDistinctionItem(props) {
    const {item} = props;

    return (
        <div className="marksOfDistinction-item">
            <span>
                <img className="marksOfDistinction-item-image" src={item.img} alt={item.name} width={100} height={70} />
            </span>
            {/* <span className="marksOfDistinction-item-name">{item.name}</span> */}
        </div>
    );
}

// MarksOfDistinctionItem.propsTypes = {
//     item: PropsTypes.object.isRequired
// }