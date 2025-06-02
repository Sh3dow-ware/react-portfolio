import {createFileRoute} from '@tanstack/react-router'
import {MainContent} from "@component/MainContent";
import {NavigationHeader} from "@component/NavigationHeader";
import "@style/main.sass"
import javascriptLogo from "../images/JS.svg";
import typescriptLogo from "../images/TS.svg";
import pythonLogo from "../images/PY.svg";
import luaLogo from "../images/LUAU.svg";
import phpLogo from "../images/PHP.svg";

import reactLogo from "../images/REACT.svg";
import viteLogo from "../images/VITE.svg";
import scssLogo from "../images/SCSS.svg";
import {ThemeProvider} from "../context/ThemeContext";
import {SkillComponent} from "@component/SkillComponent";


const icons = {
    "JavaScript": javascriptLogo,
    "TypeScript": typescriptLogo,
    "Python": pythonLogo,
    "Lua": luaLogo,
    "PHP": phpLogo,
};


const tools = {
    "React": reactLogo,
    "Vite": viteLogo,
    "SCCS": scssLogo
}

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <>
            <ThemeProvider>
                <NavigationHeader></NavigationHeader>
                <MainContent></MainContent>
                <SkillComponent icons={icons} tools={tools}></SkillComponent>
            </ThemeProvider>
        </>
    )
}