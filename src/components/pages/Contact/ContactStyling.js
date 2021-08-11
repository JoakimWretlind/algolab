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
    font-size: clamp(3rem, 5vw, 5rem);
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
    margin-top: 5rem;
    height: 100%;
    min-height: 40vh;
    width: 100%;
    max-width: 120rem;
    background: linear-gradient(-15deg, rgba(1, 4, 8,.85), rgba(1, 4, 8,.9));
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 .4rem 1rem rgba(0,0,0,.1);
    @media screen and (min-width: 714px){
        flex-direction: row;
    }
`;

export const ContactLeft = styled.div` 
    position: relative;
    width: 80%;
    min-width: 28rem;
    max-width: 60rem;
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
    background: linear-gradient(-15deg, rgba(1, 4, 8,.80), rgba(1, 4, 8,.85));
`;

export const TextContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SubInf = styled.h3`
    ${SharedSubheader};
    font-size: clamp(1.8rem, 5vw, 2.4rem);
    letter-spacing: 1rem;
    color: #f1f1f1;
`;

export const ContactRight = styled.form`
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
  background: #f1f1f1;
  ::placeholder{
      color: #b4b4b4;
      font-size: 1.2rem;
  }
`;

export const TextArea = styled.textarea`
  width: 70%;
  min-height: 12rem;
  background: #f1f1f1;
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

export const SendButton = styled.button`
    padding: .6rem 0;
    width: 24rem;
    border-radius: .4rem;
    border: .1rem solid #f1f1f1;
    outline: none;
    background: transparent;
    color: #f1f1f1;
    text-transform: uppercase;
    letter-spacing: .3rem;
    transition: .25s ease-out;
    cursor: pointer;
    &:hover{
        letter-spacing: .7rem;
        color: #FCB32A;
        border: .1rem solid #FCB32A;
    }
    &:active{
        letter-spacing: 1.1rem;
    }
`;