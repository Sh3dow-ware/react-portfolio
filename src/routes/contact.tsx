import {createFileRoute, Outlet, useRouter} from '@tanstack/react-router'
import '@style/component/Contact.sass'
import "@style/main.sass"
import {NavigationHeader} from "@component/NavigationHeader";
import {ThemeProvider} from "../context/ThemeContext";
import {ContactComponent} from "@component/ContactComponent";

export const Route = createFileRoute('/contact')({
    component: RouteComponent,
})

function RouteComponent() {
    const router = useRouter();
    const path = router.state.location.pathname;

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
