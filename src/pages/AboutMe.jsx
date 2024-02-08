import React, {useState} from "react";
import StoreCertificates from '../store/StoreCertificates'
import StoreContests from '../store/StoreContests'
import StoreEncouragements from '../store/StoreEncouragements'
import StoreMarksOfDistinction from '../store/StoreMarksOfDistinction'
import StorePublications from '../store/StorePublications'
import Modal from "../components/Modal";
import ScrollTop from "../components/ScrollTop";

function AboutMe() {

    const [modalActive, setModalActive] = useState(true);

    return (
        <article className="article">
            <ScrollTop />
            <div className="article__title">
                <div className="article__paragraph aboutme">
                    <span>
                        <h1>Место работы:</h1> Муниципальное  бюджетное общеобразовательное учреждение «Средняя общеобразовательная школа №34 имени Амелина Станислава Александровича»,  г.Кемерово. <br/>
                        <br/>
                        <h2>Должность:</h2> заместитель директора по учебно-воспитательной работе, учитель физики. <br/>
                        <br/>
                        <h2>Мое образование - высшее:</h2>
                        1986г., Кузбасский политехнический институт, по специальности «Экономика и организация горной промышленности» и  квалификации «горный инженер-экономист»; <br/>
                        2000г., Кемеровский областной институт усовершенствования учителей, программа профессиональной переподготовки работников образовательных учреждений, по специальности «физика»; <br/>
                        2016г. - НОУ ВПО КузИЭП Негосударственное образовательное учреждение высшего профессионального образования «Кузбасский институт экономики и права» профессиональная переподготовка, по программе «Менеджмент и экономика организации».<br/>
                        <br/>
                        <h2>Cтаж педагогической работы:</h2>
                        <ul className="article__paragraph_list">
                            <li>по специальности - 33 года</li>
                            <li>общий трудовой - 42 года</li>
                            <li>в данной должности - 33 года</li>
                            <li>в данном учреждении - 12 лет</li>
                        </ul>
                        <br/>
                        <h2>Награждена:</h2>
                        Нагрудный знак «Почетный работник сферы образования Российской Федерации» за заслуги в сфере образования (Приказ Минобнауки России от 16 марта 2018 г. № 92/к-н).
                        <br/>
                        <br/>
                    </span>
                </div>
                <div className="article__paragraph aboutme">
                    <span className="material-symbols-outlined"> workspace_premium </span>
                    <h2>Повышение квалификации:</h2>
                    <Modal active={modalActive} setActive={setModalActive}>
                    <StoreCertificates onClick={() => setModalActive(true)} />
                    </Modal>
                    <br/>
                </div>
                <div className="article__paragraph aboutme">
                    <span className="material-symbols-outlined">social_leaderboard</span>
                    <h2>Мои достижения:</h2>
                    <StoreMarksOfDistinction />
                    <StoreContests />
                    <StoreEncouragements />
                    <br/>
                </div>
                <div className="article__paragraph aboutme">
                    <span className="material-symbols-outlined">menu_book</span>
                    <h2>Мои публикации:</h2>
                    <StorePublications />
                    <br/>
                </div>
                <div>
                    <img src="images/certificate-1.jpg" />
                </div>
            </div>
        </article>
    );
}

export default AboutMe