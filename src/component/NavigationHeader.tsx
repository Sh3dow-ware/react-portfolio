import React from "react";
import { Link } from "react-router";
import "../style/component/navigation.scss"

export const NavigationHeader = () => {

    const [toggleTheme, setTheme] = React.useState<boolean>(false)


    return (
        <header className="header">
           <nav className="nav">
               <ul className="list">
                   <li className="list__item">
                       <Link className="list" to={"/"}>Home</Link>
                   </li>
                   <li className="list__item">
                       <Link className="list" to={"/details"}>Projects</Link>
                   </li>
                   <li className="list__item">
                       <p>On</p>
                       <p>Off</p>
                   </li>
               </ul>
           </nav>
        </header>
    );
};
