import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav className="menu">
      <NavLink className={({ isActive }) => isActive ? "menu__item menu__item-active" : "menu__item"}  to="/">Главная</NavLink>
      <NavLink className={({ isActive }) => isActive ? "menu__item menu__item-active" : "menu__item"}  to="/about-me">Обо мне</NavLink>
      <NavLink className={({ isActive }) => isActive ? "menu__item menu__item-active" : "menu__item"}  to="/my-experience">Делюсь опытом</NavLink>
      <NavLink className={({ isActive }) => isActive ? "menu__item menu__item-active" : "menu__item"}  to="/check-yourself">Проверь себя</NavLink>
      <NavLink className={({ isActive }) => isActive ? "menu__item menu__item-active" : "menu__item"}  to="/exam-preparation">Готовлюсь к ВПР и ГИА</NavLink>
      <NavLink className={({ isActive }) => isActive ? "menu__item menu__item-active" : "menu__item"}  to="/interestingly">"Это интересно..."</NavLink>
      <NavLink className={({ isActive }) => isActive ? "menu__item menu__item-active" : "menu__item"}  to="/write-me">Напиши мне</NavLink>
    </nav>
  );
}
    
export default Menu
      