import React, { useState, useContext } from 'react';
import { DataContext, ImageContext, TaskContext } from '../../context/AllContex';
import { TaskP } from '../ViewCode/View.elements';
import Editor from './Editor';

import {
    Section,
    EditorButton,
    Hero,
    HeroContainer,
    HeroHeader,
    Border,
    CodeSubHeader,
    Pane,
    TopPane,
    ImgContainer,
    Img,
    PaneContainer,
    ButtonContainer,
} from './Editor.elements';


const CodeEditor = () => {
    const { value } = useContext(DataContext);
    const { task } = useContext(TaskContext);
    const { imgValue } = useContext(ImageContext);
    const [js, setJs] = useState('')
    const [srcDoc, setSrcDoc] = useState('')

    return (
        <>

            <Section>
                <Hero>
                    <HeroContainer>
                        <HeroHeader>{value}</HeroHeader>
                        <Border />
                        <CodeSubHeader>{task}</CodeSubHeader>
                    </HeroContainer>
                </Hero>
            </Section>

            <PaneContainer>
                <TopPane>
                    <ButtonContainer>

                        <EditorButton onClick={() => setSrcDoc(`
                                <html>
                                    <script>${js}</script>
                                </html>`)}>
                            run
                        </EditorButton>
                        <EditorButton to="/" >home</EditorButton>
                    </ButtonContainer>
                    <Editor
                        language="javascript"
                        displayName="JS"
                        value={js}
                        onChange={setJs} >
                    </Editor>
                    <ImgContainer>
                        <Img src={imgValue} />
                    </ImgContainer>
                </TopPane>
                <Pane>
                    <iframe
                        srcDoc={srcDoc}
                        title="output"
                        sandbox="allow-scripts"
                        frameBorder="0"
                        width="100%"
                        height="100%"
                    />
                </Pane>
            </PaneContainer>
        </>
    )
}

export default CodeEditor