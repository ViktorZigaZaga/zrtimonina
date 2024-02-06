import React from "react";

function HomePage() {
    return (
        <article className="article">
            <div className="article__title">
                <span className="article__paragraph">
                    <strong>
                        Сайт учителя физики <br/>
                        <h1 className="article__header"><strong> Зельфия Рамазановна Тимонина </strong></h1> <br/>
                    </strong>
                    <strong>
                        Для меня профессия – не просто призвание, это смысл моей жизни. <br/> 
                        <footer><cite>
                            Я с гордостью говорю: «Я – УЧИТЕЛЬ!»
                        </cite></footer>
                    </strong>
                </span>
                <button className="article__btn">
                    Напиши мне
                </button>
            </div>
            <div className="article__photo">
                <img src="https://raw.githubusercontent.com/ViktorZigaZaga/zrtimonina/main/src/images/photo.jpeg" alt="фото учителя" width={400} height={600} />
            </div>
        </article>
        // C://inetpub/vhosts/u2464467.plsk.regruhosting.ru/
        // Этот сайт создан с целью интерактивного взаимодействия с участниками  образовательного процесса. Буду рада, если информация размещенная на сайте будет полезной для коллег-учителей физики, учеников  и их родителей. На сайте размещены рабочие программы по физике 7-9 класс,  дидактический материал  к урокам.
        // Учащимся  на сайте можно проверить свои знания, решая онлайн - тесты, по физике, а также  найти информация для подготовки к итоговой аттестации.
    )
}

export default HomePage