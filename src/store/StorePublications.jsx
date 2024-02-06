import React from "react";
import PublicationsListView from "../components/PublicationsListView";

export default function StorePublications() {

    const publications = [
        {
            name: "encouragement9",
            img: "https://raw.githubusercontent.com/ViktorZigaZaga/zrtimonina/main/src/images/publications/publication-1.jpg"
        },
        {
            name: "encouragement10",
            img: "https://raw.githubusercontent.com/ViktorZigaZaga/zrtimonina/main/src/images/publications/publication-1.jpg"
        },
    ];

    return(
        <div className="storePublications">
            <PublicationsListView items={publications} />
        </div>
    );
}