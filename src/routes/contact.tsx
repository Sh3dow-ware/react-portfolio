import {createFileRoute, Outlet, useRouter} from '@tanstack/react-router'
import '@style/component/Contact.scss'
import "@style/main.scss"
import {NavigationHeader} from "@component/NavigationHeader";
import {useEffect} from "react";
import {ThemeProvider} from "../context/ThemeContext";
import {ContactComponent} from "@component/ContactComponent";

export const Route = createFileRoute('/contact')({
    component: RouteComponent,
})

function RouteComponent() {
    const router = useRouter();
    const path = router.state.location.pathname;

    useEffect(() => {
        document.body.classList.add("contact__portfolio-body");
        document.getElementById("root")?.classList.add("contact__portfolio-root")
        return () => {
            document.body.classList.remove("contact__portfolio-body");
            document.getElementById("root")?.classList.remove("contact__portfolio-root");
        };
    }, []);
    console.log(path)
    if (path !== '/contact') {
        return <Outlet/>
    }

    return (
        <>
            <ThemeProvider>
                <NavigationHeader></NavigationHeader>
                <ContactComponent></ContactComponent>
            </ThemeProvider>
        </>
    )
}
