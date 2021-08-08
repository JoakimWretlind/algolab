import styled from 'styled-components';
import { SharedSection, SharedHero, SharedHeroContainer, SharedHeader, DefaultButton, SharedBorder, SharedSubheader } from '../../sharedStyling';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  ${SharedSection};
  background: #D8D3CE;
`;

export const Hero = styled.div`
  ${SharedHero};
  background: #D8D0CC;
`;

export const HeroContainer = styled.div`
  ${SharedHeroContainer};
`;

export const HeroHeader = styled.h2`
  ${SharedHeader}
`;

export const Border = styled.div`
  ${SharedBorder};
`;

export const ViewContainer = styled.div`
    height: max-content;
    width: 100%;
    max-width: 120rem;
    height: 100%;
    padding: 5rem 0 5rem;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 767px){
      margin: 0 3rem;
    }
`;

export const ViewSubheader = styled.h4`
  ${SharedSubheader}
`;

export const CodeImage = styled.img`
  width: 100%;
  max-width: 70.7rem;
  margin: 0 0 3rem;
  border-radius: 1.2rem;
  @media screen and (min-width: 767px){
      max-width: 54rem;
    }
`;

export const ViewButton = styled(Link)`
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

