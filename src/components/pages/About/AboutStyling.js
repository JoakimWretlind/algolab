import styled from 'styled-components';
import { SharedTextSection, SharedHeader, SharedBorder, SharedSubheader, SharedTextContainer } from '../../sharedStyling';

export const AboutSection = styled.section`
    ${SharedTextSection};
    background: linear-gradient(-15deg, #d6a4a4, #dae2f8);
`;

export const AboutContainer = styled.div`
    ${SharedTextContainer}
`;

export const MainHeader = styled.h1`
    ${SharedHeader};
    text-align: left;
    margin-left: 1rem;
    font-size: 5rem;
`;

export const AboutBorder = styled.div`
    ${SharedBorder}
    margin-bottom: 0;
`;

export const Subheader = styled.h2`
    ${SharedSubheader}
    text-align: left;
    font-size: clamp(1.8rem, 5vw, 2.6rem);
    margin: 1rem 1rem 0;
    letter-spacing: .3rem;
    @media screen and (min-width: 600px) {
        margin: 3rem 1rem 0;
    }
`;

export const MinHeader = styled.h5`
    ${SharedSubheader};
    font-size: 2rem;
    text-align: left;
    margin: 2rem 0 .2rem 2rem;
    letter-spacing: .1rem;
`;

export const AboutText = styled.p`
  font-size: 1.4rem;
  line-height: 1.4;
`;