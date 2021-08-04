import React, { useContext } from 'react';
import { DataContext, ImageContext, TaskContext } from '../../context/AllContex';

import {
    Section,
    Hero,
    HeroContainer,
    HeroHeader,
    ViewContainer,
    ViewButton,
    CodeImage,
    Border
} from './View.elements';

const CodeView = () => {
    const { value } = useContext(DataContext);
    const { task } = useContext(TaskContext);
    const { imgValue } = useContext(ImageContext);

    return (
        <>
            <Section>
                <Hero>
                    <HeroContainer>
                        <HeroHeader>{value}</HeroHeader>
                        <Border />
                    </HeroContainer>
                </Hero>
                <ViewContainer>
                    <CodeImage src={imgValue} alt="" />
                    <ViewButton to="/codeeditor" key={value} >code editor</ViewButton>
                    <ViewButton to="/" >home</ViewButton>
                </ViewContainer>
            </Section>
        </>
    )
}

export default CodeView
