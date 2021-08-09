import styled from 'styled-components';
import { SharedTextSection, SharedHeader, SharedTextContainer, SharedBorder, SharedSubheader } from '../../sharedStyling';

export const DataSection = styled.section`
    ${SharedTextSection};
    background: linear-gradient(-15deg, #C5C2B9, #D9D6D0);
`;

export const DataContainer = styled.div`
    ${SharedTextContainer}
`;

export const MainHeader = styled.h1`
  ${SharedHeader}
`;

export const DataBorder = styled.div`
    ${SharedBorder}
    margin-bottom: 0;
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

export const DataP = styled.p`
    font-size: 1.4rem;
    line-height: 1.4;
`;

export const DataLi = styled.li`
    list-style-type: disc;
    font-size: 1.4rem;
    line-height: 1.4;
    margin: .5rem 2rem 0.5rem;
`;