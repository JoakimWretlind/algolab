import styled from 'styled-components';
import { SharedTextSection, SharedTextContainer, SharedHeader, SharedBorder } from '../../sharedStyling';

export const ContactSection = styled.section`
    ${SharedTextSection};
    display: flex;
    flex-direction: column;
    padding: 0 3rem;
    align-items: center;
    justify-content: flex-start;
    background: linear-gradient(-5deg, #333333, #111111);
`;

export const ContactContainer = styled.div`
    ${SharedTextContainer}
`;

export const MainHeader = styled.h1`
    ${SharedHeader};
    text-align: left;
    margin-left: 1rem;
    color: #f1f1f1;
`;

export const ContactBorder = styled.div`
    ${SharedBorder}
    margin-bottom: 0;
    background: #f1f1f1;
    width: 75%;
`;

export const ContactWrapper = styled.div`
    height: 100%;
    min-height: 60vh;
    width: 100%;
    max-width: 120rem;
    background: linear-gradient(-5deg, #2e2e2e, #222);
    display: flex;
    box-shadow: 0 .4rem 1rem rgba(0,0,0,.1);
`;

export const ContactLeft = styled.div` 
    width: 100%;
    min-width: 28rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: .1rem solid #f1f1f1;
`;


export const ContactRight = styled.div`
    width: 100%;
    min-width: 28rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const FormContainer = styled.div`
    height: 80%;
    width: 70%; 
    background: gray;
`;

export const FormContainerRight = styled.div`
    height: 80%;
    width: 70%; 
    background: gray;
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
  width: 70%;
  border-radius: .3rem;
  margin-bottom: 2rem;
  padding: .5rem 0 .5rem 1rem;
  outline: none;
  border: none;
  font-size: 1.4rem;
  ::placeholder{
      color: #b4b4b4;
      font-size: 1.2rem;
  }
`;

export const TextArea = styled.textarea`
  width: 70%;
  min-height: 30%;
  border-radius: .3rem;
  margin-bottom: 2rem;
  padding: .4rem .6rem;
  outline: none;
  border: none;
  font-size: 1.4rem;
  ::placeholder{
      color: #b4b4b4;
      font-size: 1.2rem;
  }
`;