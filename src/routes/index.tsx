import {createFileRoute} from '@tanstack/react-router'
import {MainContent} from "@component/MainContent";
import {NavigationHeader} from "@component/NavigationHeader";
import "@style/main.scss"
import {SkillCard} from "@component/SkillCard";
import javascriptLogo from "../images/JS.svg";
import typescriptLogo from "../images/TS.svg";
import pythonLogo from "../images/PY.svg";


const icons = {
    "JavaScript": javascriptLogo,
    "TypeScript": typescriptLogo,
    "Python": pythonLogo,
};

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <>
            <NavigationHeader></NavigationHeader>
            <MainContent></MainContent>
            <div className="skills">
                <h2 className="skills-header__title">Expertise</h2>
                {Object.entries(icons).map(([key, icon], index) => (
                    <SkillCard key={index} imgSrc={icon} title={key}/>
                ))}
            </div>
        </>
    )
}