import React from "react";

export default function ScrollTop() {

    return(
        <div className="scroll-top isShowBtn" onClick={() => window.scrollTo(0,0)}>
            <span class="material-symbols-outlined" style={{fontSize:'80px'}}>expand_circle_up</span>
        </div>
    );
}