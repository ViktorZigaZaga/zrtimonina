import React from "react";
import PropsTypes from 'prop-types';

export default function CertificatesItem(props) {
    const {item} = props;

    return (
        <div className="certificates-item">
            <span>
                <img className="certificates-item-image" onClick={props.onClick} src={item.img} alt={item.name} width={100} height={70} />
            </span>
            {/* <span className="certificates-item-name">{item.name}</span> */}
        </div>
    );
}

CertificatesItem.propsTypes = {
    item: PropsTypes.object.isRequired
}