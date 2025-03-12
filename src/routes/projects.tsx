import { createFileRoute } from '@tanstack/react-router'
import {NavigationHeader} from "@component/NavigationHeader";

export const Route = createFileRoute('/projects')({
  component: RouteComponent,
})

function RouteComponent() {
    return <NavigationHeader></NavigationHeader>
}
