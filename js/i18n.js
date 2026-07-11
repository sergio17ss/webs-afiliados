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
        footerLinkHeadphones: 'Auriculares',
        footerLinkChairs: 'Sillas',
        footerLinkKeyboards: 'Teclados',
        footerLinkNutrition: 'Nutrición',
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
        card3Title: 'Teclados',
        card3Desc:
          'Top 5 mejores teclados 2026 &middot; Comparativa',
        card4Title: 'Nutrición Deportiva',
        card4Desc:
          'Top 5 mejores suplementos 2026 &middot; Comparativa',
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
      teclados: {
        metaTitle: 'Top 10 Mejores Teclados 2026 · Gaming y Oficina',
        metaDesc: 'Comparativa de los 10 mejores teclados: 5 gaming y 5 de oficina. Logitech G413, Razer Huntsman, MX Keys S y más. Precios y análisis detallado.',
        ogTitle: 'Top 10 Mejores Teclados 2026 · Gaming y Oficina',
        category: '⌨️ Teclados',
        title: 'Top 10 teclados: gaming y oficina en 2026',
        metaUpdated: '📅 Actualizado: julio 2026',
        metaAuthor: '✍️ By: DuoStudio',
        introP1: '<strong>El teclado es el periférico que más usas.</strong> Elegir bien marca la diferencia tanto en gaming como en productividad. Un teclado mecánico adecuado mejora tu rendimiento en juegos; uno ergonómico reduce la fatiga en jornadas largas de trabajo.',
        introP2: 'Hemos analizado los <strong>10 teclados más vendidos en Amazon España</strong> divididos en dos categorías: gaming y oficina. Todos los modelos son reales, con precios y valoraciones actualizados a julio de 2026.',
        gamingTitle: '🎮 Top 5 teclados gaming',
        gamingIntro: 'Estos son los teclados gaming más vendidos y mejor valorados en Amazon España, ordenados por relación calidad-precio:',
        g1Title: '1. Logitech G413 SE — Mejor calidad-precio',
        g1CardTitle: 'Logitech G413 SE',
        g1CardRating: '★★★★ 4.3/5 · 1.800 valoraciones',
        g1CardPrice: '~55 €',
        g1Desc1: 'El <strong>Logitech G413 SE</strong> es un teclado mecánico completo con interruptores táctiles Romer-G. Su construcción en aleación de aluminio y teclas PBT lo hacen duradero y estable. La retroiluminación LED blanca es limpia y profesional.',
        g1Desc2: 'Incluye anti-ghosting y teclas multimedia. Es compatible con Windows y macOS. Aunque no tiene RGB ni software G Hub, su fiabilidad y precio lo convierten en la opción más equilibrada.',
        g1Pros: '<li>Construcción en aluminio muy robusta</li><li>Teclas PBT resistentes al desgaste</li><li>Precio ajustado para un mecánico de calidad</li><li>Anti-ghosting en todas las teclas</li>',
        g1Cons: '<li>Sin iluminación RGB (solo blanca)</li><li>No compatible con G Hub</li><li>Switches no intercambiables</li>',
        g1For: '<strong>¿Para quién es?</strong> Para quien busca su primer teclado mecánico gaming con buena calidad sin gastar más de 60 €. Ideal tanto para jugar como para escribir.',
        g2Title: '2. KROM KASIC — Teclado gaming mecánico económico',
        g2CardTitle: 'KROM KASIC',
        g2CardRating: '★★★★ 4.1/5 · 2.200 valoraciones',
        g2CardPrice: '~40 €',
        g2Desc1: 'El <strong>KROM KASIC</strong> es un teclado mecánico con switches rojos lineales y retroiluminación Rainbow. Su diseño compacto y layout español lo hacen muy accesible para el mercado nacional.',
        g2Desc2: 'Ofrece 25 teclas anti-ghosting, reposamuñecas integrado y teclas multimedia. No es el más premium del mercado, pero cumple sobradamente para quien empieza en el gaming.',
        g2Pros: '<li>Precio imbatible para un mecánico</li><li>Layout español con Ñ</li><li>Reposamuñecas integrado</li><li>Switches rojos silenciosos</li>',
        g2Cons: '<li>Plásticos algo justos</li><li>Sin software de configuración</li><li>Rainbow fijo, no RGB personalizable</li>',
        g2For: '<strong>¿Para quién es?</strong> Para jugadores ocasionales o con presupuesto muy ajustado que quieren la experiencia mecánica sin gastar más de 40 €.',
        g3Title: '3. Razer Huntsman V3 Pro — Máximo rendimiento competitivo',
        g3CardTitle: 'Razer Huntsman V3 Pro',
        g3CardRating: '★★★★★ 4.6/5 · 1.200 valoraciones',
        g3CardPrice: '~210 €',
        g3Desc1: 'El <strong>Razer Huntsman V3 Pro</strong> utiliza switches ópticos analógicos con tecnología Snap Tap y Rapid Trigger. Detecta la profundidad de pulsación, lo que permite respuestas ultras rápidas sin recorrido muerto.',
        g3Desc2: 'Incluye dial multifunción, reposamuñecas magnético y memoria integrada para perfiles. Es el teclado de referencia para esports y juegos competitivos donde cada milisegundo cuenta.',
        g3Pros: '<li>Switches ópticos analógicos más rápidos del mercado</li><li>Snap Tap y Rapid Trigger para ventaja competitiva</li><li>Construcción premium con reposamuñecas magnético</li><li>Dial multifunción y memoria de perfiles</li>',
        g3Cons: '<li>Precio muy elevado</li><li>Sin layout español (QWERTY US)</li><li>Excesivo para jugadores casuales</li>',
        g3For: '<strong>¿Para quién es?</strong> Para jugadores competitivos de FPS que quieren la máxima velocidad de respuesta. También para entusiastas del hardware premium.',
        g4Title: '4. Corsair K70 RGB Pro — Clásico premium con Cherry MX',
        g4CardTitle: 'Corsair K70 RGB Pro',
        g4CardRating: '★★★★ 4.4/5 · 3.500 valoraciones',
        g4CardPrice: '~150 €',
        g4Desc1: 'El <strong>Corsair K70 RGB Pro</strong> es un teclado mecánico con switches Cherry MX, marco de aluminio anodizado y retroiluminación RGB por tecla. Incluye reposamuñecas desmontable de textura suave.',
        g4Desc2: 'Incorpora modo torneo (bloquea teclas no esenciales), puerto USB pasante y rueda de volumen dedicada. El software iCUE permite personalizar cada tecla, perfiles y efectos RGB.',
        g4Pros: '<li>Switches Cherry MX de máxima calidad</li><li>Marco de aluminio muy sólido</li><li>RGB brillante con software iCUE completo</li><li>Modo torneo y rueda de volumen</li>',
        g4Cons: '<li>Precio elevado</li><li>Cable USB grueso, no desmontable</li><li>El software iCUE consume recursos</li>',
        g4For: '<strong>¿Para quién es?</strong> Para entusiastas del gaming que quieren un teclado robusto con la mejor calidad de switches y personalización RGB total.',
        g5Title: '5. EPOMAKER Ajazz AK820 Pro — Teclado 75% inalámbrico y versátil',
        g5CardTitle: 'EPOMAKER Ajazz AK820 Pro',
        g5CardRating: '★★★★ 4.3/5 · 850 valoraciones',
        g5CardPrice: '~70 €',
        g5Desc1: 'El <strong>EPOMAKER Ajazz AK820 Pro</strong> es un teclado mecánico 75% con pantalla LCD y perilla de control. Conexión inalámbrica 2.4G, Bluetooth y USB-C. Switches hot-swappables que permiten cambiar los interruptores sin soldar.',
        g5Desc2: 'Distribución española, iluminación RGB y software personalizable. La pantalla muestra información del sistema o animaciones. Muy valorado por su versatilidad y formato compacto.',
        g5Pros: '<li>Formato 75% compacto con teclas de función</li><li>Switches hot-swappables</li><li>Triple conexión: 2.4G, BT, USB-C</li><li>Pantalla LCD y perilla incluida</li>',
        g5Cons: '<li>Marca menos conocida</li><li>Batería limitada (unas 40h sin RGB)</li><li>Precio algo alto para su segmento</li>',
        g5For: '<strong>¿Para quién es?</strong> Para quienes quieren un teclado gaming compacto, inalámbrico y personalizable. Ideal para escritorios pequeños o llevar de viaje.',
        gFinalTitle: 'Comparativa teclados gaming',
        gT2Th1: 'Modelo',
        gT2Th2: 'Precio',
        gT2Th3: 'Formato',
        gT2Th4: 'Switches',
        gT2Th5: 'Conexión',
        gT2Th6: 'Ideal para',
        gBest1: 'Mejor calidad-precio',
        gBest2: 'Económico mecánico',
        gBest3: 'Máximo rendimiento',
        gBest4: 'Premium Cherry MX',
        gBest5: 'Compacto versátil',
        officeTitle: '💼 Top 5 teclados de oficina',
        officeIntro: 'Teclados diseñados para productividad, confort y uso prolongado. Ordenados por relación calidad-precio:',
        o1Title: '1. Logitech MX Keys S — Mejor teclado profesional',
        o1CardTitle: 'Logitech MX Keys S',
        o1CardRating: '★★★★★ 4.7/5 · 4.200 valoraciones',
        o1CardPrice: '~99 €',
        o1Desc1: 'El <strong>Logitech MX Keys S</strong> es el teclado de oficina más vendido por una razón. Teclas esféricas con retroiluminación adaptativa que se enciende al acercar las manos. Conexión Bluetooth o Logi Bolt, con hasta 3 dispositivos simultáneos.',
        o1Desc2: 'Sensación de escritura precisa pero silenciosa. Batería recargable de 10 días con retroiluminación, 5 meses sin ella. Compatible con Windows, macOS, Linux y ChromeOS.',
        o1Pros: '<li>Sensación de escritura premium</li><li>Retroiluminación adaptativa inteligente</li><li>Conexión multi-dispositivo (hasta 3)</li><li>Batería de larga duración</li>',
        o1Cons: '<li>Precio alto para un teclado de membrana</li><li>No es mecánico</li><li>Perfil bajo: no apto para todos los gustos</li>',
        o1For: '<strong>¿Para quién es?</strong> Para profesionales que escriben a diario y quieren la mejor experiencia de escritura inalámbrica. Ideal para ofimática, programación y redacción.',
        o2Title: '2. Logitech ERGO K860 — Máxima ergonomía split',
        o2CardTitle: 'Logitech ERGO K860',
        o2CardRating: '★★★★ 4.5/5 · 3.240 valoraciones',
        o2CardPrice: '~120 €',
        o2Desc1: 'El <strong>Logitech ERGO K860</strong> es un teclado ergonómico partido con curvatura natural y reposamuñecas integrado de memory foam. Reduce la tensión en muñecas y antebrazos hasta un 21% según estudios.',
        o2Desc2: 'Incluye elevación ajustable (tenting de 7°), conexión Bluetooth y Logi Bolt. Funciona con 2 pilas AAA que duran hasta 2 años. Compatible con Windows, macOS, ChromeOS y Android.',
        o2Pros: '<li>Diseño partido que mejora la postura</li><li>Reposamuñecas integrado muy cómodo</li><li>Elevación ajustable</li><li>Duración de pilas excepcional</li>',
        o2Cons: '<li>Curva de aprendizaje de 1-2 semanas</li><li>Ocupa más espacio en la mesa</li><li>Sin retroiluminación</li>',
        o2For: '<strong>¿Para quién es?</strong> Para personas con molestias en muñecas o que pasan más de 6 horas diarias escribiendo. También para quienes quieren prevenir lesiones por esfuerzo repetitivo.',
        o3Title: '3. Cherry DW 9000 Slim — Profesional silencioso',
        o3CardTitle: 'Cherry DW 9000 Slim',
        o3CardRating: '★★★★ 4.2/5 · 1.500 valoraciones',
        o3CardPrice: '~60 €',
        o3Desc1: 'El <strong>Cherry DW 9000 Slim</strong> es un teclado inalámbrico de perfil bajo con teclas silenciosas. Diseño profesional en color negro, con teclado numérico completo y receptor USB unificador.',
        o3Desc2: 'Las teclas Chiclet ofrecen una escritura precisa y muy silenciosa, ideal para oficinas compartidas. Incluye teclas de acceso directo a calculadora, email y navegador.',
        o3Pros: '<li>Teclas muy silenciosas</li><li>Perfil bajo y diseño profesional</li><li>Teclado numérico completo</li><li>Marca alemana de confianza</li>',
        o3Cons: '<li>Sin retroiluminación</li><li>Solo conexión USB (sin Bluetooth)</li><li>No recargable (pilas)</li>',
        o3For: '<strong>¿Para quién es?</strong> Para entornos de oficina donde el ruido de las teclas molesta. Ideal para open spaces y perfiles profesionales que necesitan un teclado discreto y fiable.',
        o4Title: '4. Logitech Wave Keys — Ergonómico asequible',
        o4CardTitle: 'Logitech Wave Keys',
        o4CardRating: '★★★★ 4.3/5 · 900 valoraciones',
        o4CardPrice: '~55 €',
        o4Desc1: 'El <strong>Logitech Wave Keys</strong> es un teclado ergonómico con diseño ondulado y reposamuñecas integrado. Conexión Bluetooth y Logi Bolt, con duración de pilas de hasta 3 años.',
        o4Desc2: 'Su forma curva mantiene las muñecas en una posición natural sin la curva de aprendizaje de los teclados partidos. Ideal como primer teclado ergonómico.',
        o4Pros: '<li>Precio muy asequible para un ergonómico</li><li>Reposamuñecas integrado cómodo</li><li>Fácil adaptación (sin curva de aprendizaje)</li><li>Batería de larga duración</li>',
        o4Cons: '<li>No es mecánico</li><li>Sin retroiluminación</li><li>Tamaño completo (ocupa espacio)</li>',
        o4For: '<strong>¿Para quién es?</strong> Para quien quiere probar la ergonomía sin invertir mucho dinero ni tiempo de adaptación. Perfecto como regalo o para empezar a cuidar la postura.',
        o5Title: '5. TECKNET Mini — Teclado ultra económico',
        o5CardTitle: 'TECKNET Mini',
        o5CardRating: '★★★★ 4.5/5 · 2.365 valoraciones',
        o5CardPrice: '~17 €',
        o5Desc1: 'El <strong>TECKNET Mini</strong> es un teclado inalámbrico ultra delgado a un precio imbatible. Conexión 2.4 GHz con receptor USB, diseño compacto y teclas silenciosas de perfil bajo.',
        o5Desc2: 'Incluye teclado numérico y teclas multimedia. Funciona con una pila AAA incluida. Compatible con Windows, Mac y Android TV. Más de 200 unidades compradas al mes.',
        o5Pros: '<li>Precio increíblemente bajo</li><li>Diseño slim y ligero</li><li>Teclas silenciosas</li><li>Incluye teclado numérico</li>',
        o5Cons: '<li>Plástico endeble</li><li>Sin Bluetooth (solo 2.4GHz)</li><li>No recargable</li>',
        o5For: '<strong>¿Para quién es?</strong> Para quien necesita un teclado funcional al menor precio posible. Ideal como secundario, para oficina básica o para Smart TV.',
        oFinalTitle: 'Comparativa teclados oficina',
        oT2Th1: 'Modelo',
        oT2Th2: 'Precio',
        oT2Th3: 'Tipo',
        oT2Th4: 'Conexión',
        oT2Th5: 'Ergonomía',
        oT2Th6: 'Ideal para',
        oBest1: 'Mejor profesional',
        oBest2: 'Máxima ergonomía',
        oBest3: 'Silencioso oficina',
        oBest4: 'Ergonómico económico',
        oBest5: 'Ultra económico',
        conclusionTitle: 'Conclusión — ¿qué teclado comprar?',
        conclusionIntro: 'La elección depende de tu uso principal y presupuesto:',
        conclusionP1: '<strong>🥇 Para jugar con presupuesto ajustado:</strong> <strong>Logitech G413 SE</strong> — el mejor mecánico calidad-precio por 55 €.',
        conclusionP2: '<strong>🥈 Para gaming competitivo:</strong> <strong>Razer Huntsman V3 Pro</strong> — la máxima velocidad de respuesta, si el presupuesto lo permite.',
        conclusionP3: '<strong>🥉 Para trabajar:</strong> <strong>Logitech MX Keys S</strong> — el mejor teclado profesional, cómodo y productivo.',
        conclusionP4: '<strong>💼 Para oficina con molestias:</strong> <strong>Logitech ERGO K860</strong> — invierte en salud si pasas muchas horas escribiendo.',
        conclusionP5: '<strong>💰 Presupuesto mínimo:</strong> <strong>TECKNET Mini</strong> — por 17 € tienes un teclado inalámbrico que cumple.',
        ctaBtn: '🛒 Ver ofertas en Amazon',
        footerBrand: '⌨️ Mejores Teclados 2026',
        footerDesc: 'Guía actualizada con los teclados gaming y de oficina más vendidos en Amazon España. Comparamos precios, valoraciones y características.',
        footerLinks: 'Enlaces',
        footerLegal: 'Legal',
        footerLinkHome: 'Inicio',
        footerLinkKeyboards: 'Teclados',
        buyingGuideTitle: 'Guía de compra: cómo elegir teclado',
        buyingGuide1: '<strong>Mecánico vs membrana.</strong> Los mecánicos duran más (50M pulsaciones) y ofrecen mejor respuesta táctil. Los de membrana son más baratos y silenciosos. Para gaming diario, elige mecánico.',
        buyingGuide2: '<strong>Switches.</strong> Rojos (lineales) son los más populares para gaming. Azules (click) dan mejor retroalimentación al escribir. Marrones (táctiles) son un punto medio. Para oficina, busca switches silenciosos.',
        buyingGuide3: '<strong>Formato.</strong> Completo (105 teclas) incluye numérico. TKL (87) ahorra espacio. 75% o 60% son los más compactos. Elige según el espacio de tu escritorio y si usas el teclado numérico.',
        faqTitle: 'Preguntas frecuentes',
        faqQ1: '¿Merece la pena un teclado mecánico para gaming?',
        faqA1: 'Sí. La diferencia en respuesta, durabilidad y precisión respecto a uno de membrana es notable. Un mecánico de 40–50 € ya ofrece ventajas reales en juegos.',
        faqQ2: '¿Puedo usar un teclado gaming para trabajar?',
        faqA2: 'Sí, pero ten en cuenta el ruido. Los switches rojos o marrones son aceptables en oficina; los azules pueden molestar a compañeros. Los teclados gaming tienen RGB que puede no encajar en entornos profesionales.',
        faqQ3: '¿Teclado inalámbrico o con cable?',
        faqA3: 'Para gaming competitivo, cable (menor latencia). Para uso diario y ofimática, inalámbrico es más cómodo. Los inalámbricos modernos tienen latencia imperceptible para la mayoría de usuarios.',
      },
      nutricion: {
        metaTitle: 'Top 5 Mejores Suplementos Deportivos 2026 · Proteína y Creatina',
        metaDesc: 'Comparativa de los 5 mejores suplementos deportivos en Amazon España: proteína whey, creatina y más. Optimum Nutrition, MyProtein, Dymatize. Precios y análisis.',
        ogTitle: 'Top 5 Mejores Suplementos Deportivos 2026 · Guía Completa',
        category: '💪 Nutrición Deportiva',
        title: 'Top 5 suplementos deportivos para 2026',
        metaUpdated: '📅 Actualizado: julio 2026',
        metaAuthor: '✍️ By: DuoStudio',
        introP1: '<strong>Los suplementos no reemplazan una buena dieta, pero pueden ayudarte a alcanzar tus objetivos.</strong> Tanto si buscas ganar masa muscular, mejorar tu rendimiento o acelerar la recuperación, elegir el producto adecuado marca la diferencia.',
        introP2: 'Hemos analizado los <strong>5 suplementos más vendidos y mejor valorados en Amazon España</strong> para ayudarte a elegir. Todos los productos son reales, con precios actualizados a julio de 2026.',
        p1Title: '1. Optimum Nutrition Gold Standard 100% Whey — La más vendida del mundo',
        p1CardTitle: 'ON Gold Standard Whey',
        p1CardRating: '★★★★★ 4.7/5 · 12.000 valoraciones',
        p1CardPrice: '~65 € (2,27 kg)',
        p1Desc1: 'La <strong>Optimum Nutrition Gold Standard 100% Whey</strong> es la proteína más vendida del mundo desde hace más de 20 años. Mezcla de aislado, concentrado e hidrolizado de suero de leche. Aporta 24 g de proteína y 5 g de BCAA por dosis.',
        p1Desc2: 'Disponible en más de 15 sabores. Baja en grasa y azúcares. Se disuelve bien en agua o leche. Fabricada con control de calidad, con análisis de laboratorio independientes que confirman su pureza.',
        p1Pros: '<li>Marca más vendida y fiable del mundo</li><li>24 g de proteína por dosis con BCAA incluidos</li><li>Se disuelve fácilmente</li><li>Múltiples sabores disponibles</li>',
        p1Cons: '<li>Precio superior a marcas blancas</li><li>Contiene edulcorantes artificiales</li><li>No apta para veganos</li>',
        p1For: '<strong>¿Para quién es?</strong> Para cualquier persona que entrene con regularidad y quiera una proteína de calidad contrastada. La opción más segura si no sabes cuál elegir.',
        p2Title: '2. MyProtein Impact Whey Protein — Mejor calidad-precio',
        p2CardTitle: 'MyProtein Impact Whey',
        p2CardRating: '★★★★ 4.5/5 · 8.500 valoraciones',
        p2CardPrice: '~35 € (1 kg)',
        p2Desc1: 'La <strong>MyProtein Impact Whey Protein</strong> es la proteína con mejor relación calidad-precio del mercado. Suero de leche concentrado con 21 g de proteína y 4,5 g de BCAA por dosis. Disponible en más de 40 sabores.',
        p2Desc2: 'MyProtein realiza análisis de laboratorio independientes y publica los resultados. Su envase de 1 kg es ideal para probar antes de comprar grandes formatos. Perfecta para uso diario.',
        p2Pros: '<li>Precio muy competitivo</li><li>Análisis de laboratorio públicos</li><li>Gran variedad de sabores</li><li>Buen perfil nutricional</li>',
        p2Cons: '<li>Solo concentrado (no incluye aislado)</li><li>Algunos sabores son artificiales</li><li>La digestión varía según la persona</li>',
        p2For: '<strong>¿Para quién es?</strong> Para quienes buscan una proteína de calidad al mejor precio posible. Ideal para consumo diario sin gastar demasiado.',
        p3Title: '3. MyProtein Creatine Monohydrate — La creatina más popular',
        p3CardTitle: 'MyProtein Creatine Monohydrate',
        p3CardRating: '★★★★★ 4.7/5 · 5.000 valoraciones',
        p3CardPrice: '~20 € (1 kg)',
        p3Desc1: 'La <strong>MyProtein Creatine Monohydrate</strong> es uno de los suplementos más vendidos en Amazon España. Creatina monohidrato en polvo micronizada, sin sabor, fácil de mezclar. 100% pura, sin aditivos.',
        p3Desc2: 'La creatina es el suplemento con más evidencia científica: mejora la fuerza, la potencia y la recuperación muscular. Dosis recomendada: 3-5 g al día. Un envase de 1 kg dura unos 6-8 meses.',
        p3Pros: '<li>100% creatina monohidrato pura</li><li>Polvo micronizado se disuelve bien</li><li>Precio imbatible por kg</li><li>Evidencia científica sólida</li>',
        p3Cons: '<li>Solo un ingrediente (no esperes milagros)</li><li>Puede causar hinchazón inicial</li><li>Requiere constancia diaria</li>',
        p3For: '<strong>¿Para quién es?</strong> Para cualquier deportista que entrene fuerza o alta intensidad. Es el suplemento básico recomendado por la mayoría de expertos en nutrición deportiva.',
        p4Title: '4. Dymatize ISO 100 Hydrolyzed — Proteína premium de absorción rápida',
        p4CardTitle: 'Dymatize ISO 100',
        p4CardRating: '★★★★★ 4.6/5 · 4.200 valoraciones',
        p4CardPrice: '~55 € (1,8 kg)',
        p4Desc1: 'El <strong>Dymatize ISO 100</strong> es un hidrolizado de proteína de suero con 25 g de proteína por dosis y solo 0,5 g de grasa. Procesado para una absorción ultra rápida, ideal para post-entreno inmediato.',
        p4Desc2: 'Bajo en lactosa, apto para personas sensibles. Contiene 5,5 g de BCAA. Certificado por Informed-Sport (libre de sustancias prohibidas). Sabor excelente comparado con otras proteínas.',
        p4Pros: '<li>Absorción ultra rápida (hidrolizado)</li><li>Muy bajo en lactosa</li><li>Certificado Informed-Sport</li><li>Sabor superior a la media</li>',
        p4Cons: '<li>Precio elevado por dosis</li><li>Sabor limitado a 8 opciones</li><li>Puede ser excesivo si no entrenas intenso</li>',
        p4For: '<strong>¿Para quién es?</strong> Para deportistas avanzados que entrenan con alta intensidad y quieren la recuperación más rápida posible. Ideal para personas con intolerancia a la lactosa.',
        p5Title: '5. HSN EvoWhey — Mejor proteína española calidad-precio',
        p5CardTitle: 'HSN EvoWhey',
        p5CardRating: '★★★★ 4.4/5 · 2.500 valoraciones',
        p5CardPrice: '~25 € (1 kg)',
        p5Desc1: 'La <strong>HSN EvoWhey</strong> es una proteína de suero concentrado de fabricación española con 22 g de proteína por dosis. Sin aceites ni carbohidratos añadidos. Edulcorada con stevia.',
        p5Desc2: 'HSN es una marca española con laboratorio propio y análisis públicos. Su EvoWhey tiene una excelente relación calidad-precio y está disponible en más de 20 sabores. Envío rápido desde España.',
        p5Pros: '<li>Fabricación española con control de calidad</li><li>Edulcorada con stevia (sin aspartamo)</li><li>Precio muy competitivo</li><li>Análisis de laboratorio públicos</li>',
        p5Cons: '<li>Marca menos conocida internacionalmente</li><li>Solo concentrado (no aislado)</li><li>Disponibilidad limitada fuera de España</li>',
        p5For: '<strong>¿Para quién es?</strong> Para quienes prefieren marcas españolas con fabricación propia. Ideal si buscas una proteína sin edulcorantes artificiales a buen precio.',
        finalTitle: 'Tabla comparativa final',
        t2Th1: 'Producto',
        t2Th2: 'Precio',
        t2Th3: 'Proteína/dosis',
        t2Th4: 'Tipo',
        t2Th5: 'Valoración',
        t2Th6: 'Ideal para',
        t2P1Best: 'La más vendida',
        t2P2Best: 'Mejor calidad-precio',
        t2P3Best: 'Suplemento básico',
        t2P4Best: 'Premium rápida',
        t2P5Best: 'Marca española',
        conclusionTitle: 'Conclusión — ¿qué suplemento elegir?',
        conclusionIntro: 'Depende de tu objetivo y presupuesto:',
        conclusionP1: '<strong>🥇 Para la mayoría:</strong> <strong>ON Gold Standard Whey</strong> — la proteína más fiable del mercado, calidad garantizada.',
        conclusionP2: '<strong>🥈 Si buscas ahorrar:</strong> <strong>MyProtein Impact Whey</strong> — excelente relación calidad-precio para el día a día.',
        conclusionP3: '<strong>🥉 Suplemento imprescindible:</strong> <strong>MyProtein Creatina</strong> — el básico con más ciencia detrás, 20 € para 8 meses.',
        conclusionP4: '<strong>⚡ Recuperación rápida:</strong> <strong>Dymatize ISO 100</strong> — si entrenas duro y quieres lo mejor para post-entreno.',
        conclusionP5: '<strong>🇪🇸 Marca española:</strong> <strong>HSN EvoWhey</strong> — calidad nacional con stevia y buen precio.',
        ctaBtn: '🛒 Ver ofertas en Amazon',
        footerBrand: '💪 Mejores Suplementos 2026',
        footerDesc: 'Guía actualizada con los suplementos deportivos más vendidos en Amazon España. Comparamos proteínas, creatina y más para ayudarte a elegir.',
        footerLinks: 'Enlaces',
        footerLegal: 'Legal',
        footerLinkHome: 'Inicio',
        footerLinkNutrition: 'Nutrición',
        buyingGuideTitle: 'Guía de compra: cómo elegir suplementos',
        buyingGuide1: '<strong>Proteína whey.</strong> Elige concentrado para uso diario (21-24 g proteína/dosis), aislado si buscas menos grasa e hidrolizado para absorción rápida. La mayoría empieza con concentrado.',
        buyingGuide2: '<strong>Creatina.</strong> La monohidrato es la más estudiada y eficaz. 3-5 g al día son suficientes. No necesitas hacer ciclos ni carga. Tómala todos los días, no solo cuando entrenes.',
        buyingGuide3: '<strong>Objetivo claro.</strong> Para ganar masa muscular: proteína whey + creatina. Para rendimiento: creatina + cafeína. Para recuperación: proteína + glutamina. No compres lo que no necesitas.',
        faqTitle: 'Preguntas frecuentes',
        faqQ1: '¿Necesito suplementos para ganar músculo?',
        faqA1: 'No son imprescindibles, pero facilitan alcanzar los requerimientos diarios de proteína. Si ya llegas a 1,6-2 g de proteína/kg de peso con comida real, no los necesitas.',
        faqQ2: '¿Cuándo tomar la proteína?',
        faqA2: 'El momento óptimo es después de entrenar, pero el total diario importa más que el timing. Puedes tomarla en cualquier momento del día para alcanzar tus objetivos de proteína.',
        faqQ3: '¿La creatina es segura?',
        faqA3: 'Sí, es el suplemento más estudiado del mundo. Miles de estudios confirman su seguridad a largo plazo en dosis de 3-5 g diarios. No daña los riñones en personas sanas.',
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
        footerLinkHeadphones: 'Headphones',
        footerLinkChairs: 'Chairs',
        footerLinkKeyboards: 'Keyboards',
        footerLinkNutrition: 'Nutrition',
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
        card3Title: 'Keyboards',
        card3Desc:
          'Top 5 best keyboards 2026 &middot; Comparison',
        card4Title: 'Sports Nutrition',
        card4Desc:
          'Top 5 best supplements 2026 &middot; Comparison',
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
      teclados: {
        metaTitle: 'Top 10 Best Keyboards 2026 · Gaming & Office',
        metaDesc: 'Comparison of the 10 best keyboards: 5 gaming and 5 office. Logitech G413, Razer Huntsman, MX Keys S and more. Prices and detailed analysis.',
        ogTitle: 'Top 10 Best Keyboards 2026 · Gaming & Office',
        category: '⌨️ Keyboards',
        title: 'Top 10 keyboards: gaming and office in 2026',
        metaUpdated: '📅 Updated: July 2026',
        metaAuthor: '✍️ By: DuoStudio',
        introP1: '<strong>Your keyboard is the peripheral you use most.</strong> Choosing the right one makes a big difference in both gaming and productivity. A good mechanical keyboard improves your gaming performance; an ergonomic one reduces fatigue during long workdays.',
        introP2: 'We have analysed the <strong>10 best-selling keyboards on Amazon Spain</strong> divided into two categories: gaming and office. All models are real, with up-to-date prices and ratings as of July 2026.',
        gamingTitle: '🎮 Top 5 gaming keyboards',
        gamingIntro: 'These are the best-selling and highest-rated gaming keyboards on Amazon Spain, ordered by value for money:',
        g1Title: '1. Logitech G413 SE — Best value for money',
        g1CardTitle: 'Logitech G413 SE',
        g1CardRating: '★★★★ 4.3/5 · 1,800 ratings',
        g1CardPrice: '~55 €',
        g1Desc1: 'The <strong>Logitech G413 SE</strong> is a full-size mechanical keyboard with tactile Romer-G switches. Its aluminium alloy frame and PBT keycaps make it durable and stable. Clean white LED backlighting.',
        g1Desc2: 'Includes anti-ghosting and multimedia keys. Compatible with Windows and macOS. Although it lacks RGB and G Hub software, its reliability and price make it the most balanced choice.',
        g1Pros: '<li>Very sturdy aluminium construction</li><li>PBT keycaps resist wear</li><li>Great price for a quality mechanical</li><li>Anti-ghosting on all keys</li>',
        g1Cons: '<li>No RGB lighting (white only)</li><li>Not compatible with G Hub</li><li>Non-hot-swappable switches</li>',
        g1For: '<strong>Who is it for?</strong> For anyone looking for their first quality mechanical gaming keyboard without spending over 60 €. Great for both gaming and typing.',
        g2Title: '2. KROM KASIC — Budget mechanical gaming',
        g2CardTitle: 'KROM KASIC',
        g2CardRating: '★★★★ 4.1/5 · 2,200 ratings',
        g2CardPrice: '~40 €',
        g2Desc1: 'The <strong>KROM KASIC</strong> is a mechanical keyboard with linear red switches and Rainbow backlighting. Its compact design and Spanish layout make it very accessible for the local market.',
        g2Desc2: 'Offers 25 anti-ghosting keys, integrated wrist rest, and multimedia keys. Not the most premium on the market, but more than enough for beginners.',
        g2Pros: '<li>Unbeatable price for a mechanical</li><li>Spanish layout with Ñ</li><li>Integrated wrist rest</li><li>Quiet red switches</li>',
        g2Cons: '<li>Plastic feels somewhat cheap</li><li>No configuration software</li><li>Fixed Rainbow, not custom RGB</li>',
        g2For: '<strong>Who is it for?</strong> For casual gamers or those on a very tight budget who want the mechanical experience for under 40 €.',
        g3Title: '3. Razer Huntsman V3 Pro — Maximum competitive performance',
        g3CardTitle: 'Razer Huntsman V3 Pro',
        g3CardRating: '★★★★★ 4.6/5 · 1,200 ratings',
        g3CardPrice: '~210 €',
        g3Desc1: 'The <strong>Razer Huntsman V3 Pro</strong> uses analog optical switches with Snap Tap and Rapid Trigger technology. It detects keypress depth, enabling ultra-fast responses with zero dead travel.',
        g3Desc2: 'Includes a multi-function dial, magnetic wrist rest, and onboard profile memory. The reference keyboard for esports and competitive gaming.',
        g3Pros: '<li>Fastest analog optical switches on the market</li><li>Snap Tap and Rapid Trigger for competitive edge</li><li>Premium build with magnetic wrist rest</li><li>Multi-function dial and profile memory</li>',
        g3Cons: '<li>Very expensive</li><li>US layout only (no Spanish Ñ)</li><li>Overkill for casual gamers</li>',
        g3For: '<strong>Who is it for?</strong> For competitive FPS players who want maximum response speed. Also for hardware enthusiasts.',
        g4Title: '4. Corsair K70 RGB Pro — Premium classic with Cherry MX',
        g4CardTitle: 'Corsair K70 RGB Pro',
        g4CardRating: '★★★★ 4.4/5 · 3,500 ratings',
        g4CardPrice: '~150 €',
        g4Desc1: 'The <strong>Corsair K70 RGB Pro</strong> is a mechanical keyboard with Cherry MX switches, anodised aluminium frame, and per-key RGB backlighting. Includes a detachable soft-texture wrist rest.',
        g4Desc2: 'Features tournament mode (locks non-essential keys), USB passthrough port, and a dedicated volume wheel. iCUE software allows customisation of each key, profiles, and RGB effects.',
        g4Pros: '<li>Highest quality Cherry MX switches</li><li>Very solid aluminium frame</li><li>Bright RGB with complete iCUE software</li><li>Tournament mode and volume wheel</li>',
        g4Cons: '<li>High price</li><li>Thick USB cable, non-detachable</li><li>iCUE software consumes resources</li>',
        g4For: '<strong>Who is it for?</strong> For gaming enthusiasts who want a robust keyboard with the best switch quality and full RGB customisation.',
        g5Title: '5. EPOMAKER Ajazz AK820 Pro — 75% wireless and versatile',
        g5CardTitle: 'EPOMAKER Ajazz AK820 Pro',
        g5CardRating: '★★★★ 4.3/5 · 850 ratings',
        g5CardPrice: '~70 €',
        g5Desc1: 'The <strong>EPOMAKER Ajazz AK820 Pro</strong> is a 75% mechanical keyboard with LCD screen and control knob. Wireless 2.4G, Bluetooth and USB-C connectivity. Hot-swappable switches.',
        g5Desc2: 'Spanish layout, RGB lighting and customisable software. The screen shows system information or animations. Highly valued for its versatility and compact format.',
        g5Pros: '<li>Compact 75% format with function keys</li><li>Hot-swappable switches</li><li>Triple connection: 2.4G, BT, USB-C</li><li>LCD screen and knob included</li>',
        g5Cons: '<li>Less well-known brand</li><li>Limited battery (~40h without RGB)</li><li>Price slightly high for its segment</li>',
        g5For: '<strong>Who is it for?</strong> For those who want a compact, wireless, customisable gaming keyboard. Ideal for small desks or travel.',
        gFinalTitle: 'Gaming keyboard comparison',
        gT2Th1: 'Model',
        gT2Th2: 'Price',
        gT2Th3: 'Format',
        gT2Th4: 'Switches',
        gT2Th5: 'Connection',
        gT2Th6: 'Best for',
        gBest1: 'Best value',
        gBest2: 'Budget mechanical',
        gBest3: 'Maximum performance',
        gBest4: 'Premium Cherry MX',
        gBest5: 'Compact versatile',
        officeTitle: '💼 Top 5 office keyboards',
        officeIntro: 'Keyboards designed for productivity, comfort and prolonged use. Ordered by value for money:',
        o1Title: '1. Logitech MX Keys S — Best professional keyboard',
        o1CardTitle: 'Logitech MX Keys S',
        o1CardRating: '★★★★★ 4.7/5 · 4,200 ratings',
        o1CardPrice: '~99 €',
        o1Desc1: 'The <strong>Logitech MX Keys S</strong> is the best-selling office keyboard for a reason. Spherical keys with adaptive backlighting that turns on as your hands approach. Bluetooth or Logi Bolt connection, up to 3 devices simultaneously.',
        o1Desc2: 'Precise yet quiet typing feel. Rechargeable battery lasts 10 days with backlighting, 5 months without. Compatible with Windows, macOS, Linux and ChromeOS.',
        o1Pros: '<li>Premium typing feel</li><li>Intelligent adaptive backlighting</li><li>Multi-device connection (up to 3)</li><li>Long battery life</li>',
        o1Cons: '<li>High price for a membrane keyboard</li><li>Not mechanical</li><li>Low profile: not for everyone</li>',
        o1For: '<strong>Who is it for?</strong> For professionals who type daily and want the best wireless typing experience. Ideal for office work, programming, and writing.',
        o2Title: '2. Logitech ERGO K860 — Maximum split ergonomics',
        o2CardTitle: 'Logitech ERGO K860',
        o2CardRating: '★★★★ 4.5/5 · 3,240 ratings',
        o2CardPrice: '~120 €',
        o2Desc1: 'The <strong>Logitech ERGO K860</strong> is a split ergonomic keyboard with natural curve and integrated memory foam wrist rest. Reduces wrist and forearm strain by up to 21% according to studies.',
        o2Desc2: 'Includes adjustable tenting (7°), Bluetooth and Logi Bolt connection. Runs on 2 AAA batteries lasting up to 2 years. Compatible with Windows, macOS, ChromeOS and Android.',
        o2Pros: '<li>Split design improves posture</li><li>Very comfortable integrated wrist rest</li><li>Adjustable tenting</li><li>Exceptional battery life</li>',
        o2Cons: '<li>1-2 week learning curve</li><li>Takes up more desk space</li><li>No backlighting</li>',
        o2For: '<strong>Who is it for?</strong> For people with wrist discomfort or who spend more than 6 hours a day typing. Also for those wanting to prevent repetitive strain injuries.',
        o3Title: '3. Cherry DW 9000 Slim — Professional and silent',
        o3CardTitle: 'Cherry DW 9000 Slim',
        o3CardRating: '★★★★ 4.2/5 · 1,500 ratings',
        o3CardPrice: '~60 €',
        o3Desc1: 'The <strong>Cherry DW 9000 Slim</strong> is a low-profile wireless keyboard with silent keys. Professional black design, full numeric keypad, and unifying USB receiver.',
        o3Desc2: 'Chiclet keys offer precise and very quiet typing, ideal for shared offices. Includes shortcut keys for calculator, email, and browser.',
        o3Pros: '<li>Very quiet keys</li><li>Low profile and professional design</li><li>Full numeric keypad</li><li>Trusted German brand</li>',
        o3Cons: '<li>No backlighting</li><li>USB only (no Bluetooth)</li><li>Not rechargeable (batteries)</li>',
        o3For: '<strong>Who is it for?</strong> For office environments where keyboard noise is an issue. Ideal for open spaces and professional users who need a discreet, reliable keyboard.',
        o4Title: '4. Logitech Wave Keys — Affordable ergonomic',
        o4CardTitle: 'Logitech Wave Keys',
        o4CardRating: '★★★★ 4.3/5 · 900 ratings',
        o4CardPrice: '~55 €',
        o4Desc1: 'The <strong>Logitech Wave Keys</strong> is an ergonomic keyboard with wave design and integrated wrist rest. Bluetooth and Logi Bolt connection, with battery life of up to 3 years.',
        o4Desc2: 'Its curved shape keeps wrists in a natural position without the learning curve of split keyboards. Ideal as a first ergonomic keyboard.',
        o4Pros: '<li>Very affordable for an ergonomic keyboard</li><li>Comfortable integrated wrist rest</li><li>Easy adaptation (no learning curve)</li><li>Long battery life</li>',
        o4Cons: '<li>Not mechanical</li><li>No backlighting</li><li>Full size (takes up space)</li>',
        o4For: '<strong>Who is it for?</strong> For those wanting to try ergonomics without investing much money or adaptation time. Perfect as a gift or starting point for better posture.',
        o5Title: '5. TECKNET Mini — Ultra-budget keyboard',
        o5CardTitle: 'TECKNET Mini',
        o5CardRating: '★★★★ 4.5/5 · 2,365 ratings',
        o5CardPrice: '~17 €',
        o5Desc1: 'The <strong>TECKNET Mini</strong> is an ultra-slim wireless keyboard at an unbeatable price. 2.4 GHz connection with USB receiver, compact design, and quiet low-profile keys.',
        o5Desc2: 'Includes numeric keypad and multimedia keys. Runs on one included AAA battery. Compatible with Windows, Mac, and Android TV. Over 200 units purchased monthly.',
        o5Pros: '<li>Incredibly low price</li><li>Slim and lightweight design</li><li>Quiet keys</li><li>Includes numeric keypad</li>',
        o5Cons: '<li>Flimsy plastic</li><li>No Bluetooth (2.4GHz only)</li><li>Not rechargeable</li>',
        o5For: '<strong>Who is it for?</strong> For anyone needing a functional keyboard at the lowest possible price. Ideal as a secondary keyboard, basic office, or Smart TV use.',
        oFinalTitle: 'Office keyboard comparison',
        oT2Th1: 'Model',
        oT2Th2: 'Price',
        oT2Th3: 'Type',
        oT2Th4: 'Connection',
        oT2Th5: 'Ergonomics',
        oT2Th6: 'Best for',
        oBest1: 'Best professional',
        oBest2: 'Maximum ergonomics',
        oBest3: 'Silent office',
        oBest4: 'Budget ergonomic',
        oBest5: 'Ultra budget',
        conclusionTitle: 'Conclusion — which keyboard to buy?',
        conclusionIntro: 'The choice depends on your main use and budget:',
        conclusionP1: '<strong>🥇 Gaming on a budget:</strong> <strong>Logitech G413 SE</strong> — the best value mechanical keyboard at 55 €.',
        conclusionP2: '<strong>🥈 Competitive gaming:</strong> <strong>Razer Huntsman V3 Pro</strong> — maximum speed, if your budget allows.',
        conclusionP3: '<strong>🥉 For work:</strong> <strong>Logitech MX Keys S</strong> — the best professional keyboard, comfortable and productive.',
        conclusionP4: '<strong>💼 Office with discomfort:</strong> <strong>Logitech ERGO K860</strong> — invest in your health if you type for hours.',
        conclusionP5: '<strong>💰 Minimum budget:</strong> <strong>TECKNET Mini</strong> — for 17 € you get a wireless keyboard that works.',
        ctaBtn: '🛒 Check prices on Amazon',
        footerBrand: '⌨️ Best Keyboards 2026',
        footerDesc: 'An up-to-date guide to the best-selling gaming and office keyboards on Amazon Spain. We compare prices, ratings, and features.',
        footerLinks: 'Links',
        footerLegal: 'Legal',
        footerLinkHome: 'Home',
        footerLinkKeyboards: 'Keyboards',
        buyingGuideTitle: 'Buying guide: how to choose a keyboard',
        buyingGuide1: '<strong>Mechanical vs membrane.</strong> Mechanical keyboards last longer (50M keystrokes) and offer better tactile response. Membrane ones are cheaper and quieter. For daily gaming, choose mechanical.',
        buyingGuide2: '<strong>Switches.</strong> Red (linear) are most popular for gaming. Blue (clicky) give better typing feedback. Brown (tactile) are a middle ground. For office, look for silent switches.',
        buyingGuide3: '<strong>Format.</strong> Full-size (105 keys) includes numpad. TKL (87) saves space. 75% or 60% are the most compact. Choose based on your desk space and whether you use the numpad.',
        faqTitle: 'Frequently Asked Questions',
        faqQ1: 'Is a mechanical keyboard worth it for gaming?',
        faqA1: 'Yes. The difference in response, durability and precision compared to a membrane one is noticeable. A 40–50 € mechanical already offers real advantages in games.',
        faqQ2: 'Can I use a gaming keyboard for work?',
        faqA2: 'Yes, but consider the noise. Red or brown switches are acceptable in an office; blue ones may bother colleagues. Gaming keyboards have RGB lighting that may not suit professional environments.',
        faqQ3: 'Wireless or wired keyboard?',
        faqA3: 'For competitive gaming, wired (lower latency). For daily use and office work, wireless is more convenient. Modern wireless keyboards have imperceptible latency for most users.',
      },
      nutricion: {
        metaTitle: 'Top 5 Best Sports Supplements 2026 · Protein & Creatine',
        metaDesc: 'Comparison of the 5 best sports supplements on Amazon Spain: whey protein, creatine and more. Optimum Nutrition, MyProtein, Dymatize. Prices and analysis.',
        ogTitle: 'Top 5 Best Sports Supplements 2026 · Complete Guide',
        category: '💪 Sports Nutrition',
        title: 'Top 5 sports supplements for 2026',
        metaUpdated: '📅 Updated: July 2026',
        metaAuthor: '✍️ By: DuoStudio',
        introP1: '<strong>Supplements do not replace a good diet, but they can help you reach your goals.</strong> Whether you want to build muscle, improve performance, or speed up recovery, choosing the right product makes a difference.',
        introP2: 'We have analysed the <strong>5 best-selling and highest-rated sports supplements on Amazon Spain</strong> to help you choose. All products are real, with up-to-date prices as of July 2026.',
        p1Title: '1. Optimum Nutrition Gold Standard 100% Whey — World\'s best seller',
        p1CardTitle: 'ON Gold Standard Whey',
        p1CardRating: '★★★★★ 4.7/5 · 12,000 ratings',
        p1CardPrice: '~65 € (2.27 kg)',
        p1Desc1: '<strong>Optimum Nutrition Gold Standard 100% Whey</strong> has been the world\'s best-selling protein for over 20 years. A blend of whey isolate, concentrate, and hydrolysate. Provides 24 g of protein and 5 g of BCAA per serving.',
        p1Desc2: 'Available in over 15 flavours. Low in fat and sugar. Mixes well in water or milk. Manufactured with quality control and independent lab testing confirming its purity.',
        p1Pros: '<li>World\'s most trusted and best-selling brand</li><li>24 g protein per serving with BCAA</li><li>Mixes easily</li><li>Multiple flavours available</li>',
        p1Cons: '<li>Higher price than house brands</li><li>Contains artificial sweeteners</li><li>Not vegan-friendly</li>',
        p1For: '<strong>Who is it for?</strong> For anyone who trains regularly and wants a proven quality protein. The safest choice if you do not know which to pick.',
        p2Title: '2. MyProtein Impact Whey Protein — Best value for money',
        p2CardTitle: 'MyProtein Impact Whey',
        p2CardRating: '★★★★ 4.5/5 · 8,500 ratings',
        p2CardPrice: '~35 € (1 kg)',
        p2Desc1: '<strong>MyProtein Impact Whey Protein</strong> is the best value protein on the market. Whey concentrate with 21 g of protein and 4.5 g of BCAA per serving. Available in over 40 flavours.',
        p2Desc2: 'MyProtein conducts independent lab tests and publishes the results. The 1 kg pack is ideal for trying before buying larger formats. Perfect for daily use.',
        p2Pros: '<li>Very competitive price</li><li>Public lab test results</li><li>Huge flavour variety</li><li>Good nutritional profile</li>',
        p2Cons: '<li>Concentrate only (no isolate)</li><li>Some flavours taste artificial</li><li>Digestion varies by person</li>',
        p2For: '<strong>Who is it for?</strong> For those seeking quality protein at the best possible price. Ideal for daily consumption without overspending.',
        p3Title: '3. MyProtein Creatine Monohydrate — Most popular creatine',
        p3CardTitle: 'MyProtein Creatine Monohydrate',
        p3CardRating: '★★★★★ 4.7/5 · 5,000 ratings',
        p3CardPrice: '~20 € (1 kg)',
        p3Desc1: '<strong>MyProtein Creatine Monohydrate</strong> is one of the best-selling supplements on Amazon Spain. Micronised powder, unflavoured, easy to mix. 100% pure, no additives.',
        p3Desc2: 'Creatine is the supplement with the most scientific evidence: it improves strength, power, and muscle recovery. Recommended dose: 3-5 g per day. A 1 kg tub lasts about 6-8 months.',
        p3Pros: '<li>100% pure creatine monohydrate</li><li>Micronised powder mixes well</li><li>Unbeatable price per kg</li><li>Solid scientific evidence</li>',
        p3Cons: '<li>Single ingredient (no miracles)</li><li>May cause initial bloating</li><li>Requires daily consistency</li>',
        p3For: '<strong>Who is it for?</strong> For any athlete training strength or high intensity. The basic supplement recommended by most sports nutrition experts.',
        p4Title: '4. Dymatize ISO 100 Hydrolyzed — Premium fast-absorption protein',
        p4CardTitle: 'Dymatize ISO 100',
        p4CardRating: '★★★★★ 4.6/5 · 4,200 ratings',
        p4CardPrice: '~55 € (1.8 kg)',
        p4Desc1: '<strong>Dymatize ISO 100</strong> is a hydrolysed whey protein with 25 g of protein per serving and only 0.5 g of fat. Processed for ultra-fast absorption, ideal for immediate post-workout recovery.',
        p4Desc2: 'Low in lactose, suitable for sensitive people. Contains 5.5 g of BCAA. Informed-Sport certified (free from banned substances). Excellent flavour compared to other proteins.',
        p4Pros: '<li>Ultra-fast absorption (hydrolysed)</li><li>Very low in lactose</li><li>Informed-Sport certified</li><li>Above average flavour</li>',
        p4Cons: '<li>High price per serving</li><li>Limited to 8 flavours</li><li>May be excessive if you do not train hard</li>',
        p4For: '<strong>Who is it for?</strong> For advanced athletes who train with high intensity and want the fastest possible recovery. Ideal for people with lactose intolerance.',
        p5Title: '5. HSN EvoWhey — Best Spanish brand protein',
        p5CardTitle: 'HSN EvoWhey',
        p5CardRating: '★★★★ 4.4/5 · 2,500 ratings',
        p5CardPrice: '~25 € (1 kg)',
        p5Desc1: '<strong>HSN EvoWhey</strong> is a Spanish-made whey concentrate with 22 g of protein per serving. No added oils or carbohydrates. Sweetened with stevia.',
        p5Desc2: 'HSN is a Spanish brand with its own lab and public analysis. EvoWhey offers excellent value for money and is available in over 20 flavours. Fast shipping within Spain.',
        p5Pros: '<li>Spanish manufacturing with quality control</li><li>Sweetened with stevia (no aspartame)</li><li>Very competitive price</li><li>Public lab test results</li>',
        p5Cons: '<li>Less known internationally</li><li>Concentrate only (not isolate)</li><li>Limited availability outside Spain</li>',
        p5For: '<strong>Who is it for?</strong> For those who prefer Spanish brands with in-house manufacturing. Ideal if you want a protein without artificial sweeteners at a good price.',
        finalTitle: 'Final comparison table',
        t2Th1: 'Product',
        t2Th2: 'Price',
        t2Th3: 'Protein/serving',
        t2Th4: 'Type',
        t2Th5: 'Rating',
        t2Th6: 'Best for',
        t2P1Best: 'Best seller',
        t2P2Best: 'Best value',
        t2P3Best: 'Basic supplement',
        t2P4Best: 'Premium fast',
        t2P5Best: 'Spanish brand',
        conclusionTitle: 'Conclusion — which supplement to choose?',
        conclusionIntro: 'It depends on your goal and budget:',
        conclusionP1: '<strong>🥇 For most people:</strong> <strong>ON Gold Standard Whey</strong> — the most reliable protein on the market, guaranteed quality.',
        conclusionP2: '<strong>🥈 If you want to save:</strong> <strong>MyProtein Impact Whey</strong> — excellent value for daily use.',
        conclusionP3: '<strong>🥉 Essential supplement:</strong> <strong>MyProtein Creatine</strong> — the basic with the most science backing it, 20 € for 8 months.',
        conclusionP4: '<strong>⚡ Fast recovery:</strong> <strong>Dymatize ISO 100</strong> — if you train hard and want the best for post-workout.',
        conclusionP5: '<strong>🇪🇸 Spanish brand:</strong> <strong>HSN EvoWhey</strong> — national quality with stevia and great price.',
        ctaBtn: '🛒 Check prices on Amazon',
        footerBrand: '💪 Best Supplements 2026',
        footerDesc: 'An up-to-date guide to the best-selling sports supplements on Amazon Spain. We compare proteins, creatine and more to help you choose.',
        footerLinks: 'Links',
        footerLegal: 'Legal',
        footerLinkHome: 'Home',
        footerLinkNutrition: 'Nutrition',
        buyingGuideTitle: 'Buying guide: how to choose supplements',
        buyingGuide1: '<strong>Whey protein.</strong> Choose concentrate for daily use (21-24 g protein/serving), isolate if you want less fat, and hydrolysate for fast absorption. Most people start with concentrate.',
        buyingGuide2: '<strong>Creatine.</strong> Monohydrate is the most studied and effective form. 3-5 g per day is enough. No need for cycling or loading. Take it every day, not just on training days.',
        buyingGuide3: '<strong>Clear goal.</strong> For muscle gain: whey protein + creatine. For performance: creatine + caffeine. For recovery: protein + glutamine. Do not buy what you do not need.',
        faqTitle: 'Frequently Asked Questions',
        faqQ1: 'Do I need supplements to build muscle?',
        faqA1: 'They are not essential but help meet daily protein requirements. If you already get 1.6-2 g of protein/kg of body weight from real food, you do not need them.',
        faqQ2: 'When should I take protein?',
        faqA2: 'The optimal time is after training, but total daily intake matters more than timing. Take it any time of day to meet your protein goals.',
        faqQ3: 'Is creatine safe?',
        faqA3: 'Yes, it is the most studied supplement in the world. Thousands of studies confirm its long-term safety at doses of 3-5 g daily. It does not harm kidneys in healthy people.',
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
