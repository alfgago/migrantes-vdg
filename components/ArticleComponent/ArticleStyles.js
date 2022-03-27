import styled from "styled-components";

export const ArticleStyles = styled.div`
    color: #000;
    background: #d9e8e7;
    padding: 2rem 0;
    margin: 0;

    .meta {
        color: #1F847E;
        font-size: 1.1rem;
        width: 100%;
        max-width: 768px;
        margin: 1rem auto;

        a {
            box-shadow: inset 0 0 #fff, inset 0 -2px #1F847E;
        }
    }

    .regresar {
        display: block;
        color: #1F847E;
        font-weight: bold;
        margin-bottom: 10px;

        svg {
            margin-right: 10px;
            transform: rotate(-180deg);
        }
    }

    h1, h2 {
        color: #1F847E;
        display: block;
        width: 100%;
        font-size: 2.4rem;
        letter-spacing: 1px;
        width: 100%;
        max-width: 768px;
        margin: 1rem auto;
        line-height: 1;

        @media only screen and (max-width: 767px) {
            font-size: 2rem;
        }
    }

    h1 {
        font-size: 3.4rem;

        @media only screen and (max-width: 1600px) {
            font-size: 3.3rem;
        }

        @media only screen and (max-width: 767px) {
            font-size: 2.5rem;
        }
    }

    p {
        font-size: 1rem;
        width: 100%;
        max-width: 768px;
        margin: auto;
        margin-bottom: 1rem;

        a {
            box-shadow: inset 0 0 #fff, inset 0 -2px #1F847E;
        }
    }

    iframe {
        display: block;
        margin: auto;
        width: 100%;
    }

    .iframe-infogram {
        max-width: 800px;
        width: 800px;
        margin: 1rem auto;
    }

    blockquote {
        position: relative;
        padding: 1rem;
        margin: 1rem auto;
        font-size: 1.5em;
        font-weight: 700;
        line-height: 1.3;
        background: #c4dcda;

        p {
            text-align: center;
            font-size: inherit;
            margin: auto;
        }

        &:before {
            content: '"';
            position: absolute;
            top: 0;
            left: 0;
            margin-left: -2rem;
            margin-top: 0;
            font-size: 12rem;
            line-height: 4rem;
            color:#1F847E;
        }

        @media only screen and (max-width: 1200px) {
            margin-top: 3rem;
        }

        @media only screen and (max-width: 767px) {
            font-size: 1.3em;
            margin-top: 2rem;
            &:before {
                font-size: 8rem;
                top: -.5rem;
                margin-left: 0;
            }
        }
    }

    figure {
        display: block;
        width: 100%;
        margin: 1rem 0;

        figcaption {
            font-size: 0.9rem;
            padding: .5rem;
            background: #c4dcda;    
            width: 100%;
        }
    }

    figure.two {
        display: flex;
        flex-wrap: wrap;
        max-width: 768px;
        margin: 1rem auto;
        figure {
            width: 50%;
            margin: 0;

            &:nth-of-type(1){
                padding-right: .5rem;
            }

            &:nth-of-type(2){
                padding-left: .5rem;
            }
        }
    }

    img {
        display: block;
        width: 100%;
        height: auto;
    }
`;
