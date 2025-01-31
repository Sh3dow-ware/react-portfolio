import React from "react";
import { Link } from "react-router";
import "../style/component/Navigation.scss";
import {themeData} from "../utility/ThemeData.tsx";

export const NavigationHeader = () => {
    const [toggleTheme, setTheme] = React.useState<boolean>(false);
    const IconComponent = themeData[toggleTheme ? "Dark" : "Light"];

    document.body.setAttribute("data-theme", toggleTheme ? "dark" : "light");
    return (
        <header className="nav-header">
            <nav className="nav-header__container">
                <ul className="nav-header__list">
                    <li className="nav-header__item">
                        <Link className="nav-header__link" to={"/"}>Portfolio</Link>
                    </li>
                    <li className="nav-header__item">
                        <Link className="nav-header__link" to={"/projects"}>Projects</Link>
                    </li>
                    <li className="nav-header__item">
                        <Link className="nav-header__link" to={"/contact"}>Contact</Link>
                    </li>
                </ul>
                <button
                    className="nav-header__toggle"
                    onClick={() => setTheme(!toggleTheme)}>
                    {toggleTheme ? "Dark" : "Light "}
                    <IconComponent />
                </button>
            </nav>
        </header>
    );
};
