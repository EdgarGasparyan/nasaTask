import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const en = {
  nasa: "nasa browser",
  home: "home",
  nearby_asteroids: "nearby asteroids",
  astronomy: "astronomy picture of the day",
  new_planet: "Submit new planet",
};

const ru = {
  nasa: "nasa браузер",
  home: "главная",
  nearby_asteroids: "ближайшие астероиды",
  astronomy: "астрономическая картинка дня",
  new_planet: "Добавить новую планету",
};

const hy = {
  nasa: "nasa բրաուզեր",
  home: "գլխավոր",
  nearby_asteroids: "մոտակա աստերոիդները",
  astronomy: "աստղագիտություն - օրվա նկար",
  new_planet: "Ավելացնել նոր մոլորակ",
};

const Navbar = () => {
  const [local, setLocal] = useState(en);

  const handlechange = (lang) => {
    setLocal(lang);
  };

  return (
    <div>
      <h1>{local.nasa}</h1>
      <nav>
        <ul id="menu">
          <li>
            <Link to="/"> {local.home} </Link>|
          </li>
          <li>
            <Link to="/asteroids"> {local.nearby_asteroids} </Link>|
          </li>
          <li>
            <Link to="/astronomy"> {local.astronomy} </Link>|
          </li>
          <li>
            <Link to="/planet">{local.new_planet}</Link>
          </li>
        </ul>
        <ul className="lang-bar">
          <li onClick={(e) => handlechange(en)}>
            <a>EN</a> |
          </li>
          <li onClick={(e) => handlechange(ru)}>
            <a>РУ</a> |
          </li>
          <li onClick={(e) => handlechange(hy)}>
            <a>ՀՅ</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
