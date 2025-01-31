import {NavigationHeader} from "../component/NavigationHeader.tsx";
import {MainContent} from "../component/MainContent.tsx";
import {TechnologyCard} from "../component/TechnologyCard.tsx";
import {WindowFocusHandler} from "../component/FocusBlurFooter.tsx"



const Home = () => {
    return (
        <>
            <NavigationHeader></NavigationHeader>
            <MainContent></MainContent>
            <TechnologyCard></TechnologyCard>
            <WindowFocusHandler name={"Magnus"} role={["Python", "Javascript", "TypeScript"]} about={"I love coding with react."}></WindowFocusHandler>
        </>
    );
};


export default Home;