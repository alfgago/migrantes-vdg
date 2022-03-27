import React from 'react';
import { HeaderStyles } from "./HeaderStyles";
import Mapa from '../Mapa';

const Header = () => {
    const description = 'La migración en Centroamérica como fenómeno constante no ha cambiado en las últimas décadas. Lo que sí está cambiando son los motivos por los que la gente se va y la ruta para huir de la región.';

    return (
        <HeaderStyles id="header">
            <div className="mapa">
                <div className='background'></div>
                <div className='background2'></div>
                <div className='elements'>
                    <Mapa />
                    <img src="/elementos.png"/>
                </div>
            </div>
            <div className='entry-header'>
                <div className='container'>
                    <div className='title'>Los caminos <br />de la migración <br />centroamericana</div>
                    <div className='excerpt'>{description}</div>
                    <div className='logos'>
                        <img src="/logos/ocote.png" className='ocote'/>
                        <img src="/logos/contracorriente.png" className='contracorriente'/>
                        <img src="/logos/factum.png" className='factum'/>
                        <img src="/logos/divergentes.png" className='divergentes'/>
                        <img src="/logos/vdg.png" className='vdg'/>
                        <img src="/logos/otrasmiradas.png" className='otrasmiradas'/>
                        <img src="/logos/canada.png" className='canada'/>
                    </div>
                </div>
            </div>
        </HeaderStyles>
    );
};

Header.propTypes = {};

export default Header;
