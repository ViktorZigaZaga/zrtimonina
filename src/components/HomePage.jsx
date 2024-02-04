import React from "react";

function HomePage() {
    return (
        <article className="article">
            <div className="article__title">
                <p className="article__paragraph">
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
                </p>
                <button className="article__btn">
                    Напиши мне
                </button>
            </div>
            <div className="article__photo">
                <img src="src/images/062A0071.jpeg" alt="фото учителя" width="400em" height="600em" />
            </div>
        </article>
    )
}

export default HomePage