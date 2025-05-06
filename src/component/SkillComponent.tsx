import {SkillCard} from "@component/SkillCard";
import {useTheme} from "../context/UseTheme";
interface SkillIconToolProps {
    tools: object
    icons:object;
}

export const SkillComponent = ({tools, icons} : SkillIconToolProps ) => {
    const {theme} = useTheme();
    return (
        <>
            <div className="skills">
                <h2 className="skills-header__title" data-theme={theme}>Expertise</h2>
                {Object.entries(icons).map(([key, icon], index) => (
                    <SkillCard key={index} imgSrc={icon} title={key}/>
                ))}
            </div>
            <div className="skills reverse-background">
                <h2 className="skills-header__title" data-theme={theme}>Frameworks & Tools</h2>
                {Object.entries(tools).map(([key, icon], index) => (
                    <SkillCard key={index} imgSrc={icon} title={key}/>
                ))}
            </div>
        </>
    );
};