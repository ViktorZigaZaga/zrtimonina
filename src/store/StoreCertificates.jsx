import React from "react";
import CertificatesListView from "../components/CertificatesListView";

export default function StoreCertificates(props) {

    const certificates = [
        {
            name: 'certificate1',
            img: 'https://raw.githubusercontent.com/ViktorZigaZaga/zrtimonina/main/src/images/certificates/certificate-1-1.jpg'
        },
        {
            name: 'certificate2',
            img: 'https://raw.githubusercontent.com/ViktorZigaZaga/zrtimonina/main/src/images/certificates/certificate-1-2.jpg'
        },
        {
            name: 'certificate3',
            img: 'https://raw.githubusercontent.com/ViktorZigaZaga/zrtimonina/main/src/images/certificates/certificate-1-3.jpg'
        },
        {
            name: 'certificate4',
            img: 'https://raw.githubusercontent.com/ViktorZigaZaga/zrtimonina/main/src/images/certificates/certificate-1.jpg'
        },
        {
            name: 'certificate5',
            img: 'https://raw.githubusercontent.com/ViktorZigaZaga/zrtimonina/main/src/images/certificates/certificate-2.jpg'
        },
        {
            name: 'certificate6',
            img: 'https://raw.githubusercontent.com/ViktorZigaZaga/zrtimonina/main/src/images/certificates/certificate-3.jpg'
        },
        {
            name: 'certificate7',
            img: 'https://raw.githubusercontent.com/ViktorZigaZaga/zrtimonina/main/src/images/certificates/certificate-4.jpg'
        },
        {
            name: 'certificate8',
            img: 'https://raw.githubusercontent.com/ViktorZigaZaga/zrtimonina/main/src/images/certificates/certificate-5.jpg'
        },
        {
            name: 'public9',
            img: 'https://raw.githubusercontent.com/ViktorZigaZaga/zrtimonina/main/src/images/certificates/certificate-6.jpg'
        },
    ];

    return(
        <div className="storeCertificates">
            <CertificatesListView onClick={props.onClick} items={certificates} />
        </div>
    );
}