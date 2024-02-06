import React from "react";
// import PropsTypes from 'prop-types';
import MarksOfDistinctionItem from './MarksOfDistinctionItem'
import { v4 as uuidv4 } from 'uuid';

export default function MarksOfDistinctionListView(props) {
    const {items} = props;

    return(
        <div className="list-view">
            {items.map((item) => 
                <MarksOfDistinctionItem item={item} key={uuidv4()}/>
            )}
        </div>
    );
}

// MarksOfDistinctionListView.propsTypes = {
//     items: PropsTypes.arrayOf(PropsTypes.object).isRequired
// }