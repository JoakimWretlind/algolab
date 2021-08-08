import { useState } from 'react';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2';
import {
    EditorContainer,
    EditorTitle,
    NavToggle,
    ShowSolution
} from './Editor.elements';
import { AiOutlineArrowRight } from "react-icons/ai";


const Editor = ({ language, displayName, value, onChange }) => {
    const [solution, setSolution] = useState(false);

    function handleChange(editor, data, value) {
        onChange(value)
    }

    return (
        <EditorContainer solution={solution}>
            <EditorTitle>
                {displayName}

                <NavToggle to="#">
                    <ShowSolution onClick={() => setSolution(!solution)}>
                        show solution
                    </ShowSolution>
                </NavToggle>
            </EditorTitle>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: 'material',
                    lineNumbers: true
                }}
            />
        </EditorContainer>
    )
}

export default Editor