import styled from 'styled-components';
import { SharedSection, SharedHero, SharedHeroContainer, SharedHeader, SharedBorder } from '../../sharedStyling';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  ${SharedSection};
  display: flex;
  background: burlywood;
`;

export const Hero = styled.div`
  ${SharedHero};
  background: maroon;
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