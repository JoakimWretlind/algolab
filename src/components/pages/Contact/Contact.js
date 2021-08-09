import {
    ContactSection,
    ContactContainer,
    MainHeader,
    ContactBorder,
    ContactWrapper,
    ContactLeft,
    ContactRight,
    FormContainer,
    FormContainerRight,
    Input,
    TextArea
} from "./ContactSection"

const Contact = () => {
    return (
        <>
            <ContactSection>
                <ContactContainer>
                    <MainHeader>contact</MainHeader>
                    <ContactBorder />
                </ContactContainer>
                <ContactWrapper>
                    <ContactLeft>
                        <FormContainer>

                        </FormContainer>
                    </ContactLeft>
                    <ContactRight>

                        <Input type="text" placeholder="Your Name" />
                        <Input type="email" placeholder="Your Email" />
                        <TextArea placeholder="Message"></TextArea>

                    </ContactRight>
                </ContactWrapper>
            </ContactSection>
        </>
    )
}

export default Contact
