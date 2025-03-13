import React from "react";
import { Link } from '@tanstack/react-router';
import "../style/component/Navigation.scss";
import { getThemeData } from "../utility/ThemeData";
import { GetLocalStorage, SetLocalStorage } from "../utility/LocalStorage";
import { TiThMenu } from "react-icons/ti";

export const NavigationHeader = () => {
    // Variables, states, storage.
    const storedTheme = GetLocalStorage({name: "data-theme"}) || "light";
    const currentThemeKey = storedTheme === "dark" ? "Light" : "Dark";
    const { type: IconComponent } = getThemeData(currentThemeKey);
    const [isDarkMode, setIsDarkMode] = React.useState(storedTheme === "dark");
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const handleThemeToggle = () => {
        const newTheme = isDarkMode ? "light" : "dark";
        SetLocalStorage({ name: "data-theme", value: newTheme });
        setIsDarkMode(!isDarkMode);
        document.body.setAttribute("data-theme", newTheme);
    };

    React.useEffect(() => {
        const stored = GetLocalStorage({name: "data-theme"}) || "light";
        document.body.setAttribute("data-theme", stored);
        document.body.className = `${isMenuOpen ? "content-overflow-hidden" : "content-overflow-auto"}`;
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="nav-header">
            <nav className="nav-header__container">
                <ul className={`nav-header__list ${isMenuOpen ? "open" : ""}`} data-theme={isDarkMode ? "dark" : "light"}>
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
                <TiThMenu className="nav-header__menu" onClick={toggleMenu} />
                <button
                    className="nav-header__toggle"
                    onClick={handleThemeToggle}
                >
                    {isDarkMode ? "Light" : "Dark"}
                    <IconComponent />
                </button>
            </nav>
        </header>
    );
};
