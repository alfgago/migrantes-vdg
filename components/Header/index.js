import React from 'react';
import { HeaderStyles } from "./HeaderStyles";
import Mapa from '../Mapa';

const Header = ({lang = 'es'}) => {
    const description = 'La migración en Centroamérica como fenómeno constante no ha cambiado en las últimas décadas. Lo que sí está cambiando son los motivos por los que la gente se va y la ruta para huir de la región.';
    const enDescription = 'People in Central America do not stop migrating. It is a region that has been characterized by the constant expulsion of its population that emigrates in search of better opportunities and living conditions.'
    return (
        <HeaderStyles id="header">
            <div className="mapa">
                <div className='background'></div>
                <div className='elements'>
                    <Mapa lang={lang}/>
                    <img src="/elementos.png"/>
                </div>
            </div>
            <div className='entry-header'>
                <div className='container'>
                    {lang == 'es' ?
                        <div className='title'>Los caminos <br />de la migración <br />centroamericana</div>
                        :
                        <div className='title'>The new paths <br />of Central American <br />migration</div>
                    }
                    <div className='excerpt'>{lang == 'es' ? description : enDescription}</div>
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
