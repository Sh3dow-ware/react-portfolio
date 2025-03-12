import "../style/component/MainContent.scss";
import {TypeAnimation} from "react-type-animation"

export const MainContent = () => {
    return (
        <main className="main-content">
            <section className="main-content__section">
                <h2 className="main-content__title">
                    Hey, it's me <span className="main-content__highlight">Magnus</span>
                </h2>
                <p className="main-content__description">
                    <TypeAnimation className={"main-content__developertag"}
                                   sequence={[
                                       "I am a passionate developer",
                                       2000,
                                       "I am a passionate creator",
                                       2000,
                                       "I am a passionate designer",
                                       2000,
                                       "I am a passionate coder",
                                       2000,
                                       "I love react",
                                       1500,
                                       "",
                                   ]}
                                   repeat={Infinity}
                                   wrapper="span"
                                   speed={10}
                    ></TypeAnimation>
                </p>
            </section>
        </main>
    );
};
