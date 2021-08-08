import styled from 'styled-components';
import { SharedSection, SharedHero, SharedHeroContainer, SharedHeader, DefaultButton, SharedBorder, SharedSubheader } from '../../sharedStyling';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  ${SharedSection};
  display: flex;
  border: 3px solid red;
`;

export const Hero = styled.div`
  ${SharedHero};
  background: linear-gradient(15deg, #959EA2, #CED1D4);
`;

export const HeroContainer = styled.div`
  ${SharedHeroContainer};  
`;

export const HeroHeader = styled.h1`
  ${SharedHeader}  
`;

export const Border = styled.div`
  ${SharedBorder};
`;

export const CodeSubHeader = styled.h4`
    ${SharedSubheader};
`;

export const EditorContainer = styled.div`
  height: 100%;
  width: ${({ solution }) => (solution ? '50%' : '100%')};
  display: flex;
  flex-direction: column;
  padding: .5rem;
  font-size: 2rem;
  z-index: 2;
  transition: .5s linear;
`;

export const EditorTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: hsl(225, 6%, 13%);
  color: white;
  height: 100%;
  padding: .5rem .5rem .5rem 1rem;
  border-top-right-radius: .5rem;
  border-top-left-radius: .5rem;
`;

export const NavToggle = styled.div` 
    padding-top: .6rem;
    font-size: 2.4rem;     
    color: white;
    margin-left: 7rem;
    cursor: pointer;
`

export const PaneContainer = styled.div`
  position: absolute;
  top: 28vh;
  height: max-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopPane = styled.div`
  height: 100%;
  min-height: 40vh;
  width: 100%;
  padding-left: 3rem;
  padding-right: 3rem;
  display: flex;
  background: #333;
`;

export const Pane = styled.div`
  height: 32vh;
  display: flex;
  background: white;
  width: 100%;
  padding: 0 3rem;
`;

export const ImgContainer = styled.div`
    position: absolute;
    top: 0;
    right: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Img = styled.img`
    height: 40vh;
`;

export const ShowSolution = styled.p`
  color: #f1f1f1;
  margin-bottom: .6rem;
  text-transform: uppercase;
  font-size: 1.6rem;
  border: .1rem solid #f1f1f1;
  padding: .4rem .8rem;
  border-radius: .4rem;
`;

export const ButtonContainer = styled.div`
    height: 40vh;
    width: max-content;
    padding: 2rem;
    background: #1F2023;  
    display: flex;
    flex-direction: column;
    
`;

export const EditorButton = styled(Link)`  
  ${DefaultButton};
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: .1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 12rem;
  font-size: 1.4rem;
`;
