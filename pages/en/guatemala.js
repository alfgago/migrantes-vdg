import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleComponent from '@/components/ArticleComponent';

export default function CostaRica(props) {

  const title = 'Guatemala: The limbo for transsexual migrants waiting for refuge';
  const description = 'Guatemala is a transit country for migrants seeking to reach the United States, but it is also a hub for those seeking refuge. Hundreds of migrants remain trapped while they waiting to be considered as refugees. The chances of receiving a positive response are limited, especially for the LGTBIQ+ community.';
  const featuredImage = '/banner-guatemala.jpg'
  const autor = "Written by: Jody García";
  const medio = '<a target="_blank" href="https://twitter.com/AgenciaOcote">@AgenciaOcote</a>';
  const fotografia = "Photographs by: Sandra Sebastián";

  const BodyComponent = (
      <div>
          <p className='excerpt'>Guatemala is a transit country for migrants seeking to reach the United States, but it is also a hub for those seeking refuge. Hundreds of migrants remain trapped while they waiting to be considered as refugees. The chances of receiving a positive response are limited, especially for the LGTBIQ+ community.</p>
          <p>Madelyn is a 22-years-old transsexual woman. In November 2021, she migrated from Tegucigalpa, the capital of Honduras, to Guatemala City because in her country she suffered harass and threaten by gang members. “They beat me, my whole face was injured and I have proof. I decided to migrate because I was afraid that something more serious would happen to me. I have other colleagues who have been beaten and others who have been killed when they were working,” she says.</p>
          <div>
              <figure>
                  <img width="980" height="650" src="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-001-980x650.jpg" alt="" srcset="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-001-980x650.jpg 980w, https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-001-300x200.jpg 300w" sizes="(max-width: 980px) 100vw, 980px" />
                  <figcaption><sup>Mujeres trans huyen de sus pa&iacute;ses y viven escondidas en Guatemala para esquivar la violencia.</sup></figcaption>
              </figure>
          </div>
          <p>Every year, hundreds of migrants arrive in Guatemala to request refuge. In 2019, there were 494 people; in 2020, there were 487; in 2021, there were 1,054 and 70 more in January 2022 alone. All people must wait at least two years for a resolution, and Migration statistics reveal that only 1.7 out of 10 migrants receive a positive response to their asylum request. The situation is more dramatic for applicants from the LGBTIQ community, because only 2 out of 100 people are accepted. This information is confirm by the data registered by an organization that provides accompaniment to these requests.</p>
          <div>
              <figure>
                  <img width="980" height="650" src="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-002-980x650.jpg" alt="" srcset="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-002-980x650.jpg 980w, https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-002-300x200.jpg 300w" sizes="(max-width: 980px) 100vw, 980px" />
                  <figcaption><sup>Las migrantes trans que piden asilo en Guatemala ponen en pausas sus vidas mientras encuentran un lugar seguro para ser ellas mismas.</sup></figcaption>
              </figure>
          </div>
          <p>Madelyn came to Guatemala to seek help from migrant organizations and she was sent to a shelter where she stayed for eleven weeks while she processed her refugee claim. Life in that waiting is a limbo. The migrants live without a document that allows them to work or access health services and, the most vulnerable, live in shelters to protect their integrity.</p>
          <div>
              <figure>
                  <img width="980" height="650" src="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-003-980x650.jpg" alt="" srcset="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-003-980x650.jpg 980w, https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-003-300x200.jpg 300w" sizes="(max-width: 980px) 100vw, 980px" />
                  <figcaption><sub>Mujeres trans que huyeron de Honduras y est&aacute;n atrapada en Guatemala, a la espera de una respuesta a su solicitud de asilo en Estados Unidos.&nbsp;</sub></figcaption>
              </figure>
          </div>
          <p>&ldquo;I am looking for an asylum here, but I feel that it is not very convenient for me to stay, because it seems to me, that the same type of people who live here are as in Honduras and because I do not know Guatemala. I don&apos;t know which the dangerous areas are, where I can be and where I can&rsquo;t,&quot; he says. She considers that she does not have the guarantees to live free of violence.</p>
          <p>She is right. Guatemala is not a safe country, as documented in the 2020 National Human Development Report, carried out by the United Nations Development Program (UNDP). This document does not published on time, because&nbsp;President Alejandro Giammattei&nbsp;censored it. This Central American country ends up forcing its own inhabitants to run away from the country due to poverty, social inequality, the deterioration of the population&apos;s living conditions, socio-environmental vulnerability, and criminal violence. It is estimated, that every day around 300 people leave Guatemala seeking to reach the United States without documents, according to the Guatemalan National Council for Migrant Assistance (Consejo Nacional para la Migraci&oacute;n de Guatemala - Conamigua).</p>
          <div>
              <figure>
                  <img width="980" height="650" src="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-006-980x650.jpg" alt="" srcset="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-006-980x650.jpg 980w, https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-006-300x200.jpg 300w" sizes="(max-width: 980px) 100vw, 980px" />
                  <figcaption><sup>De 400 solicitudes de refugio en Guatemala que Lambda present&oacute;, solo 6 recibieron una respuesta positiva.</sup></figcaption>
              </figure>
          </div>
          <p>This is Madelyn&apos;s second attempt to migrate to a place where she can feel safe. When she was 18 years old, she traveled by bus from Honduras and when she arrived at Tec&uacute;n Um&aacute;n, the border between Guatemala and Mexico, she was attacked by unknown men. For this reason, she returned to her country, where she once again encountered the same violence that forced her to run away.</p>
          <p>In 2021, when she was 22 years old, she crossed her country again to Izabal, Guatemala, where, running out of money, she hitched trucks that crossed her path and took her to the city. There she looked for the shelter where she was, at the time she gave the interview for this report.</p>
          <div>
              <figure>
                  <img width="980" height="650" src="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-007-980x650.jpg" alt="" srcset="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-007-980x650.jpg 980w, https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-007-300x200.jpg 300w" sizes="(max-width: 980px) 100vw, 980px" />
                  <figcaption><sup>Se estima que cada d&iacute;a de Guatemala salen 300 migrantes rumbo a Estados Unidos.</sup></figcaption>
              </figure>
          </div>
          <p>&ldquo;In Honduras I worked as a sex worker, but I migrated because I also want to leave that life behind and be reborn again, and look for a job doing whatever it takes to buy my little stuff,&rdquo; she says.</p>
          <p>According to statistics of the Guatemalan Migration Institute (Instituto Guatemalteco para la Migraci&oacute;n - IGM), like Madelyn, 3,239 people applied for refuge in Guatemala, from January 2002 to January 2022, and only 573 obtained it, that is, only 17%. The 56% of those people recognized as refugees are women, 41% men and 3% of the population are from the LGTBIQ community.</p>
          <div>
              <figure>
                  <img width="980" height="650" src="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-009-1-980x650.jpg" alt="" srcset="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-009-1-980x650.jpg 980w, https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-009-1-300x200.jpg 300w" sizes="(max-width: 980px) 100vw, 980px" />
                  <figcaption><sub>Hay organizaciones que brindan albergue a mujeres trans mientras regularizan su estatus migratorio.</sub></figcaption>
              </figure>
          </div>
          <p>The report called&nbsp;&quot;It&apos;s what happens when you look like this&quot;,&nbsp;by Human Rights Watch (HRW), has documented that within the framework of the Cooperation Agreement on Asylum, which Guatemala signed with the United States during the administration of Donald Trump ; 939 asylum seekers, men and women from Honduras and El Salvador, were sent to Guatemala. This is a country that &quot;is unable to provide effective protection to asylum seekers, including marginalized groups such as LGBT people&quot;, according to the document.</p>
          <p>Of those 939 people, only 2% requested refuge in Guatemala and no one obtained it. The report points out that this Central American country has a rudimentary and complicated asylum procedure that was not prepared to receive dozens of new applications.</p>
          <div>
              <figure>
                  <img width="980" height="650" src="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-010-980x650.jpg" alt="" srcset="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-010-980x650.jpg 980w, https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-010-300x200.jpg 300w" sizes="(max-width: 980px) 100vw, 980px" />
                  <figcaption><sub>Solo 2 de cada 100 personas LGBTIQ recibe una respuesta positiva a su petici&oacute;n de asilo en Guatemala.&nbsp;</sub></figcaption>
              </figure>
          </div>
          <p>&ldquo;The U.S. Immigration and Customs Enforcement transferred asylum seekers to Guatemala, without no regard for whether they faced a risk of persecution in that country, including on the basis of their sexual orientation or gender identity&rdquo;, noted HRW.</p>
          <p>The investigation of this organization coincides with Madelyn&apos;s concern, which is to suffer again in Guatemala the same violence that she suffered in her country. &ldquo;For a Salvadoran or Honduran LGBT person, facing a forced relocation to Guatemala, where there is the possibility of having to face similar forms of persecution and similar indifference or hostility from the Guatemalan authorities, as they had suffered in their countries originally, it was a devastating setback,&rdquo; the document noted.</p>
          <p>In addition to Central Americans, 182 migrants from Venezuela, 196 from Cuba, 99 from Nepal, 63 from Colombia, 46 from Mexico, 14 from the United States, 11 from China, 6 from Russia, 2 from Jordan, 2 from Palestine, 1 from Jamaica and 1 person from Ukraine.</p>
          <div>
              <figure>
                  <img width="980" height="650" src="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-011-980x650.jpg" alt="" srcset="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-011-980x650.jpg 980w, https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-011-300x200.jpg 300w" sizes="(max-width: 980px) 100vw, 980px" />
                  <figcaption><sup>Sin un documento legal que les permita trabajar en Guatemala, las y los migrantes viven en pobreza.</sup></figcaption>
              </figure>
          </div>
          <p>The majority of migrants who received a favorable response are from El Salvador, Honduras and Nicaragua.</p>
          <p>Since President Alejandro Giammattei took office as president of Guatemala, the country has also become a wall for migrants who traveling in caravans from Honduras, Nicaragua and El Salvador. The expulsion of migrants has increased by 328%, with the new government. According to statistics from the Guatemalan Migration Institute, in 2020, 454 migrants were expelled from the country and in 2021 that figure rose to 1,492. From January to March 13, 2022, there are 217 people.</p>
          <div>
              <figure>
                  <img width="980" height="650" src="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-012-980x650.jpg" alt="" srcset="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-012-980x650.jpg 980w, https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-012-300x200.jpg 300w" sizes="(max-width: 980px) 100vw, 980px" />
                  <figcaption><sup>El 56% de quienes han sido reconocidas como refugiadas en Guatemala son mujeres.</sup></figcaption>
              </figure>
          </div>
          <p>In January 2021, the National Civil Police and members of the army built a human fence to prevent the passage of more than 5,000 people seeking to cross the territory on foot. Hundreds of people were returned to the border with Honduras in government buses, while others, concentrated in small groups, looked for blind spots to pass.</p>
        <p>Since then, that has been the strategy of the government of this country to stop the flow to the United States. In January 2022, around 300 people who leaving San Pedro Sula were captured, when they crossed into Guatemala. This was the first caravan of the year dissolved in the country.&nbsp;</p>
            <p>The limb</p>
            <p>The Lambda Association is a non-governmental organization that provides help to LGBTIQ migrants who seek refuge in Guatemala. Between 2019 and 2021, Lambda accompanied the petition of 400 people and only 6 cases, 1.5%, were resolved positively, that is, only 2 out of 100 people receive an affirmative answer, while most are still waiting of an answer or abandons the process because of hopelessness.</p>
            <p>For those people who pass through Guatemala and seek to stay in the country, they have to make an application at the National Commission for Refugees (Comisi&oacute;n Nacional para Refugiado - Conare). They must start the process to avoid being expelled, while they receive the documents to reside in the country. The first thing they must do is obtain a valid identification document, which would give them the possibility of asserting their right to health, education and a job. However, currently the National Registry of Persons (Registro Nacional de Personas - Renap) gives them a permanence permit sheet with their general information. This document is valid for one month and does not assign them an identity number, this avoid them from accessing State platforms, jobs in the private sector and makes it impossible for them to be vaccinated against covid-19.</p>
          <div>
              <figure>
                  <img width="980" height="650" src="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-013-980x650.jpg" alt="" srcset="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-013-980x650.jpg 980w, https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-013-300x200.jpg 300w" sizes="(max-width: 980px) 100vw, 980px" />
                  <figcaption><sub>De 2002 a enero de 2022, 3 mil 3239 personas han solicitado refugio en Guatemala y solo el 17% lo ha obtenido.</sub></figcaption>
              </figure>
          </div>
          <p>The Lambda organization reported these deficiencies to the Human Rights Attorney (Procuradur&iacute;a para los Derechos Humanos - PDH) for violation of the right to identity. The organization has known cases in which the National Civil Police, despite the fact that it is an official document issued by Renap, does not recognize or validate these documents and send people to a shelter to start the process of expulsion.</p>
            <p>The law establishes that the procedure to obtain refuge in Guatemala lasts between 3 and 6 months, but the reality is different. Before the pandemic, the process took an average of one year and now the response can come up to two years later, according to estimates by Lambda, which has accompanied these processes for LGBTIQ+ people. Until the resolution arrives, people must go monthly to the Guatemalan Migration Institute.</p>
            <p>The Convention on the Status of Refugees considers a refugee to be any person who, due to well-founded fear of being persecuted for reasons of race, religion, nationality, social group or political opinion, leaves their country and is unwilling or unable to return to it. Carlos Vald&eacute;s, executive director of Lambda, explains that the LGTBIQ+ population in Central America have this well-founded fear and escape in order to preserve their lives.</p>
            <p>&ldquo;The agenda of the governments in the region is totally conservative and that violates the human rights of the LGTBI community, especially the transsexual population, and puts them at risk of suffering violence and sexual violence,&rdquo; says Vald&eacute;s, and adding: &ldquo;Guatemala It is not a paradise, but even so, the migrants have the hope that they can live better here.&rdquo;</p>
            <p>Trapped in their own country</p>
            <p>Kimberly is 33 years old, from Guatemala and a sex worker. The last year, she has spent locked up in a private shelter. She is there because she suffered an armed murder attempt by a group of extortionists who demanded a weekly fee of $32 (250 quetzales). &ldquo;I was shot when I was leaving my work. The aggressors kept looking for me, they intimidated me and I wouldn&apos;t let them, I refused to give them my money and that&apos;s why they surrounded me threatening to kill me&rdquo;, she says.</p>
          <div>
              <figure>
                  <img width="980" height="650" src="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-005-980x650.jpg" alt="" srcset="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-005-980x650.jpg 980w, https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-005-300x200.jpg 300w" sizes="(max-width: 980px) 100vw, 980px" />
                  <figcaption><sup>Kimberly espera una respuesta para ser considerada refugiada en Estados Unidos. En Guatemala su vida corre peligro.</sup></figcaption>
              </figure>
          </div>
          <p>Faced with the constant attacks, she went to the Public Ministry (prosecutor&apos;s office) to file a complaint, but never received an answer. She notified to the National Civil Police that she was been persecuted, but received no support. However, the aggressors found out about her complaint and returned to harass her. One night, a young man in a motorcycle ambushed her, he shot at her, she says.</p>
<p>&ldquo;That&apos;s how the time passed, they kept looking for me because I had no money and I decided to do everything possible to save my life. A Honduran friend told me about this shelter and I came here&rdquo;, she says.</p>
<p>Since then, Kimberly has been trapped in a shelter in her own country. She will hide there while he waits for the US government to respond to his asylum request.</p>
<p>&quot;My choice is to continue upwards, to continue migrating until I reach a place where there is no discrimination, where I can walk down a street and they don&apos;t yell at me, I want a safe place for myself, where I can feel free,&quot; says Madelyn.</p>
          <div>
              <figure>
                <img width="980" height="650" src="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-014-980x650.jpg" alt="" srcset="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-014-980x650.jpg 980w, https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-014-300x200.jpg 300w" sizes="(max-width: 980px) 100vw, 980px" />
                  <figcaption><sup>Seg&uacute;n estad&iacute;sticas de Guatemala, solo 2 de cada 10 personas LGBTIQ es aceptada como refugiada.</sup></figcaption>
              </figure>
          </div>
          <p>The Guatemalan lives in a shelter where she has met women with stories similar to hers. One of them is Karla, a 35-year-old Guatemalan transsexual woman from the department of Zacapa, who has been locked up in a shelter for a year waiting for the United States to accept her asylum request.</p>
<p>&ldquo;When I was 10 years old and my parents found out about my gender, they kicked me out of the house. Since that time, I have lived alone and I have been through many things. Thank God I am receiving psychological support and now I am working to go to a country where I can be free,&rdquo; she says.</p>
<p>While Karla wait for the answer to her asylum request in the United States, she works cleaning and maintaining the shelter where she lives. She cannot go out on the street because she fears being recognized and assaulted.</p>
        </div>
  )

  return (
      <div>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:image" content={featuredImage} />
          <meta property="og:locale" content="en_EN" />
          <meta property="og:type" content="article" />
        </Head>
        <main className="main-container">
          <ArticleComponent lang={'en'} title={title} featuredImage={featuredImage} body={BodyComponent} autor={autor} medio={medio} fotografia={fotografia} />
          <Header lang={'en'}/>
          <Footer/>
        </main>
      </div>
  );
}

