import styled from 'styled-components';
import { SharedSection, SharedHero, SharedHeroContainer, SharedHeader, DefaultButton, SharedBorder } from '../../sharedStyling';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  ${SharedSection};
  background: orangered;
`;

export const Hero = styled.div`
  ${SharedHero};
  background: burlywood;
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
    border: 2px solid black;
    height: 100%;
    padding-top: 5rem;
    margin: 0 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CodeImage = styled.img`
  width: 100%;
  max-width: 50rem;
  margin: 0 3rem;
`;

export const ViewButton = styled(Link)`
  ${DefaultButton};
`;

