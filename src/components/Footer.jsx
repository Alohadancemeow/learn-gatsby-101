import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Footer = () => {
    return (
        <FooterContainer>

            <FooterWrapper>
                <FooterDesc>
                    <h1>Explore</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </FooterDesc>
                <FooterLinkItems>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                    <FooterLink to='/'>Cotact</FooterLink>
                    <FooterLink to='/'>Support</FooterLink>
                    <FooterLink to='/'>Destinations</FooterLink>
                    <FooterLink to='/'>Sponsorships</FooterLink>
                </FooterLinkItems>
            </FooterWrapper>

            <FooterWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Videos</FooterLinkTitle>
                    <FooterLink to='/'>Cotact</FooterLink>
                    <FooterLink to='/'>Support</FooterLink>
                    <FooterLink to='/'>Destinations</FooterLink>
                    <FooterLink to='/'>Sponsorships</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Images</FooterLinkTitle>
                    <FooterLink to='/'>Cotact</FooterLink>
                    <FooterLink to='/'>Support</FooterLink>
                    <FooterLink to='/'>Destinations</FooterLink>
                    <FooterLink to='/'>Sponsorships</FooterLink>
                </FooterLinkItems>
            </FooterWrapper>

        </FooterContainer>
    )
}

export default Footer


// # Styles
const FooterContainer = styled.div`
    padding: 5rem calc((100vw - 1300px) / 2);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: #000;
    background: #fafafb;
`

const FooterDesc = styled.div`
    padding: 0 2rem;
    font-weight: 500;
    color: #8f8f8f;

    h1 {
        margin-bottom: 3rem;
        color: #338ef7;
    }

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
`

const FooterWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 820px) {
        grid-template-columns: 1fr;
    }
`

const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
`

const FooterLinkTitle = styled.h2`
    font-size: 14px;
    margin-bottom: 16px;
`


const FooterLink = styled(Link)`
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    font-weight: 500;
    color: #8f8f8f;

    &:hover {
        color: #338ef7;
        transition: 0.3s ease-out;
    }
`