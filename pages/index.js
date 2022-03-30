import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleComponent from '@/components/ArticleComponent';

export default function Home(props) {

  const title = 'Los nuevos caminos de la migración centroamericana';
  const description = 'La migración en Centroamérica como fenómeno constante no ha cambiado en las últimas décadas. Lo que sí está cambiando son los motivos por los que la gente se va y la ruta para huir de la región.';
  const featuredImage = '/principal.jpg'

  const BodyComponent = (
      <div>
        <p>La gente en Centroam&eacute;rica no para de migrar. Es una regi&oacute;n que se ha caracterizado por la constante expulsi&oacute;n de su poblaci&oacute;n que emigra en b&uacute;squeda de mejores oportunidades y condiciones de vida. La migraci&oacute;n como fen&oacute;meno constante no ha cambiado en las &uacute;ltimas d&eacute;cadas. Lo que s&iacute; est&aacute; cambiando son los motivos por los que lo hacen y la ruta para huir de la regi&oacute;n.&nbsp;El Salvador y Nicaragua son los pa&iacute;ses donde los cambios son m&aacute;s evidentes. La poblaci&oacute;n salvadore&ntilde;a migraba por dos razones principales: la pobreza o la violencia, sin embargo, en los &uacute;ltimos a&ntilde;os las motivaciones para dejar su pa&iacute;s han cambiado, al menos en un sector de la sociedad. El nuevo motivo para dejar este pa&iacute;s es la persecuci&oacute;n pol&iacute;tica. Al menos 50 personas tuvieron que salir en el &uacute;ltimo a&ntilde;o al sentirse amenazadas por el r&eacute;gimen de Nayib Bukele, que tom&oacute; el control de los tres poderes del Estado en 2021. El exilio estuvo antecedido por persecuciones, llantas de veh&iacute;culos pinchadas, amenazas, acoso digital o persecuci&oacute;n fiscal.</p>
        <p>Los nicarag&uuml;enses, que saben qu&eacute; es huir de un r&eacute;gimen autoritario, contin&uacute;an migrando por la represi&oacute;n y la violencia estatal comandada por Daniel Ortega y Rosario Murillo. La diferencia radica en que la poblaci&oacute;n migrante mira hacia el norte como un nuevo destino, lo que va cambiando la din&aacute;mica migratoria en este pa&iacute;s y en la regi&oacute;n. Costa Rica fue por a&ntilde;os el principal destino de migraci&oacute;n de los nicarag&uuml;enses, sin embargo, Estados Unidos se ha convertido en una nueva opci&oacute;n. Cada vez m&aacute;s nicas forman parte de las caravanas de centroamericanos y la cantidad de nicarag&uuml;enses detenidos en la frontera sur ha alcanzado cifras sin precedentes.</p>
        <p>Este especial tambi&eacute;n recuerda la cara cruel de la migraci&oacute;n centroamericana, donde la poblaci&oacute;n, expulsada por las condiciones de pobreza y exclusi&oacute;n, se enfrenta a otros tormentos en los pa&iacute;ses de tr&aacute;nsito, de destino o de retorno. Nos referimos a situaciones que lejos de cambiar han empeorado, como la xenofobia que sufren los nicarag&uuml;enses que migran a Costa Rica, el desamparo para migrantes de la comunidad LGTBIQ, o el acecho del secuestro y la muerte para quienes, contra todo tormento, salen de pa&iacute;ses que les marginan.</p>
        <p>Introducci&oacute;n del especial&nbsp;Los nuevos caminos de la migraci&oacute;n centroamericana&nbsp;realizado por los siguientes medios que somos parte de la alianza&nbsp;<a href="https://otrasmiradas.info/">Otras Miradas</a>:&nbsp;<a href="https://www.divergentes.com/">Divergentes</a>,&nbsp;<a href="https://www.revistafactum.com/">Revista Factum</a>,&nbsp;<a href="https://contracorriente.red/">Contracorriente</a>,&nbsp;<a href="https://www.agenciaocote.com/">Agencia Ocote&nbsp;</a>y&nbsp;<a href="https://vozdeguanacaste.com/">La Voz de Guanacaste</a>. Y cont&oacute; con el apoyo del Fondo Canad&aacute; para Iniciativas Locales.&nbsp;</p>  
      </div>
  )

  return (
      <div>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:image" content={featuredImage} />
          <meta property="og:locale" content="es_ES" />
        </Head>
        <main className="main-container">
          <Header lang={'es'}/>
          <ArticleComponent lang={'es'} title={title} featuredImage={featuredImage} body={BodyComponent} isHome={true} />
          <Footer/>
        </main>
      </div>
  );
}

