import React from "react";
import PropsTypes from 'prop-types';
import CertificatesItem from './CertificatesItem'
import { v4 as uuidv4 } from 'uuid';

export default function CertificatesListView(props) {
    const {items, onClick} = props;

    return(
        <div className="list-view">
            {items.map((item) =>
                <CertificatesItem onClick={props.onClick} item={item} key={uuidv4()}/>
            )}
        </div>
    );
}

CertificatesListView.propsTypes = {
    items: PropsTypes.arrayOf(PropsTypes.object).isRequired
}