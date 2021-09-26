import Selfie from '../../images/selfie.png';
import {
    ContactSection,
    ContactContainer,
    MainHeader,
    ContactBorder,
    ContactWrapper,
    ContactLeft,
    ContactRight,
    Input,
    TextArea,
    ContactImg,
    SelfieOverlay,
    TextContainer,
    SubInf,
    InfoBorder,
    SendButton
} from "./ContactStyling"

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
                        <ContactImg src={Selfie} alt="page creator" />
                        <SelfieOverlay />
                        <TextContainer>
                            <MainHeader>algolab</MainHeader>
                            <InfoBorder />
                            <SubInf>Joakim Wretlind</SubInf>
                        </TextContainer>
                    </ContactLeft>
                    <ContactRight name="contact" method="post">
                        <Input type="hidden" name="form-name" value="contact" />
                        <Input type="text" placeholder="Header" name="subject" required />
                        <Input type="text" placeholder="Your Name" name="name" required />
                        <Input type="email" placeholder="Your Email" name="email" required />
                        <TextArea placeholder="Message" name="message" required></TextArea>
                        <SendButton type="submit" value="Submit message">Send</SendButton>
                    </ContactRight>
                </ContactWrapper>
            </ContactSection>
        </>
    )
}

export default Contact
