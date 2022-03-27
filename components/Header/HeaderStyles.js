import styled from "styled-components";

export const HeaderStyles = styled.div` 
    position: relative;
    padding: 0;
    width: 100%;
    height: 100vh;

    @media only screen and (max-width: 1200px) {
        height: auto;
        background: #697F8E;
    }

    .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('/fondo.jpg');
        background-size: cover;
    }

    .background2 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('/fondo2.jpg');
        background-size: cover;
        opacity: 0.8;
    }

    .entry-header {
        position: absolute;
        color: #fff;
        bottom: 1rem;
        left: 0;
        max-width: 100%;
        width: 100%;
        z-index: 5;
        padding-bottom: 5rem;
        pointer-events: none;

        @media only screen and (max-width: 1200px) {
            position: relative;
            padding: 1rem 0;
            background: #697F8E;
        }

        .title {
            font-size: 3.5rem;
            font-weight: 900;
            line-height: 1;
            margin-bottom: .5rem;
            @media only screen and (max-width: 1200px) {
                br { display: none; }
            }

            @media only screen and (max-width: 768px) {
                font-size: 2rem;
            }
        }

        .excerpt {
            position: relative;
            width: 100%;
            max-width: 26rem;
            padding-left: 1rem;
            border-left: 3px solid #fff;

            @media only screen and (max-width: 1200px) {
                max-width: 100%;
            }
        }

        .logos {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: space-between;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 0 2rem;

            @media only screen and (max-width: 1200px) {
                position: relative;
                flex-wrap: wrap;
                justify-content: initial;
                padding: 0;
                margin-top: 1rem;
            }

            @media only screen and (max-width: 768px) {
                justify-content: center;
            }

            img {
                display: block;
                max-height: 3rem;
                object-fit: contain;

                @media only screen and (max-width: 1600px) {
                    max-height: 2rem;
                }

                @media only screen and (max-width: 1200px) {
                    margin-top: 1rem;
                    margin-right: 1rem;
                    max-height: 2rem;
                }

                @media only screen and (max-width: 768px) {
                    max-height: 1.25rem;
                }
            }
        }
    }

    .mapa {
        position: relative;
        z-index: 1;
        height: 100%;
        padding: .5rem 0 6rem 6rem;
        display: flex;
        align-items: center;
        justify-content: center;

        @media only screen and (max-width: 1200px) {
            padding: 0;
            height: 90vw;
        }

        &:after {
            content: 'Presione un país en el mapa para navegar al artículo respectivo.';
            position: absolute;
            width: 180px;
            font-size: 12px;
            color: #fff;
            top: .5rem;
            right: 30%;

            @media only screen and (max-width: 768px) {
                top: .5rem;
                right: 1rem;
            }
        }
        
        .elements {
            position: relative;
            height: 100%;

            img {
                position: absolute;
                display: block;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: contain;
                pointer-events: none;
            }
        }

        svg {
            display: inline-block;
            height: 100%;

            @media only screen and (max-width: 768px) {
                width: 140vw;
            }

            #svgmap {
                g {
                    fill: #fff;
                    opacity: 0.6;
                    transition: .5s ease all;
                    cursor: pointer;

                    &:hover {
                        opacity: 1;
                        filter: brightness(120%);
                    }
                }
            }
        }
    }
`;
