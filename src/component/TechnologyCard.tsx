import {
    TypeScript_Logo, JavaScript_Logo, HTML_Logo, Python_Logo,
    CSS_Logo, Lua_Logo, React_Logo, SQLite_Logo, JSON_Logo, Tailwind_Logo
} from "../utility/LanguageCardImageData.tsx";
import { IconType } from "react-icons";
import "../style/component/TechnologyCard.scss";
import { Link } from 'react-router';

const dataIcons: { [key: string]: { Icon: IconType, url: string } } = {
    "TS": { Icon: TypeScript_Logo, url: "https://www.typescriptlang.org/" },
    "JS": { Icon: JavaScript_Logo, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    "CSS": { Icon: CSS_Logo, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    "HTML": { Icon: HTML_Logo, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    "Python": { Icon: Python_Logo, url: "https://www.python.org/" },
    "Lua": { Icon: Lua_Logo, url: "https://www.lua.org/" },
    "React": { Icon: React_Logo, url: "https://reactjs.org/" },
    "JSON": { Icon: JSON_Logo, url: "https://www.json.org/json-en.html" },
    "Tailwind": { Icon: Tailwind_Logo, url: "https://tailwindcss.com/" },
    "Sql": { Icon: SQLite_Logo, url: "https://www.sqlite.org/" },
};

export const TechnologyCard = () => {
    return (
        <div className="TechnologyCard">
            <div className="header-container">
                <h1 className="title">Technologies and languages I've worked with:</h1>
            </div>
            <div className="cards-container">
                {Object.entries(dataIcons).map(([key, { Icon, url }]) => (
                    <Link to={url} target={"_blank"} key={key}>
                        <section className="card">
                            <Icon size={50} />
                            <h3>{key}</h3>
                        </section>
                    </Link>
                ))}
            </div>
        </div>
    );
};
