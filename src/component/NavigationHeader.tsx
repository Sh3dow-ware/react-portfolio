import React from "react";
import { Link } from "react-router";
import "../style/component/navigation.scss";

export const NavigationHeader = () => {
    const [toggleTheme, setTheme] = React.useState<boolean>(false);

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
                    onClick={() => setTheme(!toggleTheme)}
                >
                    {toggleTheme ? "Dark" : "Light"}
                </button>
            </nav>
        </header>
    );
};
