import { css } from 'styled-components';

export const SharedSection = css`
    height: 100%;
    min-height: 100vh;
    width: 100%;
    padding-top: 28vh;
    display: flex;
    justify-content: center;
`;

export const SharedHero = css`
    position: absolute;
    top: 0;
    left: 0;
    height: 28vh;
    width: 100%;   
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 .3rem .6rem rgba(0,0,0,.9);
`;

export const SharedSubheader = css`
    text-transform: uppercase;
    font-family: 'Code';
    font-size: clamp(1.2rem, 3vw, 1.6rem);
    letter-spacing: 0;
    margin: 0 1rem;
    text-align: center;
    max-width: 90rem;
    @media screen and(min-width: 500px){
        margin: 0 3rem;
        letter-spacing: .1rem;
    }
`;

export const SharedHeroContainer = css`
    height: 100%;
    width: 100%;
    max-width: 120rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -2rem;
`;

export const SharedHeader = css`
  font-family: 'Cinzel';
  text-transform: uppercase;
  font-size: clamp(2rem, 7vw, 5rem);
  letter-spacing: clamp(.1rem, 2vw, 1.2rem);
  text-align: center;
`;

export const DefaultButton = css`
    padding: 1rem 1.6rem;
    background: #333;
    color: #fff;
    border-radius: .4rem;
`;

export const SharedBorder = css`
    height: .2rem;
    width: 50%;
    background: #000000;
    margin: .4rem 0 1rem;
`;