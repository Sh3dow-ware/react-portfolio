import {createFileRoute} from '@tanstack/react-router'
import {NavigationHeader} from "@component/NavigationHeader";
import {ProjectCards} from "@component/ProjectCards";

export const Route = createFileRoute('/projects')({
    component: RouteComponent,
})

function RouteComponent() {
    return (<>

            <NavigationHeader></NavigationHeader>
            <ProjectCards></ProjectCards>
        </>
    )
}
