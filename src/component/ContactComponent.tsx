import {MdEmail} from "react-icons/md";
import {FaGithub} from "react-icons/fa";
import {emailForContact, githubAccountForContact} from "../utility/VariableUtilities";

export const ContactComponent = () => {
    return (
        <>
            <div className="contact">
                <h1 className="contact__title">Contact Me</h1>
                <p className="contact__text">
                    You can only contact me via one of the following:
                </p>
                <ul className="contact__list">
                    <li className="contact__item">
                        <MdEmail className="contact__icon"/>
                        <span className="contact__label">Email:</span>{' '}
                        <a
                            href={`mailto:${emailForContact}`}
                            className="contact__link"
                        >
                            {emailForContact}
                        </a>
                    </li>
                    <li className="contact__item">
                        <FaGithub className="contact__icon"/>
                        <span className="contact__label">GitHub:</span>{' '}
                        <a
                            href={`${githubAccountForContact}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact__link"
                        >
                            Github
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};