import {NavigationHeader} from "../component/NavigationHeader.tsx";
import {MainContent} from "../component/MainContent.tsx";
import {TechnologyCard} from "../component/TechnologyCard.tsx";

const Home = () => {
    return (
        <>
            <NavigationHeader></NavigationHeader>
            <MainContent></MainContent>
            <TechnologyCard></TechnologyCard>
        </>
    );
};


export default Home;