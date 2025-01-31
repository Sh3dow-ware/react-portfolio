import {dataIcons} from "../utility/LanguageCardImageData.tsx";
import "../style/component/TechnologyCard.scss";
import { Link } from 'react-router';


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
