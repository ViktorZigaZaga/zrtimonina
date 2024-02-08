import React from "react";
import ScrollTop from "../components/ScrollTop";

function MyExperience() {
 return (
    <article className="article" style={{textAlign:'center'}}>
            <ScrollTop />
            <span className="article__paragraph">
                Этот сайт создан с целью интерактивного взаимодействия с участниками  образовательного процесса.
                <br />
                Буду рада, если информация размещенная на сайте будет полезной для коллег-учителей физики, учеников  и их родителей. 
                <br />
                На сайте размещены рабочие программы по физике 7-9 класс,  дидактический материал  к урокам.
                <br />
                Учащимся  на сайте можно проверить свои знания, решая онлайн - тесты, по физике, а также  найти информация для подготовки к итоговой аттестации.
            </span>
            <div className="article__photo methodical-bank">
                <img src="https://raw.githubusercontent.com/ViktorZigaZaga/zrtimonina/main/src/images/methodicalBank/physics7th.jpg" alt="Физика. 7 класс" width={400} height={550} />
                <a className="cloudLink" href="https://cloud.mail.ru/public/eAMy/UW72Noc3L">Физика. 7 класс</a>
            </div>
            <div className="article__photo methodical-bank">
                <img src="https://raw.githubusercontent.com/ViktorZigaZaga/zrtimonina/main/src/images/methodicalBank/physics8th.jpg" alt="Физика. 8 класс" width={400} height={550} />
                <a className="cloudLink" href="https://cloud.mail.ru/public/RHKS/CnCTgrT5S">Физика. 8 класс</a>
            </div>
            <div className="article__photo methodical-bank">
                <img src="https://raw.githubusercontent.com/ViktorZigaZaga/zrtimonina/main/src/images/methodicalBank/kiplingwords.jpg" alt="Методическая копилка" width={600} height={550} />
                <a className="cloudLink" href="https://cloud.mail.ru/public/vSu7/Kugcjnaxk">Методическая копилка</a>
            </div>
    </article>

 );
}

export default MyExperience