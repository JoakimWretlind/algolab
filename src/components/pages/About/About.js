import {
    AboutSection,
    AboutContainer,
    MainHeader,
    AboutBorder,
    Subheader,
    MinHeader,
    AboutText
} from './AboutStyling';

const About = () => {
    return (
        <>
            <AboutSection>
                <AboutContainer>
                    <MainHeader>About</MainHeader>
                    <AboutBorder />
                    <Subheader>How it works</Subheader>

                    <MinHeader>Home</MinHeader>
                    <AboutText>On the home page, you can choose withch algorithm you want to practice.
                        You can choose between viewing a code or try to solve the code yourself in the
                        built in code-editor. Once in the editor you also have the possiblity to view
                        the code via the 'show solution button'</AboutText>

                    <MinHeader>The Code Editor</MinHeader>
                    <AboutText>To get the correct output use 'document.write'. The output will then show in the white
                        area at the bottom.</AboutText><br />
                    <AboutText>To run the code press the button marked 'run'.</AboutText>


                    <MinHeader>The Navbar</MinHeader>
                    <AboutText>On the top left you can navigate to other parts of the page. Here you can find information
                        about big O notation and datastructures.
                    </AboutText >

                    <Subheader>The Solutions</Subheader>
                    <AboutText>Currently, ther is just one solution to every algorithm, and it doesn't even have to be the
                        best, or most suitable. But this is version 1.0.0 of this app, so this might be changed in the future.</AboutText>

                    <Subheader>Background</Subheader>
                    <AboutText>I thought learning algorithms was a lot about searching for what and where to learn it, so I thought it would be nice to have it all in one place. Therefore I made this site, as a contribution to the community.
                    </AboutText>

                    <Subheader>Contact</Subheader>
                    <AboutText>Feel free to navigate to the contact page and let me know what you think about this page, or just
                        say hello. I have a lot of ideas for upgrading this page, but it's always nice with someone elses point of
                        view. I would also like to hear what algorithms you would like to see here. Is there anything you think I should
                        remove or add?</AboutText><br />
                </AboutContainer>
            </AboutSection>

        </>
    )
}

export default About
