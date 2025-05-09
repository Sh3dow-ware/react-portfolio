import React, { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import "../style/component/Navigation.scss";
import { getThemeData } from "../utility/ThemeData";
import { TiThMenu } from "react-icons/ti";

import {useTheme} from "../context/UseTheme";

export const NavigationHeader = () => {
    const { theme, toggleTheme } = useTheme();
    const currentThemeKey = theme === "dark" ? "Light" : "Dark";
    const { type: IconComponent } = getThemeData(currentThemeKey);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("content-overflow-hidden", isMenuOpen);
    }, [isMenuOpen]);


    return (
        <header className="nav-header" data-theme={theme}>
            <nav className="nav-header__container">
                <ul className={`nav-header__list ${isMenuOpen ? "open" : ""}`} data-theme={theme}>
                    <li className="nav-header__item">
                        <Link className="nav-header__link" to="/">
                            Portfolio
                        </Link>
                    </li>
                    <li className="nav-header__item">
                        <Link className="nav-header__link" to="/projects">
                            Projects
                        </Link>
                    </li>
                    <li className="nav-header__item">
                        <Link className="nav-header__link" to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>

                <TiThMenu className="nav-header__menu" onClick={() => setIsMenuOpen(!isMenuOpen)} />

                <button className="nav-header__toggle" onClick={toggleTheme}>
                    {theme === "dark" ? "Light" : "Dark"}
                    <IconComponent />
                </button>
            </nav>
        </header>
    );
};
