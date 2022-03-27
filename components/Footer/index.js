import React from 'react';
import { FooterStyles } from "./FooterStyles";

const Footer = () => {

    return (
        <FooterStyles id="footer" >
            <div className="container">
                <p><em><strong>Los nuevos caminos de la migraci&oacute;n centroamericana&nbsp;</strong>es un especial realizado por los medios que somos parte de la alianza <a href="https://otrasmiradas.info/" rel="noopener" target="_blank">Otras Miradas</a>: <a href="https://www.divergentes.com/" rel="noopener" target="_blank">Divergentes</a>, <a href="https://www.revistafactum.com/" rel="noopener" target="_blank">Revista Factum</a>, <a href="https://contracorriente.red/" rel="noopener" target="_blank">Contracorriente</a>, <a href="https://www.agenciaocote.com/" rel="noopener" target="_blank">Agencia Ocote&nbsp;</a>y <a href="https://vozdeguanacaste.com/" rel="noopener" target="_blank">La Voz de Guanacaste</a>. Y cont&oacute; con el apoyo del Fondo Canad&aacute; para Iniciativas Locales.</em></p>
            </div>
        </FooterStyles>
    );
};

Footer.propTypes = {};

export default Footer;
