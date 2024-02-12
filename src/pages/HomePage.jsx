import React from "react";
import ScrollTop from "../components/ScrollTop";

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
                <form method="LINK" action="mailto:tzr.r42@gmail.com?subject=Вопрос&body=Здравствуйте, Зельфия Рамазановна!">
                    <input className="article__btn" type="submit" value="Напиши мне" />
                </form>
                {/* <button className="article__btn">
                    <a className="article__btn" href="mailto:tzr.r42@gmail.com?subject=Вопрос&body=Здравствуйте, Зельфия Рамазановна!">Напиши мне</a>
                </button> */}
            </div>
            <div className="article__photo">
                <img src="https://raw.githubusercontent.com/ViktorZigaZaga/zrtimonina/main/src/images/photo.jpeg" alt="фото учителя" width={400} height={600} />
            </div>
        </article>
        // C://inetpub/vhosts/u2464467.plsk.regruhosting.ru/
    )
}

export default HomePage