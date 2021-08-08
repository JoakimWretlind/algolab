import styled from 'styled-components';
import { SharedSection, SharedHero, SharedHeroContainer, SharedHeader, SharedBorder, SharedSubheader } from '../../sharedStyling';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  ${SharedSection};
  display: flex;
  background: #C6BFB6;
`;

export const Hero = styled.div`
  ${SharedHero};
  background: #B3ACA2;
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

export const HomeSubheader = styled.h4`
    ${SharedSubheader}
`;

export const HomeContainer = styled.div`
    padding: 3rem;
    height: 100%;
    width: 100vw;
    max-width: 120rem;
    display: flex;
    justify-content: center;
`;

export const ButtonWrapper = styled.div`
    height: min-content;
    min-height: 8rem;
    width: 100%;
    max-width: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    background: #fff;
    border-radius: .3rem;
    padding: 1rem 1.6rem;
    box-shadow: 0 .2rem .5rem rgba(0,0,0,.1);
    margin-bottom: 1rem;
`;

export const ButtonTitle = styled.h5`
    text-transform: capitalize;
    font-family: 'Code';
    font-size: 1.8rem;
    letter-spacing: .1rem;
    margin-bottom: .2rem;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const AlgoButton = styled(Link)`
    width: max-content;
    min-width: 6rem;
    text-align: left;
    font-size: 1.4rem;
    letter-spacing: .01rem;
    transition: .2s ease-out;
    cursor: pointer;
    color: #D1CEC5;
    &:hover {
        color: orange;
    }
`;

