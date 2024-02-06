import React from "react";
import ContestsListView from "../components/ContestsListView";

export default function StoreContests() {

    const contests = [
        {
            name: 'contest1',
            img: 'https://raw.githubusercontent.com/ViktorZigaZaga/zrtimonina/main/src/images/contests/contest-1.jpg'
        },
        {
            name: 'contest2',
            img: 'https://raw.githubusercontent.com/ViktorZigaZaga/zrtimonina/main/src/images/contests/contest-2.jpg'
        },
        {
            name: 'contest3',
            img: 'https://raw.githubusercontent.com/ViktorZigaZaga/zrtimonina/main/src/images/contests/contest-3.jpg'
        },
        {
            name: 'contest4',
            img: 'https://raw.githubusercontent.com/ViktorZigaZaga/zrtimonina/main/src/images/contests/contest-4.jpg'
        },
        {
            name: 'contest5',
            img: 'https://raw.githubusercontent.com/ViktorZigaZaga/zrtimonina/main/src/images/contests/contest-5.jpg'
        },
        {
            name: 'contest6',
            img: 'https://raw.githubusercontent.com/ViktorZigaZaga/zrtimonina/main/src/images/contests/contest-6.jpg'
        },
    ];

    return(
        <div className="storeContests">
            <ContestsListView items={contests} />
        </div>
    );
}