import React, { useState, useContext } from 'react';
import { DataContext, ImageContext, TaskContext } from '../../context/AllContex';
import { TaskP } from '../ViewCode/View.elements';
import Editor from './Editor';

import {
    Section,
    MaButton,
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
    Iframe
} from './Editor.elements';


const CodeEditor = () => {
    const { value } = useContext(DataContext);
    const { task } = useContext(TaskContext);
    const { imgValue } = useContext(ImageContext);
    const [js, setJs] = useState('')
    const [srcDoc, setSrcDoc] = useState('')

    return (
        <>
            <MaButton onClick={() => setSrcDoc(`
        <html>
          <script>${js}</script>
        </html>
      `)}>
                run
            </MaButton>
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