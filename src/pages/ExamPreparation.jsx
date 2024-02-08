import React from "react";
import ScrollTop from "../components/ScrollTop";

function ExamPreparation() {
 return (
    <article className="article">
        <ScrollTop />
        <div className="article__photo methodical-bank">
            <img src="https://raw.githubusercontent.com/ViktorZigaZaga/zrtimonina/main/src/images/vpr.physics.jpg" alt="Физика. ВПР-2024" width={600} height={400} />
            <span>
                <br />
                Приглашаю тебя пройти по ссылке и проверить свою 
                <br />
                подготовку к ВПР-2024
                <br />
                <a className="cloudLink" href="https://phys7-vpr.sdamgia.ru/">ВПР−2024: задания, ответы, решения (sdamgia.ru)</a>
            </span>
        </div>
        <div className="article__photo methodical-bank">
            <img src="https://raw.githubusercontent.com/ViktorZigaZaga/zrtimonina/main/src/images/oge.physics.jpg" alt="Физика. ОГЭ-2024" width={600} height={400} />
            <span>
                <br />
                Приглашаю тебя пройти по ссылке и проверить свои знания 
                <br />
                по подготовке к ОГЭ
                <br />
                <a className="cloudLink" href="https://phys-oge.sdamgia.ru/">ОГЭ−2024: задания, ответы, решения (sdamgia.ru)</a>
            </span>
        </div>
    </article>
 );
}

export default ExamPreparation