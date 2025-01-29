import '../style/component/MainContent.scss';

export const MainContent = () => {
    return (
        <main className="main-content">
            <section className="main-content__section">
                <h2 className="main-content__title">Hey, it's me <span className="main-content__highlight">Magnus</span></h2>
                <p className="main-content__description">I am a passionate developer.</p>
            </section>
        </main>
    );
};
