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
    InfoBorder
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
                        <ContactImg src={Selfie} alt="page creator" />
                        <SelfieOverlay />
                        <TextContainer>
                            <MainHeader>algolab</MainHeader>
                            <InfoBorder />
                            <SubInf>Joakim Wretlind</SubInf>
                        </TextContainer>
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
