import styled from 'styled-components';
import { SharedTextSection, SharedHero, SharedHeader, SharedHeroContainer, SharedBorder } from '../../sharedStyling';

export const LinksSection = styled.section`
    ${SharedTextSection};
    padding-top: 28vh;
    display: flex;
    justify-content: center;
    background: linear-gradient(-12deg, #f1f9ff, #9BA8B3);
`;

export const Hero = styled.div`
  ${SharedHero};
  background: linear-gradient(-5deg, #C4CBD0, #9BA8B3);
`;

export const HeroContainer = styled.div`
  ${SharedHeroContainer};  
`;

export const HeroHeader = styled.h1`
  ${SharedHeader}
`;

export const LinksBorder = styled.div`
    ${SharedBorder}
`;

export const MainContainer = styled.div`
    width: 100%;
    max-width: 120rem;
    height: 100%;
    min-height: 72vh;
    padding: 4rem 0 14rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'CocoGothicL';
`;

export const LinkHeader = styled.h3`
    font-size: clamp(2rem, 4vw, 4rem);
    text-align: center;
    margin: 4rem 0 0rem;
    font-family: 'CocoGothic';
    letter-spacing: .3rem;
`;

export const SubjectContainer = styled.article`
    height: max-content;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const LinkContainer = styled.div`
    width: 28rem;
    padding: 0 3rem;
    height: max-content;
    display: flex;
    flex-direction: column;
    margin: 3rem;
`;

export const ImgContainer = styled.div`
    height: 3rem;
    margin-bottom: 1rem;
`;

export const LinkLogo = styled.img`
    height: 100%;
    object-fit: contain;
`;

export const LinkLink = styled.a`
    color: #852625;
    font-size: 1.8rem;
    margin-bottom: .3rem;
    letter-spacing: .1rem;
`;

export const LinkInfo = styled.p`
    color: #2E5760;
    font-size: 1.6rem;
    letter-spacing: .1rem;
    margin: .5rem 0;
    line-height: 1.2;
`;