import React from "react";
import "@style/component/SkillCard.scss"
interface SkillCardProps {
    imgSrc: string;
    title: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({ imgSrc, title }) => {
    return (
        <>
        <figure className="skills__card">
            <img src={imgSrc} alt={title} className="skills__img"  />
            <figcaption className="skills__title">{title}</figcaption>
        </figure>
        </>
    );
};
