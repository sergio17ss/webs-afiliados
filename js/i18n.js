(function () {
  'use strict'

  const LANG_KEY = 'dp-lang'
  const DEFAULT = 'es'

  const dict = {
    es: {
      common: {
        navHome: 'Inicio',
        navDocs: 'Guías',
        navPrivacy: 'Política de privacidad',
        navAffiliate: 'Aviso de afiliados',
        disclosure:
          '⚠️ Este artículo contiene enlaces de afiliado. Si compras a través de ellos, recibimos una pequeña comisión sin coste adicional para ti. Esto nos ayuda a mantener las guías actualizadas. Todos los productos han sido seleccionados según sus ventas y valoraciones reales en Amazon España.',
        copyright:
          '© 2026 DuoStudio · Algunos enlaces son de afiliado. Si compras a través de ellos, recibimos una comisión sin coste adicional para ti.',
        prosTitle: 'Ventajas e inconvenientes',
        prosLabel: '✅ Pros',
        consLabel: '❌ Contras',
        langBtn: 'EN',
        comingSoon: 'Próximamente',
        comingSoonDesc: 'Nuevas categorías en camino',
        navBrand: 'DuoStudio',
      },
      index: {
        metaTitle: 'DuoStudio · Guías de Compra',
        metaDesc:
          'DuoStudio — guías de compra independientes. Encuentra el mejor producto para ti.',
        title: 'DuoStudio · Top Productos por Categoría',
        subtitle:
          'Selecciona una categoría para ver sus guías y comparativas',
        card1Title: 'Auriculares',
        card1Desc:
          'Top 5 mejores auriculares 2026 &middot; Comparativa',
        card2Title: 'Sillas Ergonómicas',
        card2Desc:
          'Top 5 mejores sillas oficina 2026 &middot; Comparativa',
      },
      auriculares: {
        metaTitle:
          'Top 5 Mejores Auriculares 2026 · Comparativa Completa',
        metaDesc:
          'Comparativa de los 5 auriculares más vendidos en Amazon España en 2026. Analizamos Soundcore Q20i, Sony WH-CH520, Nothing Ear (a), AirPods 4 y Xiaomi Redmi Buds 6 Play.',
        ogTitle:
          'Top 5 Mejores Auriculares 2026 · Guía Completa',
        category: '🎧 Auriculares',
        title:
          'Los 5 mejores auriculares para comprar en 2026',
        metaUpdated: '📅 Actualizado: julio 2026',
        metaAuthor: '✍️ Por: DuoStudio',
        introP1:
          '<strong>Elegir unos auriculares nuevos puede ser abrumador.</strong> Con cientos de modelos disponibles en Amazon, entre inalámbricos, con cable, de diadema, intraauriculares, con cancelación de ruido… es fácil perderse.',
        introP2:
          'Para ayudarte a decidir, hemos analizado los <strong>5 auriculares más vendidos en Amazon España</strong> basándonos en ventas reales, valoraciones de usuarios y relación calidad-precio. Esta guía se actualiza mensualmente para reflejar los precios y tendencias actuales.',
        quickTitle:
          'Resumen rápido: los 5 mejores auriculares de 2026',
        t1Th1: 'Modelo',
        t1Th2: 'Tipo',
        t1Th3: 'Precio',
        t1Th4: 'Valoración',
        t1Th5: 'Lo mejor',
        p1Name: '🥇 Soundcore Q20i',
        p1Type: 'Diadema',
        p1Price: '~35 €',
        p1Rating: '★★★★½',
        p1Best: 'Mejor relación calidad-precio',
        p1Title:
          '🥇 Soundcore Q20i — El mejor calidad-precio',
        p1CardTitle: 'Soundcore Q20i · Anker',
        p1CardRating:
          '★★★★½ 4.7/5 · 67.986 valoraciones',
        p1CardPrice: '~34,77 €',
        p1Desc1:
          'Los <strong>Soundcore Q20i</strong> de Anker son, sin discusión, los auriculares con mejor relación calidad-precio del mercado español. Con más de <strong>67.000 valoraciones</strong> y una nota media de 4.7/5, se han convertido en un fenómeno de ventas.',
        p1Desc2:
          'Ofrecen <strong>cancelación de ruido activa híbrida</strong>, algo que hasta hace poco solo veíamos en modelos de más de 100 €. Además, cuentan con certificación <strong>Hi-Res Audio</strong> y un modo de graves potenciados ideal para música urbana y electrónica.',
        p1Pros:
          '<li>Cancelación de ruido muy eficaz por su precio</li><li>Sonido equilibrado con certificación Hi-Res</li><li>40 horas de autonomía con ANC activado</li><li>Modo transparency para oír el entorno</li>',
        p1Cons:
          '<li>Materiales algo básicos (plástico)</li><li>Los graves pueden saturar en algunas canciones</li><li>No tiene conexión multipunto</li>',
        p1For:
          '<strong>¿Para quién es?</strong> Para quien busca la mejor cancelación de ruido sin gastar más de 50 €. Ideales para viajar, estudiar o trabajar.',
        p2Name: '🥈 Apple AirPods 4',
        p2Type: 'True Wireless',
        p2Price: '~129 €',
        p2Rating: '★★★★½',
        p2Best: 'Mejor para ecosistema Apple',
        p2Title:
          '🥈 Apple AirPods 4 — La mejor experiencia Apple',
        p2CardTitle: 'Apple AirPods 4',
        p2CardRating:
          '★★★★½ 4.7/5 · 13.695 valoraciones',
        p2CardPrice: '~129 €',
        p2Desc1:
          'Los <strong>AirPods 4</strong> son la opción por defecto para usuarios de iPhone, iPad o Mac. Integran el chip <strong>H2</strong> de Apple, que mejora la cancelación de ruido y la calidad de sonido respecto a la generación anterior.',
        p2Desc2:
          'El <strong>audio espacial personalizado</strong> con seguimiento dinámico de la cabeza ofrece una experiencia inmersiva que ningún otro auricular true wireless iguala en su ecosistema. Además, son resistentes al agua y al sudor (IP54).',
        p2Pros:
          '<li>Audio espacial con seguimiento dinámico</li><li>Integración perfecta con ecosistema Apple</li><li>Resistencia al agua y sudor (IP54)</li><li>Estuche USB-C con carga inalámbrica</li>',
        p2Cons:
          '<li>Precio elevado (129 €)</li><li>Funciones limitadas en Android</li><li>Diseño abierto (no aísla pasivamente)</li>',
        p2For:
          '<strong>¿Para quién es?</strong> Para usuarios de iPhone que quieren la mejor integración posible y un sonido envolvente de calidad.',
        p3Name: '🥉 Nothing Ear (a)',
        p3Type: 'True Wireless',
        p3Price: '~65 €',
        p3Rating: '★★★★',
        p3Best: 'Mejor diseño / innovación',
        p3Title:
          '🥉 Nothing Ear (a) — Diseño rompedor y gran sonido',
        p3CardTitle: 'Nothing Ear (a)',
        p3CardRating:
          '★★★★ 4.4/5 · 12.920 valoraciones',
        p3CardPrice: '~64,90 €',
        p3Desc1:
          'Nothing ha revolucionado el mercado con su <strong>diseño transparente</strong> que se ha convertido en seña de identidad. Los <strong>Ear (a)</strong> son la versión más asequible de la marca sin renunciar a la calidad.',
        p3Desc2:
          'Ofrecen <strong>cancelación de ruido activa de hasta 45 dB</strong>, certificación <strong>Hi-Res Audio (LDAC)</strong> y un algoritmo de refuerzo de graves que los hace ideales para música actual. Además, integran ChatGPT de serie.',
        p3Pros:
          '<li>Diseño único y llamativo</li><li>Cancelación de ruido potente (45 dB)</li><li>Hi-Res Audio con LDAC</li><li>Integración con ChatGPT</li>',
        p3Cons:
          '<li>Autonomía mejorable (5-6h sin estuche)</li><li>Controles táctiles a veces imprecisos</li><li>Estuche algo grande para el bolsillo</li>',
        p3For:
          '<strong>¿Para quién es?</strong> Para quienes quieren algo diferente, con personalidad, y una calidad de sonido excelente sin llegar a los precios de gama alta.',
        p4Name: '4. Sony WH-CH520',
        p4Type: 'Diadema',
        p4Price: '~27 €',
        p4Rating: '★★★★½',
        p4Best: 'Mejor batería (50h)',
        p4Title:
          '4. Sony WH-CH520 — 50 horas de autonomía',
        p4CardTitle: 'Sony WH-CH520',
        p4CardRating:
          '★★★★½ 4.6/5 · 43.812 valoraciones',
        p4CardPrice: '~27,50 €',
        p4Desc1:
          'Sony es sinónimo de calidad, y los <strong>WH-CH520</strong> lo demuestran. Estos auriculares de diadema ofrecen una <strong>autonomía bestial de 50 horas</strong>, algo que pocos modelos igualan.',
        p4Desc2:
          'Incluyen la tecnología <strong>DSEE (Digital Sound Enhancement Engine)</strong> de Sony, que upscales el audio comprimido para ofrecer un sonido más rico y detallado. Su diseño plegable los hace muy fáciles de transportar.',
        p4Pros:
          '<li>Autonomía extraordinaria (50 horas)</li><li>Sonido nítido y equilibrado (DSEE)</li><li>Diseño ligero y plegable</li><li>Precio imbatible (~27 €)</li>',
        p4Cons:
          '<li>No tiene cancelación de ruido activa</li><li>Materiales algo justos</li><li>Cable USB-C algo corto</li>',
        p4For:
          '<strong>¿Para quién es?</strong> Para quienes priorizan la autonomía por encima de todo. Perfectos para viajes largos, estudios o trabajo diario sin preocuparse del cargador.',
        p5Name: '5. Xiaomi Redmi Buds 6 Play',
        p5Type: 'True Wireless',
        p5Price: '~10 €',
        p5Rating: '★★★★',
        p5Best: 'Mejor ultra-budget',
        p5Title:
          '5. Xiaomi Redmi Buds 6 Play — La opción más económica',
        p5CardTitle: 'Xiaomi Redmi Buds 6 Play',
        p5CardRating:
          '★★★★ 4.4/5 · 12.409 valoraciones',
        p5CardPrice: '~9,99 €',
        p5Desc1:
          'Con un precio ridículo de <strong>menos de 10 €</strong>, los <strong>Redmi Buds 6 Play</strong> de Xiaomi son la puerta de entrada al mundo de los auriculares inalámbricos. Y lo mejor: no son malos, todo lo contrario.',
        p5Desc2:
          'Ofrecen <strong>cancelación de ruido básica</strong>, <strong>Bluetooth 5.4</strong> y hasta <strong>36 horas de autonomía total</strong> con el estuche. Por menos de lo que cuesta un menú del día, tienes unos auriculares perfectamente funcionales.',
        p5Pros:
          '<li>Precio imbatible (9,99 €)</li><li>Bluetooth 5.4 de última generación</li><li>36 horas de autonomía total</li><li>Ligeros y cómodos</li>',
        p5Cons:
          '<li>Cancelación de ruido básica</li><li>Calidad de sonido limitada (esperable por el precio)</li><li>Micrófono justo para llamadas</li>',
        p5For:
          '<strong>¿Para quién es?</strong> Para quien necesita unos auriculares básicos para el día a día sin gastar apenas dinero. Ideales como secundarios o para iniciarse en los true wireless.',
        finalTitle: 'Tabla comparativa final',
        t2Th1: 'Modelo',
        t2Th2: 'Precio',
        t2Th3: 'Batería',
        t2Th4: 'ANC',
        t2Th5: 'Valoración',
        t2Th6: 'Ideal para',
        t2P1Best: 'Mejor relación calidad-precio',
        t2P2Best: 'Usuarios Apple',
        t2P3Best: 'Diseño y calidad',
        t2P4Best: 'Máxima autonomía',
        t2P5Best: 'Presupuesto ajustado',
        conclusionTitle: 'Conclusión: ¿cuál comprar?',
        conclusionIntro:
          'La elección depende de tus necesidades y presupuesto:',
        conclusionP1:
          '<strong>🥇 Si buscas la mejor relación calidad-precio:</strong> <strong>Soundcore Q20i</strong> — cancelación de ruido excelente por solo 35 €.',
        conclusionP2:
          '<strong>🥈 Si tienes iPhone:</strong> <strong>AirPods 4</strong> — la integración con el ecosistema Apple no tiene rival.',
        conclusionP3:
          '<strong>🥉 Si quieres algo diferente:</strong> <strong>Nothing Ear (a)</strong> — diseño único y sonido de calidad.',
        conclusionP4:
          '<strong>🔋 Si la batería es tu prioridad:</strong> <strong>Sony WH-CH520</strong> — 50 horas sin pasar por el cargador.',
        conclusionP5:
          '<strong>💰 Si tu presupuesto es mínimo:</strong> <strong>Xiaomi Redmi Buds 6 Play</strong> — increíbles por menos de 10 €.',
        ctaBtn: '🛒 Ver todos los precios en Amazon',
        footerBrand:
          '🎧 Los mejores auriculares de 2026',
        footerDesc:
          'Guía actualizada con los auriculares más vendidos en Amazon España. Comparamos precios, valoraciones y características para ayudarte a elegir.',
        footerLinks: 'Enlaces',
        footerLegal: 'Legal',
        footerLinkHome: 'Inicio',
        footerLinkHeadphones: 'Auriculares',
        buyingGuideTitle: 'Guía de compra: cómo elegir auriculares',
        buyingGuide1: '<strong>Tipo.</strong> Los de diadema ofrecen mejor sonido y batería (40–50 h). Los true wireless son más portátiles, ideales para deporte y viajes.',
        buyingGuide2: '<strong>Cancelación de ruido.</strong> El ANC marca la diferencia si viajas o trabajas en entornos ruidosos. Para uso en casa, no es imprescindible.',
        buyingGuide3: '<strong>Autonomía.</strong> En true wireless busca mínimo 5 h por carga (24 h con estuche). En diadema, a partir de 30 h está bien; 50 h es excelente.',
        faqTitle: 'Preguntas frecuentes',
        faqQ1: '¿Cuánto duran unos auriculares inalámbricos?',
        faqA1: 'Los true wireless duran 5–8 h por carga y 24–36 h totales con el estuche. Los de diadema llegan a 40–50 h con una sola carga.',
        faqQ2: '¿Merece la pena pagar más por cancelación de ruido?',
        faqA2: 'Sí si viajas, trabajas en sitios con ruido o estudias en cafeterías. Para usar en casa en silencio, no es necesaria.',
        faqQ3: '¿Diadema o intrauriculares? ¿Qué es mejor?',
        faqA3: 'No hay uno mejor, depende del uso. Diadema: mejor sonido y batería. Intrauriculares: ligeros, discretos, ideales para deporte.',
      },
      oficina: {
        metaTitle:
          'Top 5 Mejores Sillas Ergonómicas 2026 · Comparativa',
        metaDesc:
          'Comparativa de las 5 sillas ergonómicas más vendidas en Amazon España en 2026. Analizamos Sihoo, Hygiatic, Cazar y más.',
        ogTitle:
          'Top 5 Mejores Sillas Ergonómicas 2026 · Guía Completa',
        category: '🪑 Sillas de Oficina',
        title:
          'Top 5 sillas ergonómicas para teletrabajar en 2026',
        metaUpdated: '📅 Actualizado: julio 2026',
        metaAuthor: '✍️ Por: DuoStudio',
        introP1:
          '<strong>Pasamos un tercio de nuestra vida sentados.</strong> Tener una silla ergonómica no es un lujo, es una necesidad. Una mala silla puede causar dolor lumbar, cervical y problemas de circulación.',
        introP2:
          'Tras analizar las <strong>10 sillas más vendidas en Amazon España</strong> y cribar según opiniones, materiales y relación calidad-precio, hemos seleccionado el <strong>top 5 de sillas ergonómicas</strong> para cualquier presupuesto. Todos los productos son reales, con datos de valoraciones y precios actualizados a julio 2026.',
        quickTitle:
          'Resumen rápido: las 5 mejores sillas ergonómicas de 2026',
        t1Th1: 'Modelo',
        t1Th2: 'Tipo',
        t1Th3: 'Precio',
        t1Th4: 'Valoración',
        t1Th5: 'Lo mejor',
        p1Name: '🥇 Sihoo M57',
        p1Type: 'Malla ergonómica',
        p1Price: '~159 €',
        p1Rating: '★★★★ 4.4/5',
        p1Best: 'Mejor relación calidad-precio',
        p1Title:
          '🥇 Sihoo M57 — La mejor relación calidad-precio',
        p1CardTitle: 'Sihoo M57',
        p1CardRating:
          '★★★★ 4.4/5 · 4.200 valoraciones',
        p1CardPrice: '~159 €',
        p1Desc1:
          'La <strong>Sihoo M57</strong> es toda una referencia en el segmento de sillas ergonómicas por debajo de 200 €. Su respaldo de malla transpirable, el soporte lumbar ajustable en altura y profundidad, y su reposacabezas 3D la convierten en la opción más equilibrada del mercado.',
        p1Desc2:
          'El respaldo de malla favorece la circulación del aire (imprescindible si estás muchas horas sentado), y su estructura de acero le otorga una estabilidad que las sillas de este precio no suelen ofrecer. Además, incluye reposabrazos 2D ajustables y un mecanismo de balanceo con tensión ajustable.',
        p1Pros:
          '<li>Respaldo de malla transpirable</li><li>Soporte lumbar ajustable en altura y profundidad</li><li>Reposacabezas 3D ajustable</li><li>Soporta hasta 150 kg</li>',
        p1Cons:
          '<li>Reposabrazos solo 2D (no giran)</li><li>No recomendable para personas muy altas (&gt;1,90 m)</li><li>El cojín del asiento podría ser más grueso</li>',
        p1For:
          '<strong>¿Para quién es?</strong> Para quien busca la mejor silla ergonómica sin pasarse de 200 €. La opción más equilibrada para teletrabajo y uso diario.',
        p2Name: '🥈 Sihoo D01-S',
        p2Type: 'Premium reposabrazos 4D',
        p2Price: '~219 €',
        p2Rating: '★★★★ 4.3/5',
        p2Best: 'Mejor para largas horas',
        p2Title:
          '🥈 Sihoo D01-S — La opción premium',
        p2CardTitle: 'Sihoo D01-S',
        p2CardRating:
          '★★★★ 4.3/5 · 1.890 valoraciones',
        p2CardPrice: '~219 €',
        p2Desc1:
          'La <strong>Sihoo D01-S</strong> es la hermana mayor de la M57. Comparte la misma herencia de Sihoo, conocida por fabricar sillas de oficina para grandes empresas. Cuenta con rejilla de malla de gran calidad, soporte sacro ajustable en altura y profundidad, reposacabezas 3D y reposabrazos <strong>4D</strong>.',
        p2Desc2:
          'Los reposabrazos 4D se pueden ajustar en altura, profundidad, anchura y rotación, lo que permite una adaptación casi perfecta a cualquier postura. El plus de precio se justifica sobre todo por la calidad de los materiales y una garantía superior.',
        p2Pros:
          '<li>Reposabrazos 4D ajustables</li><li>Respaldo de malla de alta calidad</li><li>Gran transpirabilidad</li><li>Diseño profesional para oficina</li>',
        p2Cons:
          '<li>Precio elevado (219 €)</li><li>Asiento algo firme</li><li>Montaje más complejo que la M57</li>',
        p2For:
          '<strong>¿Para quién es?</strong> Para quienes pasan más de 8 horas sentados al día y necesitan el máximo ajuste posible. Ideal para programadores, diseñadores y ofimática intensiva.',
        p3Name: '🥉 Cazar Ejecutiva',
        p3Type: 'Acolchada cuero',
        p3Price: '~169 €',
        p3Rating: '★★★★½ 4.5/5',
        p3Best: 'Mejor acolchada',
        p3Title:
          '🥉 Cazar Silla Ejecutiva — La más cómoda',
        p3CardTitle: 'Cazar Silla Ejecutiva',
        p3CardRating:
          '★★★★½ 4.5/5 · 3.150 valoraciones',
        p3CardPrice: '~169 €',
        p3Desc1:
          'La <strong>Cazar</strong> es la silla más cómoda de la lista. Su asiento de cuero sintético con relleno de espuma de alta densidad ofrece una sensación de confort inmediato. El respaldo es reclinable y el reposacabezas ajustable.',
        p3Desc2:
          'Aunque no transpira tan bien como las de malla completa, su diseño es más elegante y sofisticado, ideal para una oficina en casa con estilo. Los reposabrazos son acolchados y ajustables en altura.',
        p3Pros:
          '<li>Asiento de cuero muy cómodo</li><li>Diseño elegante y sobrio</li><li>Reposacabezas ajustable</li><li>Soporta hasta 150 kg</li>',
        p3Cons:
          '<li>Sin soporte lumbar ajustable</li><li>El cuero transpira menos que la malla</li><li>Peso elevado (20 kg)</li>',
        p3For:
          '<strong>¿Para quién es?</strong> Para quienes priorizan la comodidad del asiento y el diseño sobre la transpirabilidad. Perfecta para reuniones, recepción o teletrabajo en videollamadas.',
        p4Name: '4. Hygiatic Oficina',
        p4Type: 'Malla con lumbar',
        p4Price: '~89 €',
        p4Rating: '★★★★½ 4.5/5',
        p4Best: 'Mejor calidad-precio ajustado',
        p4Title:
          '4. Hygiatic Silla Oficina — Mejor calidad-precio ajustado',
        p4CardTitle: 'Hygiatic Silla Oficina',
        p4CardRating:
          '★★★★½ 4.5/5 · 5.600 valoraciones',
        p4CardPrice: '~89 €',
        p4Desc1:
          'Hygiatic ha logrado lo que parece imposible: una silla ergonómica de calidad por menos de 100 €. Su soporte lumbar ajustable en altura y profundidad, el respaldo de malla y su cojín de espuma viscoelástica la hacen muy transpirable y cómoda.',
        p4Desc2:
          'Es fácil de montar (20 minutos), pesa menos de 15 kg y tiene una capacidad de 150 kg. La única concesión al precio son los reposabrazos no ajustables, pero por 89 € es una compra inteligentísima.',
        p4Pros:
          '<li>Precio imbatible (89 €)</li><li>Respaldo de malla muy transpirable</li><li>Soporte lumbar ajustable</li><li>Fácil de montar en 20 min</li>',
        p4Cons:
          '<li>Reposabrazos no ajustables</li><li>Almohadilla del asiento algo fina</li><li>Sin reposacabezas</li>',
        p4For:
          '<strong>¿Para quién es?</strong> Para quien tiene un presupuesto ajustado pero no quiere renunciar a una silla ergonómica de malla. La mejor relación calidad-precio del mercado.',
        p5Name: '5. GTPlayer Gaming',
        p5Type: 'Deportiva lumbar',
        p5Price: '~99 €',
        p5Rating: '★★★★ 4.4/5',
        p5Best: 'Mejor para usuarios altos',
        p5Title:
          '5. GTPlayer Silla Gaming — Ideal para personas altas',
        p5CardTitle: 'GTPlayer Silla Gaming',
        p5CardRating:
          '★★★★ 4.4/5 · 2.800 valoraciones',
        p5CardPrice: '~99 €',
        p5Desc1:
          'La <strong>GTPlayer</strong> es una silla de escritorio con estilo gaming que soporta hasta 150 kg y es ideal para personas de hasta 1,95 m. Su espuma viscoelástica moldeada ofrece un confort excelente para jornadas largas.',
        p5Desc2:
          'El respaldo es reclinable hasta 180°, permitiendo incluso echar una siesta. Incluye cojín lumbar y cervical desmontables. Por 99 €, es difícil de superar en confort y versatilidad.',
        p5Pros:
          '<li>Ideal para personas altas (hasta 1,95 m)</li><li>Espuma viscoelástica muy cómoda</li><li>Respaldo reclinable 180°</li><li>Incluye cojines lumbar y cervical</li>',
        p5Cons:
          '<li>Reposabrazos fijos (no ajustables)</li><li>Estética gaming (no apta para oficinas serias)</li><li>La tela del cojín tiende a formar bolitas con el uso</li>',
        p5For:
          '<strong>¿Para quién es?</strong> Para usuarios altos o corpulentos que necesitan una silla ancha y resistente sin gastar una fortuna. También para gamers que quieren una silla todoterreno.',
        finalTitle: 'Tabla comparativa final',
        t2Th1: 'Modelo',
        t2Th2: 'Precio',
        t2Th3: 'Malla',
        t2Th4: 'Lumbar',
        t2Th5: 'Reposabrazos',
        t2Th6: 'Peso máx.',
        conclusionTitle: 'Conclusión — ¿cuál comprar?',
        conclusionIntro:
          'La elección depende de tus necesidades y presupuesto:',
        conclusionP1:
          '<strong>🥇 Para la mayoría de personas:</strong> <strong>Sihoo M57</strong> — la mejor silla ergonómica calidad-precio por 159 €. Cómoda, transpirable y ajustable.',
        conclusionP2:
          '<strong>🥈 Si trabajas muchas horas:</strong> <strong>Sihoo D01-S</strong> — reposabrazos 4D y malla premium para jornadas intensivas.',
        conclusionP3:
          '<strong>🥉 Si buscas confort máximo:</strong> <strong>Cazar Ejecutiva</strong> — asiento acolchado de cuero, ideal si no sufres calor.',
        conclusionP4:
          '<strong>💰 Presupuesto ajustado:</strong> <strong>Hygiatic</strong> — por 89 € tienes una silla de malla con soporte lumbar.',
        conclusionP5:
          '<strong>🔝 Si eres alto o corpulento:</strong> <strong>GTPlayer</strong> — hasta 150 kg y 1,95 m de altura.',
        ctaBtn: '🛒 Ver ofertas en Amazon',
        footerBrand:
          '🪑 Mejores Sillas Ergonómicas 2026',
        footerDesc:
          'Guía actualizada con las sillas de oficina más vendidas en Amazon España. Comparamos precios, valoraciones y características para ayudarte a elegir.',
        footerLinks: 'Enlaces',
        footerLegal: 'Legal',
        footerLinkHome: 'Inicio',
        footerLinkChairs: 'Sillas',
        buyingGuideTitle: 'Guía de compra: cómo elegir silla ergonómica',
        buyingGuide1: '<strong>Respaldo.</strong> La malla transpira mejor y es ideal para climas cálidos o jornadas largas. El acolchado es más cómodo al tacto pero acumula calor.',
        buyingGuide2: '<strong>Ajustes clave.</strong> Soporte lumbar regulable y reposabrazos ajustables marcan la diferencia entre una silla correcta y una buena. El reposacabezas es recomendable a partir de 8 h diarias.',
        buyingGuide3: '<strong>Capacidad.</strong> La mayoría soporta 150 kg. Si mides más de 1,85 m, busca modelos con respaldo alto y mayor profundidad de asiento.',
        faqTitle: 'Preguntas frecuentes',
        faqQ1: '¿Cuánto debería gastar en una silla ergonómica?',
        faqA1: 'Con 100–200 € tienes una silla de malla con soporte lumbar ajustable. Por debajo de 80 € las opciones son muy limitadas en ergonomía.',
        faqQ2: '¿Malla o cuero? ¿Qué transpira mejor?',
        faqA2: 'La malla transpira mucho más, ideal para climas cálidos y muchas horas sentado. El cuero sintético es más cómodo al principio pero acumula calor y humedad.',
        faqQ3: '¿Las sillas gaming valen para trabajar?',
        faqA3: 'Sí, muchas comparten estructura con las de oficina. Suelen tener más acolchado y soporte lumbar incluido. El inconveniente es su estética, que no siempre encaja en oficinas.',
      },
      template: {
        metaTitle: 'Título del Artículo · DuoStudio',
        metaDesc:
          'Descripción del artículo para SEO. Máximo 160 caracteres.',
        ogTitle: 'Título del Artículo · DuoStudio',
        navBrand: 'DuoStudio',
        category: 'Tecnología',
        title:
          'Título del artículo — los mejores [producto] de 2026',
        metaUpdated: '📅 Actualizado: julio 2026',
        metaAuthor: '✍️ Por: DuoStudio',
        introP1:
          '<strong>Introducción:</strong> Aquí va un párrafo introductorio explicando qué vas a comparar y por qué es útil para el lector. Incluye la palabra clave principal de forma natural.',
        prosTitle: '✅ Pros',
        consTitle: '❌ Contras',
        conclusionTitle:
          'Conclusión — ¿cuál comprar?',
        conclusionP1:
          '<strong>🧑‍💻 Para la mayoría de personas:</strong> El Producto A es la mejor opción por su relación calidad-precio.',
        conclusionP2:
          '<strong>🎯 Para los más exigentes:</strong> El Producto B merece la pena si necesitas [ventaja clave].',
        ctaBtn: '🛒 Ver ofertas en Amazon',
        footerBrand: 'DuoStudio',
        footerDesc:
          'Comparativas independientes para ayudarte a tomar la mejor decisión de compra.',
        footerLinks: 'Enlaces',
        footerLegal: 'Legal',
        footerLinkHome: 'Inicio',
        footerLinkArticles: 'Artículos',
      },
    },

    en: {
      common: {
        navHome: 'Home',
        navDocs: 'Guides',
        navPrivacy: 'Privacy Policy',
        navAffiliate: 'Affiliate Disclosure',
        disclosure:
          '⚠️ This article contains affiliate links. If you purchase through them, we earn a small commission at no extra cost to you. This helps us keep our guides up to date. All products were selected based on real sales and ratings on Amazon Spain.',
        copyright:
          '© 2026 DuoStudio · Some links are affiliate links. If you buy through them, we may earn a commission at no extra cost to you.',
        prosTitle: 'Pros and Cons',
        prosLabel: '✅ Pros',
        consLabel: '❌ Cons',
        langBtn: 'ES',
        comingSoon: 'Coming Soon',
        comingSoonDesc: 'New categories on the way',
        navBrand: 'DuoStudio',
      },
      index: {
        metaTitle: 'DuoStudio · Buying Guides',
        metaDesc:
          'DuoStudio — independent buying guides. Find the best product for you.',
        title: 'DuoStudio · Top Products by Category',
        subtitle:
          'Select a category to browse guides and comparisons',
        card1Title: 'Headphones',
        card1Desc:
          'Top 5 best headphones 2026 &middot; Comparison',
        card2Title: 'Ergonomic Chairs',
        card2Desc:
          'Top 5 best office chairs 2026 &middot; Comparison',
      },
      auriculares: {
        metaTitle:
          'Top 5 Best Headphones 2026 · Full Comparison',
        metaDesc:
          'Comparison of the 5 best-selling headphones on Amazon Spain in 2026. We review Soundcore Q20i, Sony WH-CH520, Nothing Ear (a), AirPods 4, and Xiaomi Redmi Buds 6 Play.',
        ogTitle:
          'Top 5 Best Headphones 2026 · Complete Guide',
        category: '🎧 Headphones',
        title:
          'The 5 best headphones to buy in 2026',
        metaUpdated: '📅 Updated: July 2026',
        metaAuthor: '✍️ By: DuoStudio',
        introP1:
          '<strong>Choosing new headphones can be overwhelming.</strong> With hundreds of models available on Amazon — wireless, wired, over-ear, in-ear, noise-cancelling — it is easy to get lost.',
        introP2:
          'To help you decide, we have analysed the <strong>5 best-selling headphones on Amazon Spain</strong> based on real sales, user ratings, and value for money. This guide is updated monthly to reflect current prices and trends.',
        quickTitle:
          'Quick overview: the 5 best headphones of 2026',
        t1Th1: 'Model',
        t1Th2: 'Type',
        t1Th3: 'Price',
        t1Th4: 'Rating',
        t1Th5: 'Best for',
        p1Name: '🥇 Soundcore Q20i',
        p1Type: 'Over-ear',
        p1Price: '~35 €',
        p1Rating: '★★★★½',
        p1Best: 'Best value for money',
        p1Title:
          '🥇 Soundcore Q20i — Best value for money',
        p1CardTitle: 'Soundcore Q20i · Anker',
        p1CardRating:
          '★★★★½ 4.7/5 · 67,986 ratings',
        p1CardPrice: '~34.77 €',
        p1Desc1:
          'The <strong>Soundcore Q20i</strong> by Anker are, without question, the headphones with the best value for money on the Spanish market. With over <strong>67,000 ratings</strong> and an average score of 4.7/5, they have become a sales phenomenon.',
        p1Desc2:
          'They feature <strong>hybrid active noise cancellation</strong>, something that until recently was only seen in models over 100 €. They also boast <strong>Hi-Res Audio</strong> certification and a bass boost mode ideal for urban and electronic music.',
        p1Pros:
          '<li>Excellent noise cancellation for the price</li><li>Balanced sound with Hi-Res certification</li><li>40 hours of battery life with ANC on</li><li>Transparency mode to hear your surroundings</li>',
        p1Cons:
          '<li>Basic plastic build materials</li><li>Bass can distort on some tracks</li><li>No multipoint connection</li>',
        p1For:
          '<strong>Who is it for?</strong> For those looking for the best noise cancellation without spending over 50 €. Ideal for travel, studying, or working.',
        p2Name: '🥈 Apple AirPods 4',
        p2Type: 'True Wireless',
        p2Price: '~129 €',
        p2Rating: '★★★★½',
        p2Best: 'Best for Apple ecosystem',
        p2Title:
          '🥈 Apple AirPods 4 — The best Apple experience',
        p2CardTitle: 'Apple AirPods 4',
        p2CardRating:
          '★★★★½ 4.7/5 · 13,695 ratings',
        p2CardPrice: '~129 €',
        p2Desc1:
          'The <strong>AirPods 4</strong> are the default choice for iPhone, iPad, or Mac users. They integrate Apple\'s <strong>H2 chip</strong>, which improves noise cancellation and sound quality over the previous generation.',
        p2Desc2:
          'The <strong>personalised spatial audio</strong> with dynamic head tracking delivers an immersive experience that no other true wireless earbuds can match within its ecosystem. They are also water and sweat resistant (IP54).',
        p2Pros:
          '<li>Spatial audio with dynamic head tracking</li><li>Seamless integration with Apple ecosystem</li><li>Water and sweat resistant (IP54)</li><li>USB-C case with wireless charging</li>',
        p2Cons:
          '<li>High price (129 €)</li><li>Limited features on Android</li><li>Open design (no passive isolation)</li>',
        p2For:
          '<strong>Who is it for?</strong> For iPhone users who want the best possible integration and high-quality spatial sound.',
        p3Name: '🥉 Nothing Ear (a)',
        p3Type: 'True Wireless',
        p3Price: '~65 €',
        p3Rating: '★★★★',
        p3Best: 'Best design / innovation',
        p3Title:
          '🥉 Nothing Ear (a) — Bold design, great sound',
        p3CardTitle: 'Nothing Ear (a)',
        p3CardRating:
          '★★★★ 4.4/5 · 12,920 ratings',
        p3CardPrice: '~64.90 €',
        p3Desc1:
          'Nothing has revolutionised the market with its <strong>transparent design</strong> that has become its trademark. The <strong>Ear (a)</strong> are the most affordable model from the brand without compromising on quality.',
        p3Desc2:
          'They offer <strong>active noise cancellation up to 45 dB</strong>, <strong>Hi-Res Audio (LDAC)</strong> certification, and a bass enhancement algorithm that makes them ideal for modern music. They also come with built-in ChatGPT integration.',
        p3Pros:
          '<li>Unique, eye-catching design</li><li>Powerful noise cancellation (45 dB)</li><li>Hi-Res Audio with LDAC</li><li>ChatGPT integration</li>',
        p3Cons:
          '<li>Average battery life (5-6h without case)</li><li>Touch controls can be imprecise at times</li><li>Case is somewhat bulky for pockets</li>',
        p3For:
          '<strong>Who is it for?</strong> For those who want something different with personality, excellent sound quality, without reaching premium prices.',
        p4Name: '4. Sony WH-CH520',
        p4Type: 'Over-ear',
        p4Price: '~27 €',
        p4Rating: '★★★★½',
        p4Best: 'Best battery (50h)',
        p4Title:
          '4. Sony WH-CH520 — 50 hours of battery life',
        p4CardTitle: 'Sony WH-CH520',
        p4CardRating:
          '★★★★½ 4.6/5 · 43,812 ratings',
        p4CardPrice: '~27.50 €',
        p4Desc1:
          'Sony is synonymous with quality, and the <strong>WH-CH520</strong> prove it. These over-ear headphones deliver a <strong>massive 50 hours of battery life</strong>, something few models can match.',
        p4Desc2:
          'They include Sony\'s <strong>DSEE (Digital Sound Enhancement Engine)</strong> technology, which upscales compressed audio for richer, more detailed sound. Their foldable design makes them very easy to carry.',
        p4Pros:
          '<li>Extraordinary battery life (50 hours)</li><li>Crisp, balanced sound (DSEE)</li><li>Lightweight and foldable design</li><li>Unbeatable price (~27 €)</li>',
        p4Cons:
          '<li>No active noise cancellation</li><li>Build quality feels basic</li><li>USB-C cable is somewhat short</li>',
        p4For:
          '<strong>Who is it for?</strong> For those who prioritise battery life above all else. Perfect for long trips, studying, or daily work without worrying about charging.',
        p5Name: '5. Xiaomi Redmi Buds 6 Play',
        p5Type: 'True Wireless',
        p5Price: '~10 €',
        p5Rating: '★★★★',
        p5Best: 'Best ultra-budget',
        p5Title:
          '5. Xiaomi Redmi Buds 6 Play — The most affordable option',
        p5CardTitle: 'Xiaomi Redmi Buds 6 Play',
        p5CardRating:
          '★★★★ 4.4/5 · 12,409 ratings',
        p5CardPrice: '~9.99 €',
        p5Desc1:
          'At a ridiculous price of <strong>under 10 €</strong>, the <strong>Redmi Buds 6 Play</strong> by Xiaomi are the gateway to wireless earbuds. And the best part: they are not bad — quite the opposite.',
        p5Desc2:
          'They offer <strong>basic noise cancellation</strong>, <strong>Bluetooth 5.4</strong>, and up to <strong>36 hours of total battery life</strong> with the charging case. For less than the cost of a lunch menu, you get perfectly functional wireless earbuds.',
        p5Pros:
          '<li>Unbeatable price (9.99 €)</li><li>Latest Bluetooth 5.4</li><li>36 hours total battery life</li><li>Lightweight and comfortable</li>',
        p5Cons:
          '<li>Basic noise cancellation</li><li>Limited sound quality (expected at this price)</li><li>Mediocre microphone for calls</li>',
        p5For:
          '<strong>Who is it for?</strong> For anyone who needs basic everyday earbuds without spending much. Great as a secondary pair or for getting started with true wireless.',
        finalTitle: 'Final comparison table',
        t2Th1: 'Model',
        t2Th2: 'Price',
        t2Th3: 'Battery',
        t2Th4: 'ANC',
        t2Th5: 'Rating',
        t2Th6: 'Best for',
        t2P1Best: 'Best value for money',
        t2P2Best: 'Apple users',
        t2P3Best: 'Design & quality',
        t2P4Best: 'Maximum battery',
        t2P5Best: 'Budget pick',
        conclusionTitle: 'Conclusion: which one to buy?',
        conclusionIntro:
          'The choice depends on your needs and budget:',
        conclusionP1:
          '<strong>🥇 Best value for money:</strong> <strong>Soundcore Q20i</strong> — excellent noise cancellation for just 35 €.',
        conclusionP2:
          '<strong>🥈 iPhone user:</strong> <strong>AirPods 4</strong> — unmatched integration with the Apple ecosystem.',
        conclusionP3:
          '<strong>🥉 Want something different:</strong> <strong>Nothing Ear (a)</strong> — unique design with quality sound.',
        conclusionP4:
          '<strong>🔋 Battery is your priority:</strong> <strong>Sony WH-CH520</strong> — 50 hours without charging.',
        conclusionP5:
          '<strong>💰 On a tight budget:</strong> <strong>Xiaomi Redmi Buds 6 Play</strong> — incredible value under 10 €.',
        ctaBtn: '🛒 Check prices on Amazon',
        footerBrand: '🎧 Best Headphones 2026',
        footerDesc:
          'An up-to-date guide to the best-selling headphones on Amazon Spain. We compare prices, ratings, and features to help you choose.',
        footerLinks: 'Links',
        footerLegal: 'Legal',
        footerLinkHome: 'Home',
        footerLinkHeadphones: 'Headphones',
        buyingGuideTitle: 'Buying guide: how to choose headphones',
        buyingGuide1: '<strong>Type.</strong> Over-ear headphones offer better sound and battery (40–50 h). True wireless are more portable, ideal for sports and travel.',
        buyingGuide2: '<strong>Noise cancellation.</strong> ANC makes a difference if you travel or work in noisy environments. At home, it is not essential.',
        buyingGuide3: '<strong>Battery.</strong> For true wireless, aim for at least 5 h per charge (24 h with case). For over-ear, 30 h+ is good; 50 h is excellent.',
        faqTitle: 'Frequently Asked Questions',
        faqQ1: 'How long do wireless headphones last?',
        faqA1: 'True wireless earbuds last 5–8 h per charge, 24–36 h total with the case. Over-ear headphones reach 40–50 h on a single charge.',
        faqQ2: 'Is noise cancellation worth paying more for?',
        faqA2: 'Yes if you travel, work in noisy places, or study in cafés. For quiet home use, it is not necessary.',
        faqQ3: 'Over-ear or in-ear? Which is better?',
        faqA3: 'Neither is universally better — it depends on use. Over-ear: better sound and battery. In-ear: lightweight, discreet, great for sports.',
      },
      oficina: {
        metaTitle:
          'Top 5 Best Ergonomic Chairs 2026 · Comparison',
        metaDesc:
          'Comparison of the 5 best-selling ergonomic chairs on Amazon Spain in 2026. We review Sihoo, Hygiatic, Cazar, and more.',
        ogTitle:
          'Top 5 Best Ergonomic Chairs 2026 · Complete Guide',
        category: '🪑 Office Chairs',
        title:
          'Top 5 ergonomic chairs for working from home in 2026',
        metaUpdated: '📅 Updated: July 2026',
        metaAuthor: '✍️ By: DuoStudio',
        introP1:
          '<strong>We spend a third of our lives sitting.</strong> Having an ergonomic chair is not a luxury — it is a necessity. A bad chair can cause lower back pain, neck strain, and circulation problems.',
        introP2:
          'After analysing the <strong>10 best-selling chairs on Amazon Spain</strong> and filtering by reviews, materials, and value for money, we have selected the <strong>top 5 ergonomic chairs</strong> for any budget. All products are real, with up-to-date ratings and prices as of July 2026.',
        quickTitle:
          'Quick overview: the 5 best ergonomic chairs of 2026',
        t1Th1: 'Model',
        t1Th2: 'Type',
        t1Th3: 'Price',
        t1Th4: 'Rating',
        t1Th5: 'Best for',
        p1Name: '🥇 Sihoo M57',
        p1Type: 'Mesh ergonomic',
        p1Price: '~159 €',
        p1Rating: '★★★★ 4.4/5',
        p1Best: 'Best value for money',
        p1Title:
          '🥇 Sihoo M57 — Best value for money',
        p1CardTitle: 'Sihoo M57',
        p1CardRating:
          '★★★★ 4.4/5 · 4,200 ratings',
        p1CardPrice: '~159 €',
        p1Desc1:
          'The <strong>Sihoo M57</strong> is a benchmark in the under-200 € ergonomic chair segment. Its breathable mesh back, height- and depth-adjustable lumbar support, and 3D headrest make it the most balanced option on the market.',
        p1Desc2:
          'The mesh back promotes air circulation (essential if you sit for long hours), and its steel frame provides stability rarely found at this price point. It also includes 2D adjustable armrests and a rocking mechanism with adjustable tension.',
        p1Pros:
          '<li>Breathable mesh backrest</li><li>Height and depth adjustable lumbar support</li><li>3D adjustable headrest</li><li>Supports up to 150 kg</li>',
        p1Cons:
          '<li>Armrests are 2D only (no rotation)</li><li>Not ideal for very tall people (&gt;1.90 m)</li><li>Seat cushion could be thicker</li>',
        p1For:
          '<strong>Who is it for?</strong> For those looking for the best ergonomic chair without going over 200 €. The most balanced option for remote work and daily use.',
        p2Name: '🥈 Sihoo D01-S',
        p2Type: 'Premium 4D armrests',
        p2Price: '~219 €',
        p2Rating: '★★★★ 4.3/5',
        p2Best: 'Best for long hours',
        p2Title:
          '🥈 Sihoo D01-S — The premium choice',
        p2CardTitle: 'Sihoo D01-S',
        p2CardRating:
          '★★★★ 4.3/5 · 1,890 ratings',
        p2CardPrice: '~219 €',
        p2Desc1:
          'The <strong>Sihoo D01-S</strong> is the bigger sibling of the M57. It shares Sihoo\'s heritage of building office chairs for large companies. It features high-quality mesh, height- and depth-adjustable sacral support, a 3D headrest, and <strong>4D armrests</strong>.',
        p2Desc2:
          'The 4D armrests adjust in height, depth, width, and rotation, allowing near-perfect adaptation to any posture. The price premium is justified by superior material quality and an extended warranty.',
        p2Pros:
          '<li>4D adjustable armrests</li><li>High-quality mesh backrest</li><li>Excellent breathability</li><li>Professional office design</li>',
        p2Cons:
          '<li>High price (219 €)</li><li>Seat is somewhat firm</li><li>Assembly is more complex than the M57</li>',
        p2For:
          '<strong>Who is it for?</strong> For those who spend more than 8 hours sitting daily and need maximum adjustability. Ideal for programmers, designers, and intensive office work.',
        p3Name: '🥉 Cazar Executive',
        p3Type: 'Padded leather',
        p3Price: '~169 €',
        p3Rating: '★★★★½ 4.5/5',
        p3Best: 'Best padded chair',
        p3Title:
          '🥉 Cazar Executive Chair — The most comfortable',
        p3CardTitle: 'Cazar Executive Chair',
        p3CardRating:
          '★★★★½ 4.5/5 · 3,150 ratings',
        p3CardPrice: '~169 €',
        p3Desc1:
          'The <strong>Cazar</strong> is the most comfortable chair on the list. Its synthetic leather seat with high-density foam filling delivers instant comfort. The backrest is reclinable and the headrest is adjustable.',
        p3Desc2:
          'While it does not breathe as well as full-mesh chairs, its design is more elegant and sophisticated — ideal for a stylish home office. The armrests are padded and height-adjustable.',
        p3Pros:
          '<li>Very comfortable leather seat</li><li>Elegant, sophisticated design</li><li>Adjustable headrest</li><li>Supports up to 150 kg</li>',
        p3Cons:
          '<li>No adjustable lumbar support</li><li>Leather breathes less than mesh</li><li>Heavy (20 kg)</li>',
        p3For:
          '<strong>Who is it for?</strong> For those who prioritise seat comfort and design over breathability. Perfect for meetings, reception areas, or video-call-heavy remote work.',
        p4Name: '4. Hygiatic Office',
        p4Type: 'Mesh with lumbar',
        p4Price: '~89 €',
        p4Rating: '★★★★½ 4.5/5',
        p4Best: 'Best budget value',
        p4Title:
          '4. Hygiatic Office Chair — Best budget value',
        p4CardTitle: 'Hygiatic Office Chair',
        p4CardRating:
          '★★★★½ 4.5/5 · 5,600 ratings',
        p4CardPrice: '~89 €',
        p4Desc1:
          'Hygiatic has achieved the seemingly impossible: a quality ergonomic chair for under 100 €. Its height- and depth-adjustable lumbar support, mesh back, and memory foam cushion make it highly breathable and comfortable.',
        p4Desc2:
          'It is easy to assemble (20 minutes), weighs under 15 kg, and supports 150 kg. The only compromise at this price is the non-adjustable armrests, but at 89 € it is an incredibly smart purchase.',
        p4Pros:
          '<li>Unbeatable price (89 €)</li><li>Highly breathable mesh back</li><li>Adjustable lumbar support</li><li>Easy 20-minute assembly</li>',
        p4Cons:
          '<li>Non-adjustable armrests</li><li>Seat cushion is somewhat thin</li><li>No headrest</li>',
        p4For:
          '<strong>Who is it for?</strong> For those on a tight budget who still want a mesh ergonomic chair. The best value for money on the market.',
        p5Name: '5. GTPlayer Gaming',
        p5Type: 'Sporty lumbar',
        p5Price: '~99 €',
        p5Rating: '★★★★ 4.4/5',
        p5Best: 'Best for tall users',
        p5Title:
          '5. GTPlayer Gaming Chair — Ideal for tall people',
        p5CardTitle: 'GTPlayer Gaming Chair',
        p5CardRating:
          '★★★★ 4.4/5 · 2,800 ratings',
        p5CardPrice: '~99 €',
        p5Desc1:
          'The <strong>GTPlayer</strong> is a desk chair with gaming style that supports up to 150 kg and is ideal for people up to 1.95 m tall. Its moulded memory foam provides excellent comfort for long sessions.',
        p5Desc2:
          'The backrest reclines up to 180°, even allowing for a nap. It includes removable lumbar and cervical cushions. At 99 €, it is hard to beat in terms of comfort and versatility.',
        p5Pros:
          '<li>Ideal for tall people (up to 1.95 m)</li><li>Very comfortable memory foam</li><li>180° reclining backrest</li><li>Includes lumbar and neck pillows</li>',
        p5Cons:
          '<li>Fixed armrests (non-adjustable)</li><li>Gaming aesthetics (not for serious offices)</li><li>Fabric tends to pill over time</li>',
        p5For:
          '<strong>Who is it for?</strong> For tall or heavy users who need a wide, sturdy chair without spending a fortune. Also for gamers who want an all-rounder chair.',
        finalTitle: 'Final comparison table',
        t2Th1: 'Model',
        t2Th2: 'Price',
        t2Th3: 'Mesh',
        t2Th4: 'Lumbar',
        t2Th5: 'Armrests',
        t2Th6: 'Max weight',
        conclusionTitle: 'Conclusion — which one to buy?',
        conclusionIntro:
          'The choice depends on your needs and budget:',
        conclusionP1:
          '<strong>🥇 For most people:</strong> <strong>Sihoo M57</strong> — the best value ergonomic chair at 159 €. Comfortable, breathable, and adjustable.',
        conclusionP2:
          '<strong>🥈 If you work long hours:</strong> <strong>Sihoo D01-S</strong> — 4D armrests and premium mesh for intensive use.',
        conclusionP3:
          '<strong>🥉 Maximum comfort:</strong> <strong>Cazar Executive</strong> — padded leather seat, ideal if you do not overheat.',
        conclusionP4:
          '<strong>💰 Tight budget:</strong> <strong>Hygiatic</strong> — get a mesh chair with lumbar support for 89 €.',
        conclusionP5:
          '<strong>🔝 Tall or heavy build:</strong> <strong>GTPlayer</strong> — supports up to 150 kg and 1.95 m height.',
        ctaBtn: '🛒 Check deals on Amazon',
        footerBrand: '🪑 Best Ergonomic Chairs 2026',
        footerDesc:
          'An up-to-date guide to the best-selling office chairs on Amazon Spain. We compare prices, ratings, and features to help you choose.',
        footerLinks: 'Links',
        footerLegal: 'Legal',
        footerLinkHome: 'Home',
        footerLinkChairs: 'Chairs',
        buyingGuideTitle: 'Buying guide: how to choose an ergonomic chair',
        buyingGuide1: '<strong>Backrest.</strong> Mesh breathes better, ideal for warm climates or long hours. Padded upholstery feels softer but retains heat.',
        buyingGuide2: '<strong>Key adjustments.</strong> Adjustable lumbar support and armrests separate a decent chair from a good one. A headrest is recommended for 8 h+ daily use.',
        buyingGuide3: '<strong>Capacity.</strong> Most chairs support 150 kg. If you are over 1.85 m, look for models with a taller backrest and deeper seat.',
        faqTitle: 'Frequently Asked Questions',
        faqQ1: 'How much should I spend on an ergonomic chair?',
        faqA1: 'With 100–200 € you get a mesh chair with adjustable lumbar support. Below 80 €, ergonomic options are very limited.',
        faqQ2: 'Mesh or leather? Which breathes better?',
        faqA2: 'Mesh breathes much better, ideal for warm climates and long sitting hours. Synthetic leather is more comfortable initially but traps heat and moisture.',
        faqQ3: 'Are gaming chairs good for work?',
        faqA3: 'Yes, many share the same structure as office chairs with extra padding and built-in lumbar support. The downside is their aesthetics, which may not suit professional offices.',
      },
      template: {
        metaTitle: 'Article Title · DuoStudio',
        metaDesc:
          'Article description for SEO. Maximum 160 characters.',
        ogTitle: 'Article Title · DuoStudio',
        navBrand: 'DuoStudio',
        category: 'Technology',
        title:
          'Article title — the best [product] of 2026',
        metaUpdated: '📅 Updated: July 2026',
        metaAuthor: '✍️ By: DuoStudio',
        introP1:
          '<strong>Introduction:</strong> Here goes an introductory paragraph explaining what you are comparing and why it is useful for the reader. Include the main keyword naturally.',
        prosTitle: '✅ Pros',
        consTitle: '❌ Cons',
        conclusionTitle:
          'Conclusion — which one to buy?',
        conclusionP1:
          '<strong>🧑‍💻 For most people:</strong> Product A is the best choice for its value for money.',
        conclusionP2:
          '<strong>🎯 For demanding users:</strong> Product B is worth it if you need [key advantage].',
        ctaBtn: '🛒 Check deals on Amazon',
        footerBrand: 'DuoStudio',
        footerDesc:
          'Independent comparisons to help you make the best purchase decision.',
        footerLinks: 'Links',
        footerLegal: 'Legal',
        footerLinkHome: 'Home',
        footerLinkArticles: 'Articles',
      },
    },
  }

  function getLang() {
    return localStorage.getItem(LANG_KEY) || DEFAULT
  }

  function t(key) {
    const lang = getLang()
    const keys = key.split('.')
    let val = dict[lang]
    for (const k of keys) {
      if (val && typeof val === 'object' && k in val) {
        val = val[k]
      } else {
        return ''
      }
    }
    return typeof val === 'string' ? val : ''
  }

  function translate() {
    const lang = getLang()
    document.documentElement.lang = lang

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = t(el.dataset.i18n)
      if (v) el.textContent = v
    })

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var v = t(el.dataset.i18nHtml)
      if (v) el.innerHTML = v
    })

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var parts = el.dataset.i18nAttr.split(':')
      var attr = parts[0]
      var key = parts.slice(1).join(':')
      var v = t(key)
      if (v && attr) el.setAttribute(attr, v)
    })

    var titleKey = document.documentElement.dataset.i18nTitle
    if (titleKey) {
      var titleVal = t(titleKey)
      if (titleVal) document.title = titleVal
    }

    var descKey = document.documentElement.dataset.i18nDesc
    if (descKey) {
      var descVal = t(descKey)
      if (descVal) {
        var meta = document.querySelector('meta[name="description"]')
        if (meta) meta.content = descVal
        var ogDesc = document.querySelector(
          'meta[property="og:description"]'
        )
        if (ogDesc) ogDesc.content = descVal
      }
    }

    var ogTitleKey = document.documentElement.dataset.i18nOgTitle
    if (ogTitleKey) {
      var ogTitleVal = t(ogTitleKey)
      if (ogTitleVal) {
        var ogTitle = document.querySelector(
          'meta[property="og:title"]'
        )
        if (ogTitle) ogTitle.content = ogTitleVal
      }
    }

    document.querySelectorAll('.lang-btn-text').forEach(function (el) {
      el.textContent = lang === 'es' ? 'EN' : 'ES'
    })
  }

  function setLang(lang) {
    if (!dict[lang]) return
    localStorage.setItem(LANG_KEY, lang)
    translate()
  }

  function toggleLang() {
    setLang(getLang() === 'es' ? 'en' : 'es')
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', translate)
  } else {
    translate()
  }

  window.i18n = { t: t, setLang: setLang, toggleLang: toggleLang, getLang: getLang }
})()
