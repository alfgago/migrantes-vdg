import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleComponent from '@/components/ArticleComponent';

export default function Nicaragua(props) {

  const title = 'Estados Unidos es el nuevo destino urgente de los nicas que huyen de la represión de Ortega';
  const description = 'Para entender el éxodo hondureño hay que revisar la historia de la última década de este país: un golpe de Estado, un país saqueado y pobre, y un narcoestado.';
  const featuredImage = '/banner-nicaragua.jpg'
  const autor = "Texto y fotos: Divergentes";
  const fotografia = false;
  const medio = '<a target="_blank" href="https://twitter.com/DivergentesCA">@DivergentesCA</a>';

  const BodyComponent = (
    <div>
      <p className='excerpt'>Empujados por la violencia estatal y la falta de oportunidades bajo la dictadura de Daniel Ortega, miles de nicaragüenses han decidido arriesgar su vida y migrar hacia el norte. El destino histórico había sido Costa Rica, pero el rumbo cambió. Cada vez más nicas forman parte de las caravanas de centroamericanos que año con año desfilan con sus sueños para dejar una región que los margina. La cantidad de nicaragüenses detenidos en la frontera sur de EE.UU. ha alcanzado cifras sin precedentes. “Nicaragua se va a vaciar como Venezuela”, advierten estos nuevos migrantes</p>
      <p>Aflicci&oacute;n, angustia, osad&iacute;a, miedo. Todo ese c&oacute;ctel de sentimientos marc&oacute; a Ram&oacute;n Bland&oacute;n cuando cruz&oacute; la frontera entre M&eacute;xico y Estados Unidos en mayo de 2021. Aunque ahora que lo piensa bien, dice, tambi&eacute;n hubo bastante estupidez. No por haber cruzado, sino por hacerlo con un grupo de amigos sin la gu&iacute;a de un &ldquo;coyote&rdquo;, traficante de personas, en tierras donde &ldquo;los due&ntilde;os son los narcos&rdquo;, dice Bland&oacute;n, un nicarag&uuml;ense de 37 a&ntilde;os de edad. &ldquo;No s&eacute; qu&eacute; hubiera pasado con nosotros, si por buscar el sue&ntilde;o (estadounidense), nos hubi&eacute;ramos topado con los &lsquo;due&ntilde;os&rsquo; del camino&rdquo;, agrega.&nbsp;</p>
      <p>Bland&oacute;n y su grupo trazaron un camino para evitar las huellas que los migrantes dejan con sus pasos. No fue nada f&aacute;cil. De hecho, que &eacute;l y sus amigos hayan sobrevivido &eacute;l solo lo explica por &ldquo;purita suerte o bendici&oacute;n de Dios&rdquo;. Para dar una idea, recorri&oacute; toda la ruta con su cuerpo lleno de espinas, soportando bajas temperaturas, en monta&ntilde;as &aacute;ridas donde pernoctaba sobre ramas secas, seg&uacute;n varias fotograf&iacute;as que muestra de la traves&iacute;a, en la que aparece con el rostro compungido, mientras intenta mitigar el fr&iacute;o con una camisa en forma de capucha. Eran situaciones que, por supuesto, se imaginaba que iba a vivir, pero eso no lo hace menos terrible cuando se experimenta en carne propia. &ldquo;Uno solo le hace ganas por la familia&rdquo;, agrega. &ldquo;Era en lo &uacute;nico en que pensaba&rdquo;.&nbsp;</p>
      <p>Ram&oacute;n Bland&oacute;n pensaba en su hija que dej&oacute; en Nicaragua, en su esposa, y en que ten&iacute;a que cruzar hacia Estados Unidos &ldquo;para sacarlas adelante&rdquo;. Pero tambi&eacute;n en que no pod&iacute;a regresar a su pa&iacute;s, porque era perseguido por paramilitares del Frente Sandinista y la Polic&iacute;a Nacional, despu&eacute;s de que se integr&oacute; a las protestas en abril de 2018, cuando estall&oacute; la crisis pol&iacute;tica.&nbsp;</p>
      <p>Y no solo eso. Bland&oacute;n hab&iacute;a quedado desempleado. La pandemia termin&oacute; por quebrar la empresa de energ&iacute;a el&eacute;ctrica en la que trabajaba como supervisor. Entonces, cuando supo, a inicios de 2021, que las fronteras hab&iacute;an vuelto a la normalidad, emprendi&oacute; el viaje hacia Estados Unidos. Lo hizo solo, y, al llegar a M&eacute;xico, pens&oacute; en quedarse para trabajar y pedir asilo. Ah&iacute; permaneci&oacute; unos meses, hasta que el tr&aacute;mite migratorio le fue negado. Al sentirse desprotegido legalmente y escuchar que las pol&iacute;ticas migratorias del nuevo presidente de Estados Unidos, Joe Biden, &ldquo;se hab&iacute;an flexibilizado&rdquo; con los ciudadanos de Cuba, Venezuela y Nicaragua, los pa&iacute;ses con dictaduras, fue que Bland&oacute;n decidi&oacute; cruzar la frontera en mayo de 2021. Antes de irse, llam&oacute; a su esposa y le dijo que lo iba a intentar, que no le contara a nadie m&aacute;s. &ldquo;Si puedo, me comunico, y si no puedo, no lo har&eacute;&hellip; Te dar&aacute;s cuenta que llegu&eacute;, si te entra una llamada&rdquo;, le dijo Bland&oacute;n en una comunicaci&oacute;n corta a su esposa.&nbsp;</p>
      <figure>
          <img width="2048" height="1536" src="https://www.divergentes.com/wp-content/uploads/2022/03/Ramo%CC%81n-Bland.jpg" alt="" srcset="https://www.divergentes.com/wp-content/uploads/2022/03/Ramón-Bland.jpg 2048w, https://www.divergentes.com/wp-content/uploads/2022/03/Ramón-Bland-300x225.jpg 300w, https://www.divergentes.com/wp-content/uploads/2022/03/Ramón-Bland-1024x768.jpg 1024w, https://www.divergentes.com/wp-content/uploads/2022/03/Ramón-Bland-768x576.jpg 768w, https://www.divergentes.com/wp-content/uploads/2022/03/Ramón-Bland-1536x1152.jpg 1536w, https://www.divergentes.com/wp-content/uploads/2022/03/Ramón-Bland-500x375.jpg 500w, https://www.divergentes.com/wp-content/uploads/2022/03/Ramón-Bland-800x600.jpg 800w, https://www.divergentes.com/wp-content/uploads/2022/03/Ramón-Bland-1280x960.jpg 1280w, https://www.divergentes.com/wp-content/uploads/2022/03/Ramón-Bland-1920x1440.jpg 1920w, https://www.divergentes.com/wp-content/uploads/2022/03/Ramón-Bland-337x253.jpg 337w" sizes="(max-width: 2048px) 100vw, 2048px" />
          <figcaption>En los &uacute;ltimos meses Ram&oacute;n Bland&oacute;n ha trabajado de forma espor&aacute;dica como alba&ntilde;il e ingeniero. Foto: Cortes&iacute;a.</figcaption>
      </figure>
      <p>Estados Unidos, el destino de Bland&oacute;n, es el que est&aacute; teniendo mayor auge entre los nicarag&uuml;enses. Entre enero y diciembre de 2021 la Patrulla Fronteriza de Estados Unidos registr&oacute; que 87,530 nicarag&uuml;enses trataron de ingresar por la frontera sur sin documentos.&nbsp;</p>
      <p>Seg&uacute;n Manuel Orozco, director del programa de Migraci&oacute;n, Remesas y Desarrollo del centro de an&aacute;lisis e intercambio pol&iacute;tico Di&aacute;logo Interamericano, este fen&oacute;meno solo puede ser comparado con la crisis de los a&ntilde;os 80 causada por el abuso de poder de Ortega durante el primer mandato sandinista. En ese tiempo salieron m&aacute;s de 120 mil personas hacia Estados Unidos, triplicando la poblaci&oacute;n migrante.</p>
      <p>En julio de 2021, 13 mil 391 nicas fueron registrados en la frontera, casi el doble que los de junio (7 mil 441) y m&aacute;s del triple que en mayo (4 mil 451). En 2017, un a&ntilde;o antes de la crisis pol&iacute;tica de 2018, se registraban apenas mil aprehensiones de nicarag&uuml;enses, de acuerdo a la Oficina de Aduanas y Protecci&oacute;n Fronteriza de los Estados Unidos. El aumento coincide con la crisis que vive Nicaragua desde abril de 2018 y que se agrav&oacute; en 2021 con los arrestos a<a href="https://www.divergentes.com/presos-por-retar-a-la-dictadura-ortega-murillo-en-las-urnas/">&nbsp;dirigentes opositores en el marco del contexto electoral</a>.&nbsp;</p>
      <p>El Di&aacute;logo Interamericano calcula que unos 95 mil nicarag&uuml;enses huyeron del pa&iacute;s en 2021, ante el cierre de las libertades p&uacute;blicas, el desempleo y la inseguridad ciudadana. De estos, seg&uacute;n esos c&aacute;lculos, 60 mil migraron hacia Estados Unidos y 35 mil hacia Costa Rica, el pa&iacute;s que por a&ntilde;os fue el principal destino de migraci&oacute;n de los nicarag&uuml;enses.&nbsp;</p>
      <p>&ldquo;Una cifra sin precedentes que revela la gravedad de la situaci&oacute;n en Nicaragua&rdquo;, dice Wendy Flores, defensora y abogada del organismo de derechos humanos Nicaragua Nunca M&aacute;s. &ldquo;El cambio de destino del flujo migratorio es que ahora se dirige hacia el norte, ruta marcada por la violencia y la inseguridad&rdquo;, agrega Flores.&nbsp;</p>
      <p>Bland&oacute;n explica que eligi&oacute; Estados Unidos por &ldquo;la mala situaci&oacute;n econ&oacute;mica que ten&iacute;a&rdquo;, que no le permit&iacute;a hacer un viaje m&aacute;s largo y costoso hasta Espa&ntilde;a. En Costa Rica no ten&iacute;a familiares que lo apoyaran, y tampoco en Panam&aacute;. &ldquo;Solo sab&iacute;a que no pod&iacute;a seguir en el pa&iacute;s (Nicaragua)&rdquo;, dice Bland&oacute;n.&nbsp;</p>
      <div className='iframe-container'>
        <iframe sandbox="allow-scripts" src="https://flo.uri.sh/visualisation/9000203/embed#?secret=E6ULUzlcjl" frameborder="0" scrolling="no" height="575" width="700"></iframe>
      </div>
      <h2><strong>Migraci&oacute;n hist&oacute;rica hacia Costa Rica</strong></h2>
      <p>El exilio de nicarag&uuml;enses comenz&oacute; hace unos 45 a&ntilde;os, desde los primeros enfrentamientos entre la dictadura de Anastasio Somoza Debayle y la guerrilla del Frente Sandinista. Sin embargo, el destino hist&oacute;rico ha sido Costa Rica, seg&uacute;n un art&iacute;culo de la revista&nbsp;<em>Env&iacute;o</em>, escrito por Alberto Cort&eacute;s Ramos, profesor asociado de la Escuela de Ciencia Pol&iacute;tica de la Universidad de Costa Rica. Desde antes del derrocamiento de la dinast&iacute;a somocista, en los a&ntilde;os 70, se calcula que 280 mil personas salieron de Nicaragua, y al menos 80 mil hacia Costa Rica. A&ntilde;os despu&eacute;s, durante el proyecto revolucionario que se convirti&oacute; en dictadura en los a&ntilde;os 80 y que llev&oacute; a un enfrentamiento armado entre el Ej&eacute;rcito Sandinista y la Contrarrevoluci&oacute;n, unos 123 mil nicarag&uuml;enses se refugiaron &mdash;documentados e indocumentados&mdash; en Costa Rica.</p>
      <p>Por esa raz&oacute;n es que el reciente aumento de la migraci&oacute;n hacia Estados Unidos est&aacute; llamando la atenci&oacute;n medi&aacute;tica. En las caravanas centroamericanas, cada vez se miran m&aacute;s nicarag&uuml;enses. En julio del a&ntilde;o pasado, un mes despu&eacute;s que se cerr&oacute; la salida a la crisis sociopol&iacute;tica con la liquidaci&oacute;n de las elecciones por parte del r&eacute;gimen de Daniel Ortega y Rosario Murillo, Nicaragua super&oacute; a El Salvador como el tercer pa&iacute;s centroamericano con mayor registro de indocumentados, por detr&aacute;s de Honduras y Guatemala. El &eacute;xodo actual de nicarag&uuml;enses es incluso mayor que el que provoc&oacute;&nbsp;<a href="https://www.divergentes.com/justicia-y-memoria-en-nicaragua/">la brutal represi&oacute;n de las movilizaciones masivas contra el gobierno en 2018</a>, que causaron m&aacute;s de 300 muertos, cientos de presos pol&iacute;ticos, desaparecidos y torturados.</p>
      <p>Seg&uacute;n datos del Transactional Records Access Clearinghouse de la Universidad de Syracuse, en el a&ntilde;o fiscal 2020 el 36% de las solicitudes de asilo de ciudadanos nicarag&uuml;enses fueron aprobadas, una cifra que est&aacute; por encima de la media del resto de nacionalidades. Hasta octubre de 2021, m&aacute;s de 34.000 nicarag&uuml;enses esperaban ser escuchados por los jueces.</p>
      <figure>
          <img width="900" height="600" src="https://www.divergentes.com/wp-content/uploads/2022/03/8013972127001w.jpg" alt="" srcset="https://www.divergentes.com/wp-content/uploads/2022/03/8013972127001w.jpg 900w, https://www.divergentes.com/wp-content/uploads/2022/03/8013972127001w-300x200.jpg 300w, https://www.divergentes.com/wp-content/uploads/2022/03/8013972127001w-768x512.jpg 768w, https://www.divergentes.com/wp-content/uploads/2022/03/8013972127001w-500x333.jpg 500w, https://www.divergentes.com/wp-content/uploads/2022/03/8013972127001w-800x533.jpg 800w, https://www.divergentes.com/wp-content/uploads/2022/03/8013972127001w-380x253.jpg 380w" sizes="(max-width: 900px) 100vw, 900px" />
          <figcaption>Migrantes centroamericanos, entre ellos nicas, atraviesan M&eacute;xico para llegar a Estados Unidos. EFE.</figcaption>
      </figure>
      <p>En su campa&ntilde;a electoral, el presidente de Estados Unidos, Joe Biden, prometi&oacute; una revisi&oacute;n en profundidad de las pol&iacute;ticas migratorias del expresidente Donald Trump, que limitaron el derecho de asilo, cortaron el financiamiento a pa&iacute;ses extranjeros y endurecieron los requisitos para obtener la residencia y la nacionalidad, lo que hizo que se ralentizara un poco la llegada de la migraci&oacute;n al pa&iacute;s.&nbsp;</p>
      <p>En sus primeros d&iacute;as de mandato, Biden suspendi&oacute; la construcci&oacute;n del muro fronterizo con M&eacute;xico, orden&oacute; crear un grupo de trabajo para reunificar a los menores que fueron separados de sus padres tras cruzar la frontera y dio instrucciones para revisar el programa Protocolos de Protecci&oacute;n a Migrantes, tambi&eacute;n conocido como &laquo;Qu&eacute;date en M&eacute;xico&raquo;, por el que m&aacute;s de 60 mil solicitantes de asilo fueron devueltos a ese pa&iacute;s para esperar la resoluci&oacute;n de su caso. Sin embargo, un an&aacute;lisis del Centro Estrat&eacute;gico Latinoamericano de Geopol&iacute;tica (Celag) de agosto de 2021 considera que los cambios de Biden &ldquo;son pocos y expresan m&aacute;s continuidades que rupturas&rdquo;. Seg&uacute;n el estudio, Biden &ldquo;no est&aacute; atacando de fondo y de ra&iacute;z la migraci&oacute;n&rdquo;.</p>
      <p>A diferencia de los migrantes centroamericanos del Tri&aacute;ngulo Norte (Guatemala, Honduras y El Salvador) que principalmente huyen por la violencia de las pandillas, en Nicaragua escapan de la violencia estatal. Sin embargo, Estados Unidos comenz&oacute; a deportar un n&uacute;mero r&eacute;cord de nicarag&uuml;enses el a&ntilde;o pasado,&nbsp;<a href="https://www.reuters.com/world/americas/us-heads-record-nicaragua-deportations-despite-ortega-criticism-2021-11-25/">seg&uacute;n datos revisados por la agencia Reuters</a>.</p>
      <p>A mediados de noviembre, el medio&nbsp;<em>Just The News</em> inform&oacute; de que los nicarag&uuml;enses que ingresan a Estados Unidos con estatus migratorio irregular no ser&iacute;an deportados. Sin embargo, pocos d&iacute;as despu&eacute;s una vocera de la embajada de EE.UU. en Nicaragua asegur&oacute; que la administraci&oacute;n Biden &ldquo;ha dejado en claro que nuestras fronteras no est&aacute;n abiertas y que las personas y las familias est&aacute;n sujetas a restricciones fronterizas, incluyendo la expulsi&oacute;n y deportaci&oacute;n&rdquo;. La embajada de Estados Unidos en Nicaragua tiene varios meses de llevar a cabo una campa&ntilde;a contra la migraci&oacute;n irregular hacia este pa&iacute;s norteamericano, con un llamado a no hacer &ldquo;Un Viaje en Vano&rdquo;.&nbsp;</p>
      <h2><strong>Un suplicio de mes y medio</strong></h2>
      <figure>
          <img width="1599" height="899" src="https://www.divergentes.com/wp-content/uploads/2022/03/Jacksell-trabajando.jpg" alt="" srcset="https://www.divergentes.com/wp-content/uploads/2022/03/Jacksell-trabajando.jpg 1599w, https://www.divergentes.com/wp-content/uploads/2022/03/Jacksell-trabajando-300x169.jpg 300w, https://www.divergentes.com/wp-content/uploads/2022/03/Jacksell-trabajando-1024x576.jpg 1024w, https://www.divergentes.com/wp-content/uploads/2022/03/Jacksell-trabajando-768x432.jpg 768w, https://www.divergentes.com/wp-content/uploads/2022/03/Jacksell-trabajando-1536x864.jpg 1536w, https://www.divergentes.com/wp-content/uploads/2022/03/Jacksell-trabajando-500x281.jpg 500w, https://www.divergentes.com/wp-content/uploads/2022/03/Jacksell-trabajando-800x450.jpg 800w, https://www.divergentes.com/wp-content/uploads/2022/03/Jacksell-trabajando-1280x720.jpg 1280w, https://www.divergentes.com/wp-content/uploads/2022/03/Jacksell-trabajando-380x214.jpg 380w" sizes="(max-width: 1599px) 100vw, 1599px" />
          <figcaption>Despu&eacute;s de su trabajo, Jacksell Herrera se dedica a actualizar la p&aacute;gina web que cre&oacute; para compartir noticias pol&iacute;ticas de Nicaragua. Cortes&iacute;a.</figcaption>
      </figure>
      <p>Jacksell Herrera, de 22 a&ntilde;os, huy&oacute; de Nicaragua porque era triplemente perseguido. Primero porque trabajaba en el &aacute;rea de Comunicaci&oacute;n de la alcald&iacute;a de Pantasma, una de las pocas municipalidades opositoras al r&eacute;gimen. En segundo lugar porque era defensor de derechos humanos para la Comisi&oacute;n Permanente de Derechos Humanos (Cpdh). Y en tercero, porque cre&oacute; una p&aacute;gina de web&nbsp;<a href="http://www.nicaraguanewsnn.com/">para publicar noticias pol&iacute;ticas,</a> lo que es perseguido por el r&eacute;gimen de Ortega y Murillo.&nbsp;</p>
      <p>En diciembre del 2020, Herrera fue requisado en Managua, despu&eacute;s de que sal&iacute;a de hacer una entrevista a&nbsp;<a href="https://www.divergentes.com/medardo-mairena-el-primer-lider-campesino-que-se-postulo-como-presidente/">Medardo Mairena, uno de los aspirantes presidenciales detenidos</a>. Un mes despu&eacute;s, la Polic&iacute;a lo detuvo y le puso grilletes con fuerza cuando filmaba una agresi&oacute;n policial contra opositores. Ese d&iacute;a, el teniente de Pantasma, Denis Jarqu&iacute;n, le dijo &ldquo;te voy a quitar esa sonrisa de la cara&rdquo;. Herrera sinti&oacute; que era una amenaza de muerte. Eso,&nbsp;<a href="https://www.laprensani.com/2020/08/30/suplemento/la-prensa-domingo/2714802-quienes-son-los-periodistas-judicializados-conozca-sus-historias">adem&aacute;s de que la Fiscal&iacute;a le abri&oacute; un proceso judicial</a>, lo amenazaban los polic&iacute;as y paramilitares sandinistas todos los d&iacute;as por Messenger con asesinarlo. Adem&aacute;s, una de sus fuentes le dijo: &ldquo;ya tienen tu expediente hecho para echarte preso&rdquo;. Todo eso hizo que huyera del pa&iacute;s el 2 de agosto de 2021.</p>
      <p>Herrera puso la renuncia en su trabajo en la alcald&iacute;a dos semanas antes del viaje. Complet&oacute; 5 mil d&oacute;lares para pagar al coyote que lo llev&oacute; hasta la frontera con Estados Unidos. Uno de estos &ldquo;gu&iacute;as&rdquo; para la ruta hacia Norteam&eacute;rica&nbsp;<a href="https://www.infobae.com/america/america-latina/2021/11/17/exodo-masivo-de-nicaraguenses-hacia-estados-unidos-se-dispara-por-la-crisis-politica-y-economica/">le cont&oacute; a Infobae que se cobra cinco mil d&oacute;lares&nbsp;</a>hasta la frontera de M&eacute;xico con Estados Unidos, y 12 mil d&oacute;lares puestos en la ciudad de Houston, Texas. Para completar el dinero, Herrera tuvo que vender algunas pertenencias, juntar el pago de su liquidaci&oacute;n y hacer un pr&eacute;stamo.&nbsp;</p>
      <p>Pasaron 21 d&iacute;as desde que sali&oacute; de su casa, en Pantasma, hasta que se entreg&oacute; en la frontera con Estados Unidos. El 95 por ciento de los d&iacute;as, dice Herrera, fueron de sufrimiento: hambre, sed, desvelo. Dormir en veh&iacute;culos en marcha, a veces atestados de personas que se acomodaban acostadas unas sobre otras. En uno de esos viajes vio a un beb&eacute; de siete meses que agonizaba en los brazos de su mam&aacute; por deshidrataci&oacute;n. &ldquo;Ellos abandonaron el viaje porque tuvieron que ir de emergencia al hospital&rdquo;, dice. &nbsp;La mayor&iacute;a del tiempo el grupo de migrantes era trasladado a bodegas cerradas, en las que aguantaba calor o fr&iacute;o e intentaba dormir en el piso.</p>
      <p>Pese a todo el sufrimiento, Herrera dice que corri&oacute; con suerte. Y no est&aacute; lejos de tener raz&oacute;n. A inicios de noviembre 2021 s<a href="https://www.laprensa.com.ni/2021/11/12/nacionales/2909655-cartel-mexicano-libera-a-siete-nicaraguenses-que-mantuvo-de-rehenes">e conocieron las historias de Gerleni Jim&eacute;nez y Mar&iacute;a Teresa Delgadillo</a>, ambas de Matagalpa, quienes fueron secuestradas en la ruta hacia Estados Unidos por un c&aacute;rtel mexicano que pidi&oacute; 10 mil d&oacute;lares para liberarlas. Las familias hicieron colectas de dinero y finalmente las j&oacute;venes fueron liberadas el 12 de noviembre.<strong>&nbsp;DIVERGENTES</strong> contact&oacute; a sus familiares, pero no quisieron hablar sobre c&oacute;mo ocurri&oacute; la liberaci&oacute;n.&nbsp;</p>
      <figure className='two'>
          <figure><img width="225" height="300" src="https://www.divergentes.com/wp-content/uploads/2022/03/Foto-Ramon-2-225x300.jpeg" alt="" srcset="https://www.divergentes.com/wp-content/uploads/2022/03/Foto-Ramon-2-225x300.jpeg 225w, https://www.divergentes.com/wp-content/uploads/2022/03/Foto-Ramon-2-768x1024.jpeg 768w, https://www.divergentes.com/wp-content/uploads/2022/03/Foto-Ramon-2-500x667.jpeg 500w, https://www.divergentes.com/wp-content/uploads/2022/03/Foto-Ramon-2-800x1067.jpeg 800w, https://www.divergentes.com/wp-content/uploads/2022/03/Foto-Ramon-2-190x253.jpeg 190w, https://www.divergentes.com/wp-content/uploads/2022/03/Foto-Ramon-2.jpeg 960w" sizes="(max-width: 225px) 100vw, 225px" /></figure>
          <figure><img width="225" height="300" src="https://www.divergentes.com/wp-content/uploads/2022/03/Foto-brazalete-225x300.jpeg" alt="" srcset="https://www.divergentes.com/wp-content/uploads/2022/03/Foto-brazalete-225x300.jpeg 225w, https://www.divergentes.com/wp-content/uploads/2022/03/Foto-brazalete-768x1024.jpeg 768w, https://www.divergentes.com/wp-content/uploads/2022/03/Foto-brazalete-1152x1536.jpeg 1152w, https://www.divergentes.com/wp-content/uploads/2022/03/Foto-brazalete-500x667.jpeg 500w, https://www.divergentes.com/wp-content/uploads/2022/03/Foto-brazalete-800x1067.jpeg 800w, https://www.divergentes.com/wp-content/uploads/2022/03/Foto-brazalete-190x253.jpeg 190w, https://www.divergentes.com/wp-content/uploads/2022/03/Foto-brazalete.jpeg 1200w" sizes="(max-width: 225px) 100vw, 225px" /></figure>
          <figcaption>Antes de cruzar el r&iacute;o Bravo, los coyotes les colocaron este brazalete a Jacksell Herrera y otros migrantes para identificarlos como los que se iban a entregar a la Patrulla Fronteriza. Los que no ten&iacute;an brazaletes iban de &laquo;rodeo&raquo;, es decir, evitando a las autoridades de la frontera.</figcaption>
      </figure>
      <p>El pasado 15 de enero sali&oacute; de Honduras la primera caravana de migrantes que era encabezada principalmente por nicarag&uuml;enses, seg&uacute;n report&oacute; el&nbsp;<a href="https://contracorriente.red/2022/01/15/nicaragua-se-va-a-vaciar-como-venezuela-advierten-migrantes-que-van-en-caravana-huyendo-de-centroamerica/">medio Contracorriente.</a> &ldquo;La mayor&iacute;a de este grupo son ciudadanos nicarag&uuml;enses que huyeron del r&eacute;gimen de Daniel Ortega&rdquo;, report&oacute; ese medio. &ldquo;Nicaragua se va a vaciar como Venezuela&rdquo;, dijo uno de los nicas que huy&oacute; en esa caravana. De acuerdo con la informaci&oacute;n en medios de comunicaci&oacute;n y los gobiernos de Honduras y Guatemala, la caravana era integrada por m&aacute;s de mil personas y fue detenida al d&iacute;a siguiente por tropas del Ej&eacute;rcito y de la Polic&iacute;a Nacional de Guatemala (PNC). La agencia Associated Press report&oacute; que los agentes y soldados &ldquo;rociaron gas lacrim&oacute;geno y utilizaron sus garrotes y escudos&rdquo; sobre el grupo de migrantes que intent&oacute; romper un cerco en la carretera que une a ambos pa&iacute;ses, Honduras y Guatemala, en el sector de Vado Hondo.&nbsp;</p>
      <p>En la caravana iban varios grupos de nicarag&uuml;enses, conformados por hasta 16 personas, en su mayor&iacute;a familiares, quienes afirmaron que huyeron de Nicaragua debido a la crisis desatada por el r&eacute;gimen de Ortega y la violencia estatal. Este ser&iacute;a el primer grupo masivo de extranjeros que iba a desafiar el Protocolo de Protecci&oacute;n del Migrante (MPP) de Joe Biden, eliminado en febrero del a&ntilde;o pasado, pero restituido en diciembre de 2021.</p>
      <p>La regi&oacute;n vive un flujo r&eacute;cord hacia Estados Unidos, cuya Oficina de Aduanas y Protecci&oacute;n Fronteriza (CBP) detect&oacute; a m&aacute;s de 1,7 millones de indocumentados en la frontera con M&eacute;xico hasta finales de septiembre de 2021. M&eacute;xico intercept&oacute; a m&aacute;s de 252 mil migrantes indocumentados entre enero y noviembre del a&ntilde;o pasado, y deport&oacute; a m&aacute;s de 100 mil en el mismo periodo, de acuerdo con la Unidad de Pol&iacute;tica Migratoria de la Secretar&iacute;a de Gobernaci&oacute;n del pa&iacute;s.&nbsp;</p>
      <h2><strong>&ldquo;Aqu&iacute; tengo libertad y seguridad&rdquo;</strong></h2>
      <figure>
        <img src="https://www.divergentes.com/wp-content/uploads/2021/11/8010624268001-scaled.jpg" alt="" srcset="https://www.divergentes.com/wp-content/uploads/2021/11/8010624268001-scaled.jpg 2560w, https://www.divergentes.com/wp-content/uploads/2021/11/8010624268001-300x211.jpg 300w, https://www.divergentes.com/wp-content/uploads/2021/11/8010624268001-1024x721.jpg 1024w, https://www.divergentes.com/wp-content/uploads/2021/11/8010624268001-768x541.jpg 768w, https://www.divergentes.com/wp-content/uploads/2021/11/8010624268001-1536x1082.jpg 1536w, https://www.divergentes.com/wp-content/uploads/2021/11/8010624268001-2048x1443.jpg 2048w, https://www.divergentes.com/wp-content/uploads/2021/11/8010624268001-500x352.jpg 500w, https://www.divergentes.com/wp-content/uploads/2021/11/8010624268001-800x564.jpg 800w, https://www.divergentes.com/wp-content/uploads/2021/11/8010624268001-1280x902.jpg 1280w, https://www.divergentes.com/wp-content/uploads/2021/11/8010624268001-1920x1352.jpg 1920w, https://www.divergentes.com/wp-content/uploads/2021/11/8010624268001-359x253.jpg 359w" sizes="(max-width: 2560px) 100vw, 2560px" />
        <figcaption>La crisis sociopol&iacute;tica iniciada en abril de 2018 ha empeorada m&aacute;s, y la migraci&oacute;n de los m&aacute;s j&oacute;venes ha sido una de sus principales causas. EFE | Arrchivo.</figcaption>
      </figure>
      <p>Una vez que se entreg&oacute; a la guardia fronteriza, Jacksell Herrera, el exempleado municipal, fue enviado a distintos centros de detenci&oacute;n para migrantes en Texas. Ah&iacute; estuvo casi un mes recluido, hasta que gan&oacute; su caso en Migraci&oacute;n y fue liberado el 17 de septiembre de 2021. Como solo le hab&iacute;a avisado de su viaje a cinco personas, no pudo despedirse de toda su familia, entre ellos de su abuelo paterno, quien falleci&oacute; mientras &eacute;l iba en su traves&iacute;a hacia Estados Unidos. &ldquo;Fue muy doloroso enterarme de su muerte sin poder despedirme&rdquo;, cuenta.</p>
      <p>Herrera ahora vive en Indiana, donde trabaja reparando s&oacute;tanos. &ldquo;Decid&iacute; venir a Estados Unidos porque aqu&iacute; tengo mejores oportunidades&hellip;Aqu&iacute; s&iacute; tengo libertad y seguridad&rdquo;, dice. Siempre escribe noticias para su p&aacute;gina y colabora con la plataforma&nbsp;<em>Nicaragua Actual</em>. &ldquo;Sue&ntilde;o con tener mi propio medio de comunicaci&oacute;n&rdquo;, agrega.</p>
      <p>A cientos de kil&oacute;metros de distancia, en California, Ram&oacute;n Bland&oacute;n vive con sus t&iacute;os, pero no por mucho tiempo, porque espera trasladarse a otro lugar. &ldquo;Ya sab&eacute;s: la flor de largo huele, pero de cerca hiede&rdquo;, dice. Se rebusca la vida haciendo de todo un poco: construcci&oacute;n, carga y descarga de camiones o jardiner&iacute;a. &ldquo;Es duro estar aqu&iacute;, pero alguien se tiene que sacrificar para que la familia est&eacute; bien y en este caso me toc&oacute; a m&iacute;&rdquo;, agrega. &Eacute;l no est&aacute; arrepentido de haberse ido a Estados Unidos, porque &ldquo;no hay nada m&aacute;s valioso que la vida&rdquo; y en Nicaragua la ten&iacute;a &ldquo;arriesgada&rdquo;.&nbsp;</p>
    </div>
  )

  return (
      <div>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:image" content={featuredImage} />
          <meta property="og:locale" content="es_ES" />
          <meta property="og:type" content="article" />
        </Head>
        <main className="main-container">
          <ArticleComponent title={title} featuredImage={featuredImage} body={BodyComponent} autor={autor} medio={medio} fotografia={fotografia} />
          <Header/>
          <Footer/>
        </main>
      </div>
  );
}
