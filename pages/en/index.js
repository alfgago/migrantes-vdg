import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { NextSeo } from 'next-seo';
import ArticleComponent from '@/components/ArticleComponent';

export default function Home(props) {

  const title = 'The New Paths of Central American migration';
  const description = 'La migración en Centroamérica como fenómeno constante no ha cambiado en las últimas décadas. Lo que sí está cambiando son los motivos por los que la gente se va y la ruta para huir de la región.';
  const featuredImage = 'https://migrantes.vozdeguanacaste.com/principal.jpg'

  const BodyComponent = (
      <div>
        <p>People in Central America do not stop migrating. It is a region that has been characterized by the constant expulsion of its population that emigrates in search of better opportunities and living conditions. Migration as a constant phenomenon has not changed in recent decades. What is changing is the reasons why they do so and the route they must follow to flee the region. El Salvador and Nicaragua are the countries where the changes are most evident. The population of El Salvador migrated for two main reasons: poverty or violence, however, in recent years the motivations for leaving their country have changed, at least in one sector of society. The new reason for leaving this country is political persecution. At least 50 people had to leave in the last year, as they felt threatened by the Nayib Bukele regime, who took control of the three powers of the State in 2021. The exile was preceded by persecution, by punctured vehicle tires, threats, harassment digital or tax persecution.</p>
        <p>The Nicaraguans people, who know what it is to flee from an authoritarian regime, continue to migrate due to the repression and state violence commanded by Daniel Ortega and Rosario Murillo. The difference lies in the fact that the migrant population looks to the north as a new destination, which is changing the migratory dynamics in this country and in the region. Costa Rica was for years the main destination for migration of Nicaraguans people; however, the United States has become a new option. Increasingly, the Nicaraguan population is part of the caravans of Central Americans and the number of Nicaraguans detained on the southern border has reached unprecedented figures.&nbsp;</p>
        <p>This special also recalls the cruel face of Central American migration, where the population, expelled by conditions of poverty and exclusion, faces other torments in the countries of transit, destination or return countries. We are referring to situations that, far from changing, have worsened, such as the xenophobia suffered by Nicaraguans who migrate to Costa Rica, the abandonment of migrants from the LGTBIQ community, or the threat of kidnapping and death for those who, against all odds, leave countries that marginalize them.</p>
        <p>Introduction of the special &quot;The new paths of Central American migration&quot; The following media outlets are part of Otras Miradas alliance: Divergentes, Revista Factum, Contracorriente, Agencia Ocote and La Voz de Guanacaste. It was supported by the Canada Fund for Local Initiatives.</p>  
      </div>
  )

  return (
      <div>
        <NextSeo
          title={title}
          description={description}
          canonical="https://migrantes.vozdeguanacaste.com/"
          openGraph={{
            title: title,
            description: description,
            images: [
              { url: featuredImage }
            ],
            site_name: title,
          }}
          twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
          }}
        />
        <main className="main-container">
          <Header lang={'en'}/>
          <ArticleComponent title={title} featuredImage={featuredImage} body={BodyComponent} isHome={true} lang={'en'}/>
          <Footer/>
        </main>
      </div>
  );
}

