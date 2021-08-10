import emailjs from 'emailjs-com';
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

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICEID, process.env.REACT_APP_TEMPLATE, e.target, process.env.REACT_APP_API)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

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
                    <ContactRight onSubmit={sendEmail}>
                        <Input type="text" placeholder="Header" name="subject" />
                        <Input type="text" placeholder="Your Name" name="name" />
                        <Input type="email" placeholder="Your Email" name="email" />
                        <TextArea placeholder="Message" name="message"></TextArea>
                        <SendButton type="submit">Send</SendButton>
                    </ContactRight>
                </ContactWrapper>
            </ContactSection>
        </>
    )
}

export default Contact
