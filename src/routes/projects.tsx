import {createFileRoute} from '@tanstack/react-router'
import {NavigationHeader} from "@component/NavigationHeader";
import {ProjectCards} from "@component/ProjectCards";
import {ThemeProvider} from "../context/ThemeContext";
import {CrtEffect} from "@component/CrtEffect";

export const Route = createFileRoute('/projects')({
    component: RouteComponent,
})

function RouteComponent() {
    return (<>
            <ThemeProvider>
                <CrtEffect></CrtEffect>
                <NavigationHeader></NavigationHeader>
                <ProjectCards></ProjectCards>
            </ThemeProvider>
        </>
    )
}
