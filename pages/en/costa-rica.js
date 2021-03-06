import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleComponent from '@/components/ArticleComponent';
import { NextSeo } from 'next-seo';

export default function CostaRica(props) {

  const title = 'Xenophobia, the second pandemic to spread in Costa Rica';
  const description = 'A United Nations study revealed that in 13 months of the pandemic, more than 180,000 xenophobic comments were registered in Costa Rica, most of them against Nicaraguans. Nicaraguans face the dilemma of living with discrimination or returning to Nicaragua to face jail or death.';
  const featuredImage = 'https://migrantes.vozdeguanacaste.com/banner-costarica.jpg'
  const autor = "Written by: Vladimir Vásquez";
  const medio = '<a target="_blank" href="https://twitter.com/VozdeGuanacaste">@VozdeGuanacaste</a>';
  const fotografia = "Pictures by: César Arroyo";

  const BodyComponent = (
      <div>
        <p className='excerpt'>A United Nations study revealed that in 13 months of the pandemic, more than 180,000 xenophobic comments were registered in Costa Rica, most of them against Nicaraguans. Nicaraguans face the dilemma of living with discrimination or returning to Nicaragua to face jail or death.</p>
        <p>&ldquo;My problem is with this damn Nicaraguan,&rdquo; said a tall, white, stocky man to Alberto, a 28-year-old Nicaraguan, before kicking him outside a bar in Guadalupe, one of San Jos&eacute;&rsquo;s main cities. The attack was not sudden. The aggressor had passed near the bar and had fixed his gaze on the Nicaraguan who was there with a Salvadoran woman.&nbsp;</p>
        <p>Initially, he did not show any hostility. He sat at the table with them and even offered to buy them a beer so they could talk. The &ldquo;alerts&rdquo; went off for Alberto when the man began to show them his tattoos: a swastika, a black sun, and many other symbols. He also bragged about his training: he told them he practiced martial arts, could handle weapons of different calibers and insistently asked them about their nationality, Alberto says.&nbsp;</p>
        <p>&nbsp;&ldquo;When he first passed by the bar, he gave me a Nazi salute. I had already read about these people who identify themselves as neo-Nazis. I told my friend that we should leave, she came out first, and he didn&rsquo;t have any kind of aggression towards her. When I was taking her away, he told her: &lsquo;the problem is not with you, it&rsquo;s with this damn Nicaraguan, and he kicked me,&rdquo; says Alberto, who has preferred not to reveal his real name for this story for security reasons.&nbsp;</p>
        <p>Alberto is a thin brown man from Le&oacute;n, in western Nicaragua. He arrived in Costa Rica in 2020 to protect himself from the Daniel Ortega regime&rsquo;s persecution of those who participated in the April 2018 protests. According to the most recent data from the Interdisciplinary Group of Experts (GIEI) of the Organization of American States (OAS), those protests ended in more than 355 people killed by government repression.&nbsp;</p>
        <p>Until February 28, 2020, the day the aggression occurred, Alberto felt safe in Costa Rica. He thought the episodes of persecution were behind him, but his assailant thought that his skin and accent were enough to attack him. His Salvadoran friend decided to defend him from the man. She picked up a garbage bag on the ground and threw it at him. The couple managed to leave the place and took refuge in another friend&rsquo;s house in case the attacker followed them, said Alberto.&nbsp;</p>
        <p>Around the time of Alberto&rsquo;s attack, covid-19 cases were beginning to rise in Costa Rica. By March 2020, accusations and harassment on social media against Nicaraguan migrants increased. Hate messages for foreigners included accusations of spreading the disease in the country.</p>
        <p>&ldquo;They told me that we were coming to flood the country with covid,&rdquo; recalls Juliana, a Nicaraguan who has lived almost 30 years in Costa Rica and daily had to read comments against Nicaraguans on Facebook.&nbsp;</p>
        <figure>
            <img src="https://cdn.imghaste.com/vozdeguanacaste.com/wp-content/uploads/2022/03/2021-diciembre-Derechos-ninez-migrante-La-Cruz-Santa-Cecilia-Nicaragua-Cesar-Arroyo-46.jpg" alt="" width="1920" height="1280" srcset="https://cdn.imghaste.com/vozdeguanacaste.com/wp-content/uploads/2022/03/2021-diciembre-Derechos-ninez-migrante-La-Cruz-Santa-Cecilia-Nicaragua-Cesar-Arroyo-46.jpg 1920w, https://cdn.imghaste.com/vozdeguanacaste.com/wp-content/uploads/2022/03/2021-diciembre-Derechos-ninez-migrante-La-Cruz-Santa-Cecilia-Nicaragua-Cesar-Arroyo-46-300x200.jpg 300w, https://cdn.imghaste.com/vozdeguanacaste.com/wp-content/uploads/2022/03/2021-diciembre-Derechos-ninez-migrante-La-Cruz-Santa-Cecilia-Nicaragua-Cesar-Arroyo-46-1024x683.jpg 1024w, https://cdn.imghaste.com/vozdeguanacaste.com/wp-content/uploads/2022/03/2021-diciembre-Derechos-ninez-migrante-La-Cruz-Santa-Cecilia-Nicaragua-Cesar-Arroyo-46-768x512.jpg 768w, https://cdn.imghaste.com/vozdeguanacaste.com/wp-content/uploads/2022/03/2021-diciembre-Derechos-ninez-migrante-La-Cruz-Santa-Cecilia-Nicaragua-Cesar-Arroyo-46-1536x1024.jpg 1536w" sizes="(max-width: 1920px) 100vw, 1920px" />
            <figcaption>Costa Rican police patrols the Peñas Blancas border sector known as El Muro. December 2021, La Cruz, Guanacaste. Photo: César Arroyo Castro</figcaption>
        </figure>
        <h2><strong>Half a million expressions of hate </strong></h2>
        <p>The United Nations Organization (UN) and the firm COES found that, from May 2020 to June 2021, people on social media published more than half a million (548,020) discriminatory comments and conversations.&nbsp;</p>
        <p>Of all these posts, 33% were xenophobic expressions. Some of them included hate messages for foreigners. The Nicaraguan population was the most affected.&nbsp;</p>
        <blockquote>
            <p>I told them that covid was already here, that it was not because the Nicaraguans who came here brought the virus. I told more than one of them that they were xenophobic, but they answered me that we were coming to take jobs away from Costa Ricans&rdquo;, says Juliana.</p>
        </blockquote>
        <p>In June 2020, the highest peak of comments against Nicaraguans related to the lack of security measures against covid-19 in &ldquo;cuarterias&rdquo; (complexes of very small rooms where low-income families live) was recorded.</p>
        <p>The figure in the study is large when compared to the number of Nicaraguans in Costa Rica. The only official census that has been conducted to measure the number of Nicaraguans in the country dates back to 2011. Back then, there were 287,766 Nicaraguans living in Costa Rica. Currently, the most conservative data from experts on migration issues estimate more than half a million Nicas in the country.&nbsp;</p>
        <p>In 2020, the National Institute of Statistics and Census estimated that 80% of the foreign population living in the country was born in Nicaragua. Immigration increased in 2018 when Daniel Ortega&rsquo;s regime unleashed a chase for opponents calling for his resignation from the power he had held, up to that time, for 11 years. Official data from Costa Rican Migration and Foreign Affairs shows that in 2021, more than 47,000 Nicaraguans requested refuge in Costa Rica. However, this number does not include those who arrived in an irregular situation in the country.</p>
        <p>The UN study details that 69% of the xenophobic expressions were intended to offend, while 31% were based on the emission of prejudices and stereotypes, &ldquo;which although they did not necessarily have the intention (to offend), they generated discrimination towards certain populations&rdquo;.</p>
        <p>According to the UN study, 66% of the discriminatory comments were made by men, compared to 48% by women. People aged 45 years or older were the ones who showed the highest offending intentionality with their comments, with 79%. Furthermore, the province that registered the most hateful comments was San Jos&eacute;.&nbsp;</p>
        <p>Publications made from Costa Rican institutions&rsquo; on social media were full of reactions with comments against Nicaraguans. It was enough to look at &nbsp;Costa Rican Migration and Foreigners Affairs account, the Costa Rican Social Security Fund (CCSS)&rsquo;s one, and even the media.&nbsp;</p>
        <blockquote>
            <p>New cases are from Nicas, who are coming to infect the Ticos,&rdquo; wrote in May 2020 a man in the CCSS publications about the covid-19 cases.&nbsp;</p>
        </blockquote>
        <p>&ldquo;If we have to exterminate them, that&rsquo;s the only way they learn, those motherfuckers),&rdquo; threatened another profile on Facebook. &ldquo;I contribute 10,000 colones (US$15) for a fund to create the lynch squad,&rdquo; said one more&mdash;just one more of the thousands of comments that can be found in different publications on social media.&nbsp;</p>
        <p>Discriminatory publications spread throughout the length and breadth of everything that mentioned Nicaraguans. In Guanacaste, publications referring to Nicaraguan refugees were also filled with xenophobic comments.&nbsp;</p>
        <p>Other users pointed out some social media accounts of being trolls (fake accounts used to offend or divert attention) who just wanted to cause chaos.&nbsp;</p>
        <p>&ldquo;Everyone should go back to Nicaragua and not suffer humiliation until they die with dignity,&rdquo; read one of the profiles. &ldquo;It is a very high social burden that is going to collapse the whole Costa Rican system. Very nice (journalistic) note, but I am not very romantic about the future, especially the possible invasion in the province (of Guanacaste),&rdquo; said a person from another account.&nbsp;</p>
        <figure>
            <img src="https://cdn.imghaste.com/vozdeguanacaste.com/wp-content/uploads/2022/03/2020-Febrero-Mama-Africa-migrantes-africanos-nicaraguenses-CLIP-Cesar-Arroyo-12.jpg" alt="" width="2000" height="1333" srcset="https://cdn.imghaste.com/vozdeguanacaste.com/wp-content/uploads/2022/03/2020-Febrero-Mama-Africa-migrantes-africanos-nicaraguenses-CLIP-Cesar-Arroyo-12.jpg 2000w, https://cdn.imghaste.com/vozdeguanacaste.com/wp-content/uploads/2022/03/2020-Febrero-Mama-Africa-migrantes-africanos-nicaraguenses-CLIP-Cesar-Arroyo-12-300x200.jpg 300w, https://cdn.imghaste.com/vozdeguanacaste.com/wp-content/uploads/2022/03/2020-Febrero-Mama-Africa-migrantes-africanos-nicaraguenses-CLIP-Cesar-Arroyo-12-1024x682.jpg 1024w, https://cdn.imghaste.com/vozdeguanacaste.com/wp-content/uploads/2022/03/2020-Febrero-Mama-Africa-migrantes-africanos-nicaraguenses-CLIP-Cesar-Arroyo-12-768x512.jpg 768w, https://cdn.imghaste.com/vozdeguanacaste.com/wp-content/uploads/2022/03/2020-Febrero-Mama-Africa-migrantes-africanos-nicaraguenses-CLIP-Cesar-Arroyo-12-1536x1024.jpg 1536w" sizes="(max-width: 2000px) 100vw, 2000px" />
            <figcaption>Hundreds of Nicaraguan, African and Asian migrants cross from Costa Rica to Nicaragua through “the alley”. It is a road that separates both countries by a barbed wire. When they cross, the Nicaraguan Army intercepts them on the other side, to takes them to the General Directorate of Immigration and charges them $150 for safe conduct. Photo: Cesar Arroyo Castro</figcaption>
        </figure>
        <h2><strong>Xenophobia mutates according to the context</strong></h2>
        <p>Larissa Trist&aacute;n is a professor at the School of Collective Communication Sciences and a researcher at the Communication Research Center (CICOM) of the University of Costa Rica. Together with other colleagues, she conducted an analysis on the behavior of xenophobic comments during the covid-19 pandemic in 2020 and part of the year 2021. &nbsp;</p>
        <p>Social networks were flooded with fake news related to Nicaraguans, among which Trist&aacute;n identified, for example, conspiracy theories that &ldquo;revealed&rdquo; a secret agreement between the dictatorship of Daniel Ortega in Nicaragua and Costa Rican President Carlos Alvarado, to bring Nicaraguans to be treated in Costa Rican hospitals.</p>
        <p>&ldquo;Photomontages were made of Nicaraguans entering the border and coming to be treated here. In other words, many of the stereotypes that existed before the pandemic were updated and given a twist for the pandemic, but they were not necessarily new. That stereotype that the Nicaraguan comes to take advantage of the Caja, is given a twist and updated for the pandemic,&rdquo; explains Trist&aacute;n.&nbsp;</p>
        <p>The researcher says that it is difficult to measure whether the xenophobic discourse against Nicaraguans increased during the pandemic, but comments that attributed responsibility for the infections in Costa Rica to them began to be seen, despite the fact that the first case of covid-19 in the country was detected in a 49-year-old American woman.&nbsp;</p>
        <p>The accusations of spreading the virus even reached Costa Rican agricultural workers who, according to Trist&aacute;n, did not come to the country infected. On the contrary, they were infected in Costa Rican territory due to the lack of preventive measures taken by the companies where they worked.&nbsp;</p>
        <p>Hate speech gradually changed as the pandemic took a back seat to vaccination. The same Facebook groups and anti-vaccine pages continued to perpetuate it. Although they said that Nicaraguans were coming to spread the disease at the beginning of the pandemic, they also later complained about vaccines being administered in Tico territory.&nbsp;</p>
        <blockquote>
            <p>It is like wanting to generate controversy and conflicts without any sense and during the vaccination there was an increase in the xenophobic discourse&rdquo;, adds Trist&aacute;n.&nbsp;</p>
        </blockquote>
        <p>It does not only happen against Nicaraguans. As an example, Trist&aacute;n says that in August 2021 Costa Rica offered refuge to 48 Afghan women seeking to flee from the Taliban in Afghanistan, after the United States decided to withdraw its troops from the country. Then their &ldquo;concern&rdquo; was that these women would come to Costa Rica to have babies or that crime would increase.&nbsp;</p>
        <h2><strong>The profile of the xenophobes</strong></h2>
        <p>Trist&aacute;n says that those who spread xenophobic speeches on social networks are &ldquo;ordinary people&rdquo;, sometimes protected by the anonymity provided by social networks, fake accounts or very specific groups, such as Liberales Costa Rica, a page that frequently shares speeches against Nicaraguan migrants.&nbsp;</p>
        <p>Alberto believes that his brown skin and accent made him easily identifiable as Nicaraguan to the white man who decided to attack him in the bar, who also identified himself as an acolyte of neo-Nazism, a movement that emerged after World War II and seeks to reinstate Nazism in the world, based on the belief that there is a white supremacy.&nbsp;</p>
        <p>The attack against the Nicaraguan was not just in the street in front of that bar in Guadalupe. Alberto does not know how that man managed to locate him in the house where he lived at the time. He came to look for him accompanied by other people and, when they realized that only Nicaraguans lived in the house, they began to spit on the floor saying: &ldquo;How disgusting Nicaraguans&rdquo;, according to Alberto, who believes that the aggressor took a photograph of him while they were in the bar and with it he located his place of residence.&nbsp;</p>
        <p>Since then he had to move house. He lived in fear that he could be located again at some point, so he had to seek psychological help. &ldquo;At one point, I was talking to a psychologist. It is too heavy, because you forget a little bit the feeling of persecution that one brings from the 2018 protest (in Nicaragua), that if you see police sirens(&hellip;) they scared you. I also felt a certain hatred for that person because I wondered why these types of people exist, but it is something I no longer carry,&rdquo; the Nicaraguan recounts.&nbsp;</p>
        <p>Alberto arrived in Costa Rica after participating in the protests against Ortega. He does not have many options to return. He says he is just trying to put behind him the bad episode with his aggressor, whom he did not report to the Costa Rican police authorities, because his friends told him they would not do anything for him.&nbsp;</p>
        <p>His options are very short: either he tries to ignore and live with the xenophobia in Costa Rica or he returns to Nicaragua to face the jails of the Ortega regime, implacable against anyone identified as an opponent.</p>
        <figure>
            <img src="https://cdn.imghaste.com/vozdeguanacaste.com/wp-content/uploads/2022/03/2021-diciembre-Derechos-ninez-migrante-La-Cruz-Santa-Cecilia-Nicaragua-Cesar-Arroyo-47.jpg" alt="" width="1920" height="1280" srcset="https://cdn.imghaste.com/vozdeguanacaste.com/wp-content/uploads/2022/03/2021-diciembre-Derechos-ninez-migrante-La-Cruz-Santa-Cecilia-Nicaragua-Cesar-Arroyo-47.jpg 1920w, https://cdn.imghaste.com/vozdeguanacaste.com/wp-content/uploads/2022/03/2021-diciembre-Derechos-ninez-migrante-La-Cruz-Santa-Cecilia-Nicaragua-Cesar-Arroyo-47-300x200.jpg 300w, https://cdn.imghaste.com/vozdeguanacaste.com/wp-content/uploads/2022/03/2021-diciembre-Derechos-ninez-migrante-La-Cruz-Santa-Cecilia-Nicaragua-Cesar-Arroyo-47-1024x683.jpg 1024w, https://cdn.imghaste.com/vozdeguanacaste.com/wp-content/uploads/2022/03/2021-diciembre-Derechos-ninez-migrante-La-Cruz-Santa-Cecilia-Nicaragua-Cesar-Arroyo-47-768x512.jpg 768w, https://cdn.imghaste.com/vozdeguanacaste.com/wp-content/uploads/2022/03/2021-diciembre-Derechos-ninez-migrante-La-Cruz-Santa-Cecilia-Nicaragua-Cesar-Arroyo-47-1536x1024.jpg 1536w" sizes="(max-width: 1920px) 100vw, 1920px" />
            <figcaption>Costa Rican police intercept a woman who has just entered the country through the Peñas Blancas border sector known as El Muro. December 2021, La Cruz, Guanacaste. Photo: Cesar Arroyo Castro</figcaption>
        </figure>
        <p>In Nicaragua, questioning Daniel Ortega&rsquo;s regime is the equivalent of being considered a criminal. The Nicaraguan police stalk opponents&rsquo; homes and their families day and night. That is why many flee the country, and live in constant fear of being persecuted and end up dead or in jail.</p>
        <p>Juliana lives in San Jos&eacute; and cannot return to Nicaragua. She believes she is in danger of being imprisoned in her country for her comments against the Ortega regime. In Nicaragua, there are more than 155 political prisoners.&nbsp;</p>
        <blockquote>
            <p>When the pandemic occurred, we were mistreated on social networks, even as &lsquo;muertos de hambre&rsquo;,&rdquo; Juliana recalls.&nbsp;</p>
        </blockquote>
        <p>Social media, both Facebook and Twitter, allow a comment to be reported as racist or because it affects a specific sector of the population. Trist&aacute;n recommends that all people affected by these hate messages use the tools that the same platforms provide so that the expansion of this type of speech can be limited.&nbsp;</p>
        <p>Alberto says that now he walks carefully in the streets when he sees people who have the same profile as his attacker, he prefers to walk away. &ldquo;I felt a certain hatred for that person, I wondered why these types of people exist, but in the sessions with the psychologist I managed to get rid of that annoyance&rdquo;, he concludes.</p>
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
          <ArticleComponent title={title} featuredImage={featuredImage} body={BodyComponent} autor={autor} medio={medio} fotografia={fotografia} lang={'en'}/>
          <Header lang={'en'}/>
          <Footer/>
        </main>
      </div>
  );
}

