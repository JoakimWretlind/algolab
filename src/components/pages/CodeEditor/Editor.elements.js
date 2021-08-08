import styled from 'styled-components';
import { SharedSection, SharedHero, SharedHeroContainer, SharedHeader, DefaultButton, SharedBorder, SharedSubheader } from '../../sharedStyling';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  ${SharedSection};
  display: flex;
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
  height:  ${({ solution }) => (solution ? '10rem' : '70rem')};
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: .5rem 0;
  font-size: 2rem;
  z-index: 2;
  transition: .5s linear;
  @media screen and (min-width: 1000px){
    height: 100%;
    width: ${({ solution }) => (solution ? '37%' : '100%')};
    padding: .5rem 0 1rem;
  }
  @media screen and (min-width: 1250px){
    height: 100%;
    width: ${({ solution }) => (solution ? '50%' : '100%')};
  }
`;

export const EditorTitle = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #1f2023;
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
`;

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
  padding: 0;
  display: flex;
  flex-direction: column;
  background: #323232;
  @media screen and (min-width: 1000px){
    flex-direction: row;
    min-height: 40vh;
    padding: 0;
  }
`;

export const Pane = styled.div`
  height: 32vh;
  display: flex;
  background: white;
  width: 100%;
  padding-top: 6rem;
   @media screen and (min-width: 1000px){
     padding: 0 3rem;
   }
`;

export const ImgContainer = styled.div`
    position: absolute;
    top: 40rem;
    right: 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 1000px){
      top: 0;
      right: 5rem;
      transform: none;
  }
  @media screen and (min-width: 1300px){
    right: 0rem;
    transform: none;
  }
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
  letter-spacing: .1rem;
  transition: .2s ease-out;  
  &:hover {
    color: #959EA2;
    border: .1rem solid #959EA2;
  }
`;

export const ButtonContainer = styled.div`
    height: 8rem;
    width: 100%;
    padding-top: 2rem;
    background: #1F2023;  
    display: flex;
    justify-content: space-evenly;
    @media screen and (min-width: 1000px){
      height: 40vh;
      padding: 2rem;
      width: max-content;
      flex-direction: column;
  }
`;
export const EditorButton = styled(Link)`  
  ${DefaultButton};
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: .1rem;
  display: flex;
  justify-content: center;
  align-items: center;  
  font-size: 1.4rem;
  @media screen and (min-width: 1000px){
      min-width: 12rem;
  }
`;
