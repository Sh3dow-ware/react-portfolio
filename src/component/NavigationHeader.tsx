import React, { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import "../style/component/Navigation.scss";
import { getThemeData } from "../utility/ThemeData";
import { TiThMenu } from "react-icons/ti";

import { useTheme } from "../context/UseTheme";

export const NavigationHeader = () => {
    const { theme, toggleTheme } = useTheme();
    const currentThemeKey = theme === "dark" ? "Light" : "Dark";
    const { type: IconComponent } = getThemeData(currentThemeKey);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        document.body.className = isMenuOpen ? "content-overflow-hidden" : "content-overflow-auto";
    }, [isMenuOpen]);

    const handleToggleMenu = () => {
        if (isMenuOpen) {
            setIsClosing(true);
            setTimeout(() => {
                setIsClosing(false);
                setIsMenuOpen(false);
            }, 500);
        } else {
            setIsMenuOpen(true);
        }
    };

    return (
        <header className="nav-header" data-theme={theme}>
            <nav className="nav-header__container">
                <ul
                    className={`nav-header__list ${isMenuOpen ? "open" : ""} ${isClosing ? "closing" : ""}`}
                    data-theme={theme}
                >
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

                <TiThMenu className="nav-header__menu" onClick={handleToggleMenu} />

                <button className="nav-header__toggle" onClick={toggleTheme}>
                    {theme === "dark" ? "Light" : "Dark"}
                    <IconComponent />
                </button>
            </nav>
        </header>
    );
};
