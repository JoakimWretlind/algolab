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
    Border,
    ViewSubheader
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
                        <ViewSubheader>{task}</ViewSubheader>
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
