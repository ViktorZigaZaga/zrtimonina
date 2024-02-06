import React from "react";
import EncouragementsListView from '../components/EncouragementsListView'

export default function StoreEncouragements() {

    const encouragements = [
        {
            name: "encouragement1",
            img: "https://raw.githubusercontent.com/ViktorZigaZaga/zrtimonina/main/src/images/encouragements/encouragement-01.jpg"
        },
        {
            name: "encouragement2",
            img: "https://raw.githubusercontent.com/ViktorZigaZaga/zrtimonina/main/src/images/encouragements/encouragement-02.jpg"
        },
        {
            name: "encouragement3",
            img: "https://raw.githubusercontent.com/ViktorZigaZaga/zrtimonina/main/src/images/encouragements/encouragement-03.jpg"
        },
        {
            name: "encouragement4",
            img: "https://raw.githubusercontent.com/ViktorZigaZaga/zrtimonina/main/src/images/encouragements/encouragement-04.jpg"
        },
        {
            name: "encouragement5",
            img: "https://raw.githubusercontent.com/ViktorZigaZaga/zrtimonina/main/src/images/encouragements/encouragement-05.jpg"
        },
        {
            name: "encouragement6",
            img: "https://raw.githubusercontent.com/ViktorZigaZaga/zrtimonina/main/src/images/encouragements/encouragement-06.jpg"
        },
        {
            name: "encouragement7",
            img: "https://raw.githubusercontent.com/ViktorZigaZaga/zrtimonina/main/src/images/encouragements/encouragement-07.jpg"
        },
        {
            name: "encouragement8",
            img: "https://raw.githubusercontent.com/ViktorZigaZaga/zrtimonina/main/src/images/encouragements/encouragement-08.jpg"
        },
        {
            name: "encouragement9",
            img: "https://raw.githubusercontent.com/ViktorZigaZaga/zrtimonina/main/src/images/encouragements/encouragement-09.jpg"
        },
        {
            name: "encouragement10",
            img: "https://raw.githubusercontent.com/ViktorZigaZaga/zrtimonina/main/src/images/encouragements/encouragement-10.jpg"
        },
    ];

    return(
        <div className="storeEncouragements">
            <EncouragementsListView items={encouragements} />
        </div>
    );

}