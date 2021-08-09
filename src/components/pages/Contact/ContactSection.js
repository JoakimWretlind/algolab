import styled from 'styled-components';
import { SharedTextSection, SharedTextContainer, SharedHeader, SharedBorder, SharedSubheader } from '../../sharedStyling';

export const ContactSection = styled.section`
    ${SharedTextSection};
    display: flex;
    flex-direction: column;
    padding: 0 3rem;
    align-items: center;
    justify-content: flex-start;
    background: linear-gradient(-5deg, #222222, #020911);
`;

export const ContactContainer = styled.div`
    ${SharedTextContainer};
`;

export const MainHeader = styled.h1`
    ${SharedHeader};
    color: #f1f1f1;
`;

export const ContactBorder = styled.div`
    ${SharedBorder}
    background: #f1f1f1;
    width: 100%;
`;

export const InfoBorder = styled.div`
    ${SharedBorder}
    margin-bottom: 2rem;
    background: #f1f1f1;
    width: 75%;
`;

export const ContactWrapper = styled.div`
    height: 100%;
    min-height: 40vh;
    width: 100%;
    max-width: 120rem;
    background: linear-gradient(-15deg, rgba(1, 4, 8,.85), rgba(1, 4, 8,.9));
    display: flex;
    box-shadow: 0 .4rem 1rem rgba(0,0,0,.1);
`;

export const ContactLeft = styled.div` 
    position: relative;
    width: 80%;
    min-width: 28rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContactImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

export const SelfieOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(-15deg, rgba(1, 4, 8,.85), rgba(1, 4, 8,.9));
`;

export const TextContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SubInf = styled.h2`
    ${SharedSubheader};
    font-size: clamp(1.8rem, 5vw, 2.4rem);
    letter-spacing: 1rem;
    color: #f1f1f1;
`;


export const ContactRight = styled.div`
    width: 100%;
    min-width: 28rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input`
  width: 70%;
  border-radius: .3rem;
  margin-bottom: 2rem;
  padding: .5rem 0 .5rem 1rem;
  outline: none;
  border: none;
  font-size: 1.4rem;
  box-shadow: inset 0 .1rem .3em rgba(0,0,0,.4),
  inset 0 -.2rem .4rem rgba(255,255,255,.8);
  background: #E5E4DF;
  ::placeholder{
      color: #b4b4b4;
      font-size: 1.2rem;
  }
`;

export const TextArea = styled.textarea`
  width: 70%;
  min-height: 30%;
  background: #E5E4DF;
  border-radius: .3rem;
  margin-bottom: 2rem;
  padding: .4rem .6rem;
  outline: none;
  border: none;
  font-family: 'montserrat';
  font-size: 1.4rem;
  box-shadow: inset 0 .1rem .3em rgba(0,0,0,.4), 
  inset 0 -.2rem .4rem rgba(255,255,255,.8);
  ::placeholder{
      color: #b4b4b4;
      font-size: 1.2rem;
  }
`;