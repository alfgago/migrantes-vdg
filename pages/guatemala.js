import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleComponent from '@/components/ArticleComponent';
import { NextSeo } from 'next-seo';

export default function CostaRica(props) {

  const title = 'Guatemala: el limbo para las migrantes trans que esperan refugio';
  const description = 'Guatemala es un pa&iacute;s de paso para migrantes que buscan llegar hasta Estados Unidos, pero tambi&eacute;n es un nudo para quienes buscan refugio.';
  const featuredImage = 'https://migrantes.vozdeguanacaste.com/banner-guatemala.jpg'
  const autor = "Texto: Jody García";
  const medio = '<a target="_blank" href="https://twitter.com/AgenciaOcote">@AgenciaOcote</a>';
  const fotografia = "Fotografía: Sandra Sebastián";

  const BodyComponent = (
      <div>
          <p className='excerpt'>Guatemala es un pa&iacute;s de paso para migrantes que buscan llegar hasta Estados Unidos, pero tambi&eacute;n es un nudo para quienes buscan refugio. Cientos de migrantes se quedan atrapados a la espera de ser considerados como refugiados. Las posibilidades de recibir una respuesta positiva son m&iacute;nimas, especialmente para la comunidad LGTBIQ+.</p>
          <p>Madelyn es una mujer trans de 22 a&ntilde;os. En noviembre de 2021 migr&oacute; de Tegucigalpa, la capital de Honduras, a la Ciudad Guatemala porque en su pa&iacute;s fue acosada y amenazada por pandilleros. &ldquo;Me golpearon, ten&iacute;a toda la cara herida y tengo pruebas. Decid&iacute; migrar porque ten&iacute;a miedo de que me pasara algo m&aacute;s grave. Tengo otras compa&ntilde;eras a las que han golpeado y otras a las que han asesinado cuando estaban trabajando&rdquo;, relata.&nbsp;</p>
          <div>
              <figure>
                  <img width="980" height="650" src="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-001-980x650.jpg" alt="" srcset="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-001-980x650.jpg 980w, https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-001-300x200.jpg 300w" sizes="(max-width: 980px) 100vw, 980px" />
                  <figcaption><sup>Mujeres trans huyen de sus pa&iacute;ses y viven escondidas en Guatemala para esquivar la violencia.</sup></figcaption>
              </figure>
          </div>
          <p>Cada a&ntilde;o, cientos de migrantes llegan a Guatemala para solicitar refugio. En 2019 fueron 494 personas; en 2020, 487; en 2021, 1,054 y 70 m&aacute;s solo en enero de 2022. Todos deben esperar al menos dos a&ntilde;os por una resoluci&oacute;n, y las estad&iacute;sticas de Migraci&oacute;n revelan que s&oacute;lo 1.7 de cada 10 migrantes recibe un s&iacute; como respuesta a su petici&oacute;n de asilo. La situaci&oacute;n es m&aacute;s dram&aacute;tica para solicitantes de la comunidad LGBTIQ+ porque solo 2 de cada 100 personas son aceptadas, revelan los datos registrados por una organizaci&oacute;n que acompa&ntilde;a estas peticiones.</p>

          <div>
              <figure>
                  <img width="980" height="650" src="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-002-980x650.jpg" alt="" srcset="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-002-980x650.jpg 980w, https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-002-300x200.jpg 300w" sizes="(max-width: 980px) 100vw, 980px" />
                  <figcaption><sup>Las migrantes trans que piden asilo en Guatemala ponen en pausas sus vidas mientras encuentran un lugar seguro para ser ellas mismas.</sup></figcaption>
              </figure>
          </div>
          <p>Madelyn lleg&oacute; a Guatemala a buscar ayuda con organizaciones de migrantes y fue enviada a un albergue donde permaneci&oacute; por once semanas, mientras tramitaba su solicitud de refugio.&nbsp;</p>
          <p>La vida en esa espera es un limbo. Las migrantes viven sin un documento que les permita trabajar o acceder a servicios de salud y, las m&aacute;s vulnerables, viven en refugios para resguardar su integridad.&nbsp;</p>
          <div>
              <figure>
                  <img width="980" height="650" src="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-003-980x650.jpg" alt="" srcset="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-003-980x650.jpg 980w, https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-003-300x200.jpg 300w" sizes="(max-width: 980px) 100vw, 980px" />
                  <figcaption><sub>Mujeres trans que huyeron de Honduras y est&aacute;n atrapada en Guatemala, a la espera de una respuesta a su solicitud de asilo en Estados Unidos.&nbsp;</sub></figcaption>
              </figure>
          </div>
          <p>&ldquo;Estoy buscando un asilo ac&aacute;, pero siento que no me conviene mucho quedarme porque pareciera que aqu&iacute; vive el mismo tipo de personas que en Honduras y porque no conozco Guatemala. No s&eacute; cu&aacute;les son las zonas peligrosas, d&oacute;nde puedo estar y d&oacute;nde no&rdquo;, comenta, porque considera que no tiene las garant&iacute;as para vivir libre de violencia.</p>
          <p>Y tiene raz&oacute;n. Guatemala no es un pa&iacute;s seguro, como document&oacute; el Informe Nacional de Desarrollo Humano 2020, realizado por el Programa de Naciones Unidas para el Desarrollo (PNUD), que no fue publicado en tiempo porque el&nbsp;<a href="https://www.plazapublica.com.gt/content/el-diagnostico-de-guatemala-que-no-se-publico-por-peticion-de-giammattei" target="_blank">presidente Alejandro Giammattei lo censur&oacute;</a>. Este pa&iacute;s centroamericano termina por obligar a sus propios habitantes a<a href="https://www.plazapublica.com.gt/sites/default/files/resumen_ejecutivo_informe.pdf" target="_blank">&nbsp;huir del pa&iacute;s</a> a causa de la pobreza, la desigualdad social, el deterioro de las condiciones de vida de la poblaci&oacute;n, la vulnerabilidad socioambiental y la violencia criminal. Se estima que cada d&iacute;a salen de Guatemala alrededor de 300 personas que buscan llegar a Estados Unidos sin documentos, seg&uacute;n el Consejo Nacional de Atenci&oacute;n al Migrante de Guatemala (Conamigua).&nbsp;</p>
          <div>
              <figure>
                  <img width="980" height="650" src="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-006-980x650.jpg" alt="" srcset="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-006-980x650.jpg 980w, https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-006-300x200.jpg 300w" sizes="(max-width: 980px) 100vw, 980px" />
                  <figcaption><sup>De 400 solicitudes de refugio en Guatemala que Lambda present&oacute;, solo 6 recibieron una respuesta positiva.</sup></figcaption>
              </figure>
          </div>
          <p>Este es el segundo intento de Madelyn de migrar a un lugar donde pueda sentirse segura. Cuando ten&iacute;a 18 a&ntilde;os, viaj&oacute; en bus desde Honduras y al llegar a Tec&uacute;n Um&aacute;n, la frontera de Guatemala con M&eacute;xico, fue atacada por hombres desconocidos. Por ese motivo regres&oacute; a su pa&iacute;s, donde volvi&oacute; a encontrarse con la misma violencia que la oblig&oacute; a escapar.&nbsp;</p>
          <p>En 2021, cuando ten&iacute;a 22 a&ntilde;os, cruz&oacute; de nuevo su pa&iacute;s hasta Izabal, Guatemala, donde, al quedarse sin dinero, pidi&oacute; avent&oacute;n a camiones que se cruzaban en su camino y que la llevaron hasta la ciudad. All&iacute; busc&oacute; el refugio donde se encontraba al momento la entrevista para este reportaje.</p>
          <div>
              <figure>
                  <img width="980" height="650" src="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-007-980x650.jpg" alt="" srcset="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-007-980x650.jpg 980w, https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-007-300x200.jpg 300w" sizes="(max-width: 980px) 100vw, 980px" />
                  <figcaption><sup>Se estima que cada d&iacute;a de Guatemala salen 300 migrantes rumbo a Estados Unidos.</sup></figcaption>
              </figure>
          </div>
          <p>&ldquo;En Honduras yo ejerc&iacute;a el comercio sexual, pero migr&eacute; porque tambi&eacute;n quiero dejar esa vida atr&aacute;s y volver a renacer, buscar un trabajo de lo que sea para comprar mis cositas&rdquo;, dice.</p>
          <p>Seg&uacute;n estad&iacute;sticas del Instituto Guatemalteco de Migraci&oacute;n (IGM), como Madelyn, 3 mil 239 personas solicitaron refugio en Guatemala, desde enero de 2002 a enero de 2022, y solo 573 lo obtuvieron, es decir, solo el 17%. El 56% de quienes han sido reconocidas como refugiadas son mujeres, el 41% hombres y el 3% poblaci&oacute;n son de la comunidad LGTBIQ.</p>
          <div>
              <figure>
                  <img width="980" height="650" src="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-009-1-980x650.jpg" alt="" srcset="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-009-1-980x650.jpg 980w, https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-009-1-300x200.jpg 300w" sizes="(max-width: 980px) 100vw, 980px" />
                  <figcaption><sub>Hay organizaciones que brindan albergue a mujeres trans mientras regularizan su estatus migratorio.</sub></figcaption>
              </figure>
          </div>
          <p>El informe&nbsp;<a href="https://www.hrw.org/sites/default/files/media_2021/03/%E2%80%9CEs%20lo%20que%20sucede%20cuando%20te%20ves%20as%C3%AD%E2%80%9D.pdf" target="_blank">&ldquo;Es lo que sucede cuando te ves as&iacute;&rdquo;</a>, de Human Rights Watch (HRW), document&oacute; que en el marco del Acuerdo de Cooperaci&oacute;n sobre Asilo (ACA), que Guatemala firm&oacute; con Estados Unidos durante la administraci&oacute;n de Donald Trump, 939 solicitantes de asilo, hombres y mujeres, de Honduras y El Salvador fueron enviados a Guatemala, un pa&iacute;s que &ldquo;no es capaz de brindar protecci&oacute;n efectiva a los solicitantes de asilo, incluidos los grupos marginados como las personas LGBT&rdquo;, seg&uacute;n dice el documento.</p>
          <p>De esas 939 personas, solo 2% pidieron refugio en Guatemala y nadie lo obtuvo.</p>
          <div>
              <figure>
                  <img width="980" height="650" src="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-010-980x650.jpg" alt="" srcset="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-010-980x650.jpg 980w, https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-010-300x200.jpg 300w" sizes="(max-width: 980px) 100vw, 980px" />
                  <figcaption><sub>Solo 2 de cada 100 personas LGBTIQ recibe una respuesta positiva a su petici&oacute;n de asilo en Guatemala.&nbsp;</sub></figcaption>
              </figure>
          </div>
          <p>El informe se&ntilde;ala que este pa&iacute;s centroamericano tiene un procedimiento de asilo rudimentario y complicado que no estaba preparado para recibir decenas de solicitudes nuevas.&nbsp;</p>
          <p>&ldquo;El Servicio de Control de Inmigraci&oacute;n y Aduanas de EE.UU. traslad&oacute; a Guatemala a solicitantes de asilo pr&aacute;cticamente sin considerar si se enfrentaban a un riesgo de persecuci&oacute;n en ese pa&iacute;s, incluso por motivos de su orientaci&oacute;n sexual o identidad de g&eacute;nero&rdquo;, se&ntilde;al&oacute; HRW.&nbsp;</p>
          <p>La investigaci&oacute;n de esta organizaci&oacute;n coincide con la preocupaci&oacute;n de Madelyn: la de volver a sufrir en Guatemala la misma violencia que padeci&oacute; en su pa&iacute;s. &ldquo;Para una persona LGBT salvadore&ntilde;a u hondure&ntilde;a, enfrentarse al traslado forzoso a Guatemala, donde exist&iacute;a la posibilidad de tener que hacer frente a formas parecidas de persecuci&oacute;n y a una indiferencia u hostilidad similar por parte de las autoridades guatemaltecas como hab&iacute;an sufrido en sus pa&iacute;ses de origen, constitu&iacute;a un rev&eacute;s devastador&rdquo;, dice el documento.</p>
          <div>
              <figure>
                  <img width="980" height="650" src="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-011-980x650.jpg" alt="" srcset="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-011-980x650.jpg 980w, https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-011-300x200.jpg 300w" sizes="(max-width: 980px) 100vw, 980px" />
                  <figcaption><sup>Sin un documento legal que les permita trabajar en Guatemala, las y los migrantes viven en pobreza.</sup></figcaption>
              </figure>
          </div>
          <p>Adem&aacute;s de personas centroamericanas, en Guatemala han solicitado refugio 182 migrantes de Venezuela, 196 de Cuba, 99 de Nepal, 63 de Colombia, 46 de M&eacute;xico, 14 de Estados Unidos, 11 de China, 6 de Rusia, 2 de Jordania, 2 de Palestina, 1 de Jamaica y 1 persona de Ucrania.&nbsp;</p>
          <p>La mayor&iacute;a de migrantes que obtuvo una respuesta favorable son de El Salvador, Honduras y Nicaragua.&nbsp;</p>
          <div>
              <figure>
                  <img width="980" height="650" src="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-012-980x650.jpg" alt="" srcset="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-012-980x650.jpg 980w, https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-012-300x200.jpg 300w" sizes="(max-width: 980px) 100vw, 980px" />
                  <figcaption><sup>El 56% de quienes han sido reconocidas como refugiadas en Guatemala son mujeres.</sup></figcaption>
              </figure>
          </div>
          <p>Desde que el presidente Alejandro Giammattei asumi&oacute; como presidente de Guatemala, el pa&iacute;s tambi&eacute;n se ha convertido en un muro para las y los migrantes que viajan en caravanas desde Honduras, Nicaragua y El Salvador. La expulsi&oacute;n de migrantes ha aumentado en un 328% con el nuevo gobierno. Seg&uacute;n estad&iacute;sticas del Instituto Guatemalteco de Migraci&oacute;n, en 2020 454 migrantes fueron expulsados del pa&iacute;s y en 2021 esa cifra subi&oacute; a 1 mil 492. De enero al 13 de marzo de 2022 van 217 personas.&nbsp;</p>
          <p>En enero de 2021, la Polic&iacute;a Nacional Civil y miembros del ej&eacute;rcito construyeron una valla humana para impedir el paso de m&aacute;s de 5 mil personas que buscaban cruzar el territorio a pie. Cientos fueron regresados a la frontera con Honduras en buses del gobierno, mientras que otros, concentrados en peque&ntilde;os grupos, buscaron puntos ciegos para pasar.&nbsp;</p>
          <p>Desde entonces esa ha sido la estrategia del gobierno de este pa&iacute;s para detener el flujo hacia los Estados Unidos. En enero de 2022, unas 300 personas que salieron de San Pedro Sula, fueron capturadas cuando cruzaron a Guatemala. Esta fue la primera caravana del a&ntilde;o disuelta en el pa&iacute;s.</p>
          <p><strong>El limbo</strong></p>
          <p>Asociaci&oacute;n Lambda es una organizaci&oacute;n no gubernamental que brinda ayuda a migrantes LGBTIQ que buscan refugio en Guatemala. Entre 2019 y 2021, Lambda acompa&ntilde;&oacute; la petici&oacute;n de 400 personas y &uacute;nicamente 6 casos, el 1.5% fueron resueltos de forma positiva, es decir, solo 2 de cada 100 personas recibe un s&iacute;, mientras que la mayor parte sigue a la espera de una respuesta o abandona el proceso ante la desesperaci&oacute;n.</p>
          <p>Quienes pasan por Guatemala y buscan quedarse en el pa&iacute;s tienen que realizar una solicitud en la Comisi&oacute;n Nacional para Refugiados (Conare). Deben iniciar el tr&aacute;mite para evitar ser expulsadas mientras reciben los documentos para residir en el pa&iacute;s. Lo primero que deben hacer es obtener un documento v&aacute;lido de identificaci&oacute;n, lo que les dar&iacute;a la posibilidad de hacer valer su derecho a salud, educaci&oacute;n y un trabajo. Pero actualmente el Registro Nacional de Personas (Renap) les entrega una hoja de permiso de permanencia con sus datos generales, que tiene vigencia un mes y que no les asigna un n&uacute;mero de identidad, lo cual impide que puedan acceder a plataformas del Estado, a trabajos en el sector privado e imposibilita que puedan vacunarse contra el covid-19.</p>
          <div>
              <figure>
                  <img width="980" height="650" src="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-013-980x650.jpg" alt="" srcset="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-013-980x650.jpg 980w, https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-013-300x200.jpg 300w" sizes="(max-width: 980px) 100vw, 980px" />
                  <figcaption><sub>De 2002 a enero de 2022, 3 mil 3239 personas han solicitado refugio en Guatemala y solo el 17% lo ha obtenido.</sub></figcaption>
              </figure>
          </div>
          <p>Lambda denunci&oacute; estas deficiencias en la Procuradur&iacute;a de los Derechos Humanos (PDH) por violaci&oacute;n al derecho a la identidad. La organizaci&oacute;n ha conocido casos en los que la Polic&iacute;a Nacional Civil (PNC), a pesar de que se trata de un documento oficial extendido por el Renap, no reconoce o valida esos documentos y env&iacute;an a las personas a un albergue para iniciar con el proceso de expulsi&oacute;n.</p>
          <p>La ley establece que el procedimiento para obtener refugio en Guatemala dura entre 3 y 6 meses, pero la realidad es otra. Antes de la pandemia el tr&aacute;mite demoraba un a&ntilde;o en promedio y ahora la respuesta puede llegar hasta dos a&ntilde;os despu&eacute;s, seg&uacute;n estimaciones de Lambda, que ha acompa&ntilde;ado estos procesos para personas LGBTIQ+. Mientras la resoluci&oacute;n llega, las personas deben acudir mensualmente al Instituto Guatemalteco de Migraci&oacute;n.&nbsp;</p>
          <p>La Convenci&oacute;n sobre el Estatuto de los Refugiados considera como refugiada a toda persona que debido a temores fundados a ser perseguida por motivos de raza, religi&oacute;n, nacionalidad, grupo social u opiniones pol&iacute;ticas, salga de su pa&iacute;s y no quiera o pueda regresar a &eacute;l. Carlos Vald&eacute;s, director ejecutivo de Lambda, explica que la poblaci&oacute;n LGTBIQ+ en Centroam&eacute;rica tienen ese temor fundado y huyen por conservar su vida.</p>
          <p>&ldquo;La agenda de los gobiernos en la regi&oacute;n es totalmente conservadora y eso violenta los derechos humanos de la comunidad LGTBI, especialmente de la poblaci&oacute;n trans y los pone en riesgo de sufrir violencia y violencia sexual&rdquo;, afirma Vald&eacute;s, y agrega: &ldquo;Guatemala no es un para&iacute;so, pero a&uacute;n as&iacute; las y los migrantes tienen la esperanza de que aqu&iacute; puedan vivir mejor&rdquo;.&nbsp;</p>
          <p><strong>Atrapadas en su propio pa&iacute;s</strong></p>
          <p>Kimberly tiene 33 a&ntilde;os, es originaria de Guatemala y es trabajadora sexual. El &uacute;ltimo a&ntilde;o ha pasado encerrada en un albergue privado. Est&aacute; all&iacute; porque sufri&oacute; un intento de asesinato a mano armada de parte de un grupo de extorsionistas que le exig&iacute;a una cuota semanal de 32 d&oacute;lares (250 quetzales). &ldquo;Yo fui baleada saliendo de mi trabajo. Los agresores me segu&iacute;an buscando, me intimidaban y yo no me dejaba, me negaba a darles mi dinero y por eso me rodeaban amenaz&aacute;ndome de muerte&rdquo;, relata.</p>
          <div>
              <figure>
                  <img width="980" height="650" src="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-005-980x650.jpg" alt="" srcset="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-005-980x650.jpg 980w, https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-005-300x200.jpg 300w" sizes="(max-width: 980px) 100vw, 980px" />
                  <figcaption><sup>Kimberly espera una respuesta para ser considerada refugiada en Estados Unidos. En Guatemala su vida corre peligro.</sup></figcaption>
              </figure>
          </div>
          <p>Ante las constantes agresiones acudi&oacute; al Ministerio P&uacute;blico (fiscal&iacute;a) a denunciar, pero nunca tuvo una respuesta. Notific&oacute; a la Polic&iacute;a Nacional Civil que era perseguida, pero no recibi&oacute; apoyo. Sin embargo, los agresores se enteraron de su denuncia y regresaron a acosarla. Una noche fue emboscada por una motocicleta desde la que un hombre joven le dispar&oacute;, seg&uacute;n su relato.</p>
          <p>&ldquo;As&iacute; pas&oacute; el tiempo, me segu&iacute;an buscando porque yo no ten&iacute;a dinero y decid&iacute; hacer todo lo posible por salvar mi vida. Una amiga hondure&ntilde;a me inform&oacute; de este albergue y me vine para ac&aacute;&rdquo;, cuenta.&nbsp;</p>
          <p>Desde entonces Kimberly est&aacute; atrapada en un albergue en su propio pa&iacute;s. Se esconder&aacute; all&iacute; mientras espera que el gobierno de Estados Unidos responda su solicitud de asilo.&nbsp;</p>
          <p>&ldquo;Mi elecci&oacute;n es seguir para arriba, seguir migrando hasta llegar a un lugar donde no haya discriminaci&oacute;n, donde pueda caminar por una calle y no me griten, quiero un lugar seguro para m&iacute;, donde pueda sentirme libre&rdquo;, comenta Madelyn.</p>
          <div>
              <figure>
                <img width="980" height="650" src="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-014-980x650.jpg" alt="" srcset="https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-014-980x650.jpg 980w, https://www.agenciaocote.com/wp-content/uploads/2022/03/26NOV2021-MUJERES-TRANS-SOLICITAN-ASILO-014-300x200.jpg 300w" sizes="(max-width: 980px) 100vw, 980px" />
                  <figcaption><sup>Seg&uacute;n estad&iacute;sticas de Guatemala, solo 2 de cada 10 personas LGBTIQ es aceptada como refugiada.</sup></figcaption>
              </figure>
          </div>
          <p>La guatemalteca vive en un albergue donde ha conocido a mujeres con historias similares a la suya. Una de ellas es Karla, una mujer guatemalteca trans de 35 a&ntilde;os, del departamento de Zacapa, quien lleva un a&ntilde;o encerrada en un albergue a la espera que de Estados Unidos acepte su petici&oacute;n de asilo.</p>
          <p>&ldquo;Cuando ten&iacute;a 10 a&ntilde;os y mis padres se enteraron de mi g&eacute;nero, me echaron de la casa. Desde ese tiempo he vivido sola y he pasado por muchas cosas. Gracias a Dios estoy recibiendo apoyo psicol&oacute;gico y ahora trabajo para ir un pa&iacute;s donde pueda ser libre&rdquo;, relata.</p>
          <p>Mientras Karla espera la respuesta a su petici&oacute;n de asilo en Estados Unidos, trabaja haciendo limpieza y dando mantenimiento en el albergue en el que vive. No puede salir a la calle porque teme ser reconocida y violentada.</p>
          <hr />
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
          <ArticleComponent lang={'es'} title={title} featuredImage={featuredImage} body={BodyComponent} autor={autor} medio={medio} fotografia={fotografia} />
          <Header lang={'es'}/>
          <Footer/>
        </main>
      </div>
  );
}

