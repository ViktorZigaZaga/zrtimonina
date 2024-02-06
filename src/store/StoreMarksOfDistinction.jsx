import React from "react";
import MarksOfDistinctionListView from '../components/MarksOfDistinctionListView'

export default function StoreMarksOfDistinction() {

    const marksOfDistinction = [
        {
            name: 'markOfDistinction1',
            img: 'https://raw.githubusercontent.com/ViktorZigaZaga/zrtimonina/main/src/images/marksOfDistinction/markOfDistinctionSE.jpg'
        },
        {
            name: 'markOfDistinction2',
            img: 'https://raw.githubusercontent.com/ViktorZigaZaga/zrtimonina/main/src/images/marksOfDistinction/markOfDistinctionRWD.jpg'
        },
    ];

    return(
        <div className="storeMarksOfDistinction">
            <MarksOfDistinctionListView items={marksOfDistinction} />
        </div>
    );
}