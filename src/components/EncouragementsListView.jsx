import React from "react";
// import PropsTypes from 'prop-types';
import EncouragementsItem from './EncouragementsItem'
import { v4 as uuidv4 } from 'uuid';

export default function EncouragementsListView(props) {
    const {items} = props;

    return(
        <div className="list-view">
            {items.map((item) => 
                <EncouragementsItem item={item} key={uuidv4()}/>
            )}
        </div>
    );
}

// EncouragementsListView.propsTypes = {
//     items: PropsTypes.arrayOf(PropsTypes.object).isRequired
// }