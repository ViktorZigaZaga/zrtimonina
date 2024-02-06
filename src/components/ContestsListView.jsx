import React from "react";
import PropsTypes from 'prop-types';
import ContestsItem from "./ContestsItem";
import { v4 as uuidv4 } from 'uuid';

export default function ContestsListView(props) {
    const {items} = props;

    return(
        <div className="list-view">
            {items.map((item) => 
                <ContestsItem item={item} key={uuidv4()} />
            )}
        </div>
    );
}

ContestsListView.propsTypes = {
    items: PropsTypes.arrayOf(PropsTypes.object).isRequired
}