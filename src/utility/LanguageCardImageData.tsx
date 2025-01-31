import {
    SiTypescript as TypeScript_Logo, SiJavascript as JavaScript_Logo, SiCss3 as CSS_Logo, SiHtml5 as HTML_Logo,
    SiSqlite as SQLite_Logo, SiPython as Python_Logo, SiJson as JSON_Logo, SiTailwindcss as Tailwind_Logo,
    SiReact as React_Logo, SiLua as Lua_Logo, SiNodedotjs as NodeJS_Logo, SiTsnode as NodeTS_Logo
} from "react-icons/si";
import {IconType} from "react-icons";

export const dataIcons: { [key: string]: { Icon: IconType, url: string } } = {
    "TS": {Icon: TypeScript_Logo, url: "https://www.typescriptlang.org/"},
    "JS": {Icon: JavaScript_Logo, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
    "CSS": {Icon: CSS_Logo, url: "https://developer.mozilla.org/en-US/docs/Web/CSS"},
    "HTML": {Icon: HTML_Logo, url: "https://developer.mozilla.org/en-US/docs/Web/HTML"},
    "Python": {Icon: Python_Logo, url: "https://www.python.org/"},
    "Lua": {Icon: Lua_Logo, url: "https://www.lua.org/"},
    "React": {Icon: React_Logo, url: "https://reactjs.org/"},
    "JSON": {Icon: JSON_Logo, url: "https://www.json.org/json-en.html"},
    "Tailwind": {Icon: Tailwind_Logo, url: "https://tailwindcss.com/"},
    "Sql": {Icon: SQLite_Logo, url: "https://www.sqlite.org/"},
    "Node JS": {Icon: NodeJS_Logo, url: "https://nodejs.org/"},
    "Node TS": {Icon: NodeTS_Logo, url: "https://www.npmjs.com/package/ts-node"},
};