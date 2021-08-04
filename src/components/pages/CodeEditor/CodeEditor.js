import React, { useContext } from 'react';
import { DataContext, ImageContext, TaskContext } from '../../context/AllContex';

import {
    Section,
    Hero,
    HeroContainer,
    HeroHeader,
    Border
} from './Editor.elements';


const CodeEditor = () => {
    const { value } = useContext(DataContext);
    const { task } = useContext(TaskContext);
    const { imgValue } = useContext(ImageContext);

    return (
        <Section>
            <Hero>
                <HeroContainer>
                    <HeroHeader>{value}</HeroHeader>
                    <Border />
                </HeroContainer>
            </Hero>
        </Section>
    )
}

export default CodeEditor
