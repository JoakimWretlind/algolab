import data from './LinksData';

import {
    LinksSection,
    Hero,
    HeroContainer,
    HeroHeader,
    LinksBorder,
    MainContainer,
    SubjectContainer,
    LinkContainer,
    LinkHeader,
    ImgContainer,
    LinkLogo,
    LinkLink,
    LinkInfo
} from './LinksStyling';

const Links = () => {

    return (
        <>
            <LinksSection>
                <Hero>
                    <HeroContainer>
                        <HeroHeader>Links</HeroHeader>
                        <LinksBorder />
                    </HeroContainer>
                </Hero>
                <MainContainer>
                    {/** JAVASCRIPT LINKS */}
                    <LinkHeader>JavaScript</LinkHeader>
                    <SubjectContainer >
                        {data.map(item => {
                            const { id, category, link, name, title, image, desc } = item;
                            if (category === "javascript") {
                                return (
                                    <>
                                        <LinkContainer key={id}>
                                            <ImgContainer>
                                                <LinkLogo src={image} alt={name} />
                                            </ImgContainer>
                                            <LinkLink href={link} target="_blank">{title}</LinkLink>
                                            <LinkInfo>{desc}</LinkInfo>
                                        </LinkContainer>
                                    </>
                                )
                            }
                        })}
                    </SubjectContainer>
                    {/** CSS LINKS */}
                    <LinkHeader>CSS</LinkHeader>
                    <SubjectContainer >
                        {data.map(item => {
                            const { id, category, link, name, title, image, desc } = item;
                            if (category === "css") {
                                return (
                                    <>
                                        <LinkContainer key={id}>
                                            <ImgContainer>
                                                <LinkLogo src={image} alt={name} />
                                            </ImgContainer>
                                            <LinkLink href={link} target="_blank">{title}</LinkLink>
                                            <LinkInfo>{desc}</LinkInfo>
                                        </LinkContainer>
                                    </>
                                )
                            }
                        })}
                    </SubjectContainer>
                    {/** IMAGES LINKS */}
                    <LinkHeader>images</LinkHeader>
                    <SubjectContainer >
                        {data.map(item => {
                            const { id, category, link, name, title, image, desc } = item;
                            if (category === "images") {
                                return (
                                    <>
                                        <LinkContainer key={id}>
                                            <ImgContainer>
                                                <LinkLogo src={image} alt={name} />
                                            </ImgContainer>
                                            <LinkLink href={link} target="_blank">{title}</LinkLink>
                                            <LinkInfo>{desc}</LinkInfo>
                                        </LinkContainer>
                                    </>
                                )
                            }
                        })}
                    </SubjectContainer>
                </MainContainer>
            </LinksSection>
        </>
    )
}

export default Links
