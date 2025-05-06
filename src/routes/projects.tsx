import {createFileRoute} from '@tanstack/react-router'
import {NavigationHeader} from "@component/NavigationHeader";
import {ProjectCards} from "@component/ProjectCards";
import {ThemeProvider} from "../context/ThemeContext";

export const Route = createFileRoute('/projects')({
    component: RouteComponent,
})

function RouteComponent() {
    return (<>
            <ThemeProvider>

                <NavigationHeader></NavigationHeader>
                <ProjectCards></ProjectCards>
            </ThemeProvider>
        </>
    )
}
