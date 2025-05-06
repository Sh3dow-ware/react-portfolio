import { createFileRoute } from '@tanstack/react-router'
import { MdEmail } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'
import '@style/component/Contact.scss'
import "@style/main.scss"
import {NavigationHeader} from "@component/NavigationHeader";
import {useEffect} from "react";
import {ThemeProvider} from "../context/ThemeContext";

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})



function RouteComponent() {

  useEffect(() => {
    document.body.classList.add("contact__portfolio-body");
    document.getElementById("root")?.classList.add("contact__portfolio-root")
    return () => {
      document.body.classList.remove("contact__portfolio-body");
      document.getElementById("root")?.classList.remove("contact__portfolio-root");
    };
  }, []);


  return (
      <>
        <ThemeProvider>
      <NavigationHeader></NavigationHeader>
      <div className="contact">
        <h1 className="contact__title">Contact Me</h1>
        <p className="contact__text">
          You can only contact me via one of the following:
        </p>
        <ul className="contact__list">
          <li className="contact__item">
            <MdEmail className="contact__icon" />
            <span className="contact__label">Email:</span>{' '}
            <a
                href="mailto:randomacc12411@gmail.com"
                className="contact__link"
            >
              randomacc12411@gmail.com
            </a>
          </li>
          <li className="contact__item">
            <FaGithub className="contact__icon" />
            <span className="contact__label">GitHub:</span>{' '}
            <a
                href="https://github.com/Sh3dow-ware"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
        </ThemeProvider>
      </>
  )
}
