import { useEffect, useContext } from 'react';
import useWindowSize from '../useWindowSize';
import { Data } from '../../codeData';
import { DataContext, ImageContext, TaskContext } from '../../context/AllContex';
import {
    Section,
    Hero,
    HeroContainer,
    HeroHeader,
    HomeSubheader,
    HomeContainer,
    ButtonWrapper,
    ButtonTitle,
    ButtonContainer,
    AlgoButton,
    Border
} from './Home.elements';

const Home = () => {
    const { setValue } = useContext(DataContext);
    const { setTask } = useContext(TaskContext);
    const { setImgValue } = useContext(ImageContext);

    let SortedData = Data.sort((a, b) => (a.title > b.title)
        ? 1 : ((a.title < b.title)
            ? -1 : 0));

    const windowSize = useWindowSize();

    useEffect(() => { }, [windowSize.width]);

    let getAlgoWidth = window.innerWidth;
    if (getAlgoWidth < 500) {
        getAlgoWidth = 1;
    }
    if (getAlgoWidth > 500 && getAlgoWidth < 715) {
        getAlgoWidth = 2;
    }
    if (getAlgoWidth > 715 && getAlgoWidth < 1000) {
        getAlgoWidth = 3
    }
    if (getAlgoWidth > 1000) {
        getAlgoWidth = 4;
    };

    let getData = Math.ceil(SortedData.length / getAlgoWidth);

    return (
        <>
            <Section>
                <Hero>
                    <HeroContainer>
                        <HeroHeader>algolab</HeroHeader>
                        <Border />
                        <HomeSubheader>a new way of learning algorithms</HomeSubheader>
                    </HeroContainer>
                </Hero>
                <HomeContainer
                    style={{
                        display: 'grid',
                        gridTemplate: `repeat(${getData}, 1fr) / repeat(${getAlgoWidth}, 1fr)`
                    }}>
                    {SortedData.map((item, index) => {
                        return (
                            <ButtonWrapper key={item.id}>
                                <ButtonTitle >{item.title}</ButtonTitle>
                                <ButtonContainer>
                                    <AlgoButton
                                        to="/viewcode" onClick={() => { setValue(item.title); setTask(item.task); setImgValue(item.image); }}>
                                        view
                                    </AlgoButton>
                                    <AlgoButton
                                        to="/codeeditor" onClick={() => { setValue(item.title); setTask(item.task); setImgValue(item.image); }}>
                                        code editor
                                    </AlgoButton>
                                </ButtonContainer>
                            </ButtonWrapper>
                        )
                    })}
                </HomeContainer>
            </Section>
        </>
    )
}

export default Home
