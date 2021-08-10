import styled from 'styled-components';
import { SharedTextSection, SharedHeader, SharedTextContainer, SharedBorder, SharedSubheader } from '../../sharedStyling';

export const BigOSection = styled.section`
    ${SharedTextSection};
    background: linear-gradient(15deg, #B2E8F3, #ECEDF1);
`;

export const BigOContainer = styled.div`
    ${SharedTextContainer}
    background: linear-gradient(15deg, #d1ecf1, #eff0f5);
`;

export const MainHeader = styled.h1`
  ${SharedHeader}
`;

export const BigOBorder = styled.div`
    ${SharedBorder}
    margin-bottom: 2rem;
    width: 100%;
`;

export const Subheader = styled.h2`
    ${SharedSubheader};
    text-align: left;
    font-size: clamp(1.8rem, 5vw, 2.6rem);
    margin: 1rem 1rem .5rem;
    letter-spacing: .3rem;
    @media screen and (min-width: 600px) {
        margin: 3rem 1rem 0;
    }
`;

export const BigOP = styled.p`
    font-size: 1.4rem;
    line-height: 1.4;
`;

export const BigOLi = styled.li`
    font-size: 1.4rem;
    line-height: 1.4;
    margin: .5rem 2rem 0.5rem;
    display: flex;
`;

export const BigItalicP = styled.p`
  font-style: italic;
`;