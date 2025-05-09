import React, { useEffect, useState, useMemo, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import "../style/component/Navigation.scss";
import { getThemeData } from "../utility/ThemeData";
import { TiThMenu } from "react-icons/ti";
import { useTheme } from "../context/UseTheme";

export const NavigationHeader = () => {
    const { theme, toggleTheme } = useTheme();
    const currentThemeKey = theme === "dark" ? "Light" : "Dark";

    const IconComponent = useMemo(() => {
        return getThemeData(currentThemeKey).type;
    }, [currentThemeKey]);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        const newClass = isMenuOpen ? "content-overflow-hidden" : "content-overflow-auto";
        if (document.body.className !== newClass) {
            document.body.className = newClass;
        }
    }, [isMenuOpen]);

    const handleToggleMenu = useCallback(() => {
        if (isMenuOpen) {
            setIsClosing(true);
            const timer = setTimeout(() => {
                setIsClosing(false);
                setIsMenuOpen(false);
            }, 500);
            return () => clearTimeout(timer); 
        } else {
            setIsMenuOpen(true);
        }
    }, [isMenuOpen]);

    const navListClasses = useMemo(() => {
        let classList = "nav-header__list";
        if (isMenuOpen) classList += " open";
        if (isClosing) classList += " closing";
        return classList;
    }, [isMenuOpen, isClosing]);

    return (
        <header className="nav-header" data-theme={theme}>
            <nav className="nav-header__container">
                <ul className={navListClasses} data-theme={theme}>
                    <li className="nav-header__item">
                        <Link className="nav-header__link" to="/">Portfolio</Link>
                    </li>
                    <li className="nav-header__item">
                        <Link className="nav-header__link" to="/projects">Projects</Link>
                    </li>
                    <li className="nav-header__item">
                        <Link className="nav-header__link" to="/contact">Contact</Link>
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
