import React, { useEffect, useState } from 'react';
import { ArticleStyles } from "./ArticleStyles";
import Link from 'next/link';

const ArticleComponent= ({title, featuredImage, body, autor, medio, fotografia, isHome = false, lang='es'}) => {
    const href = lang == 'es' ? '/' : '/en';
    return (
        <ArticleStyles id='article-section'>
            <div className='container'>
                {!isHome && <Link href={href}><a className="regresar">
                    <svg width="43" height="10" viewBox="0 0 43 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M38.0039 1.49609L41.5193 5.01144L38.0039 8.52678" stroke="#1F847E" stroke-linecap="square" stroke-linejoin="round"/>
                        <path d="M0 5H41.5" stroke="#1F847E"/>
                    </svg>
                    {lang == 'es' ? 'Regresar' : 'Back'}
                </a></Link>}
                {isHome && <Link href={href}><a className="regresar">
                    &nbsp;
                </a></Link>}
                <div className='change-locale'>
                    <Link href='/en'><a>EN</a></Link>
                    <Link href='/'><a>ES</a></Link>
                </div>
                {!isHome && <img className='featured' src={featuredImage} />}
                <h1 dangerouslySetInnerHTML={ {__html: title} }></h1>
                <div className='meta'>
                    <div>{autor}</div>
                    {fotografia && <div>{fotografia} </div>}
                    <div dangerouslySetInnerHTML={ {__html: medio} }></div>
                </div>
                <div className='content'>
                  {body}
                </div>
            </div>
        </ArticleStyles>
    );
};

export default ArticleComponent;
