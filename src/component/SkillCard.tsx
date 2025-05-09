import React from "react";
import "@style/component/SkillCard.scss"
interface SkillCardProps {
    imgSrc: string;
    title: string;
}

export const SkillCard = React.memo(({ imgSrc, title }: SkillCardProps) => {
    return (
        <figure className="skills__card">
            <img src={imgSrc} alt={title} className="skills__img" loading="eager" />
            <figcaption className="skills__title">{title}</figcaption>
        </figure>
    );
});
