import React from "react";
// import PropsTypes from 'prop-types';
import PublicationsItem from './PublicationsItem'
import { v4 as uuidv4 } from 'uuid';

export default function PublicationsListView(props) {
    const {items} = props;

    return(
        <div className="list-view">
            {items.map((item) => 
                <PublicationsItem item={item} key={uuidv4()}/>
            )}
        </div>
    );
}

// PublicationsListView.propsTypes = {
//     items: PropsTypes.arrayOf(PropsTypes.object).isRequired
// }