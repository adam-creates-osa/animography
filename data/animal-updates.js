// Small changes to animals in data/animals.js, without replacing that big file
// (so the photos the photo robot saved there stay safe).
// The game applies these right after loading data/animals.js.
// Later, if you copy a change into data/animals.js yourself, you can delete it here.
window.ANIMAL_UPDATES = {
  // Both toads are now listed as Extinct on the IUCN Red List → they become Secret Rare cards.
  "pass-stubfoot-toad": {
    status: "EX",
    needsCheck: false,
    summary: {
      en: "A small toad found only in Costa Rica's mountains. It was once common along forest streams, but it was last seen in 1986.",
      es: "Un sapito que vivía solo en las montañas de Costa Rica. Antes era común en las quebradas del bosque, pero se vio por última vez en 1986."
    },
    where: {
      en: "Stream banks in the cloud forests and rainforests of the Central Volcanic range and the Talamanca mountains, and nowhere else on Earth.",
      es: "Orillas de quebradas en los bosques nubosos y lluviosos de la cordillera Volcánica Central y de Talamanca, y en ningún otro lugar del mundo."
    },
    threats: {
      en: "Scientists think a fungus disease called chytrid, which attacks frogs and toads, wiped it out.",
      es: "Los científicos creen que una enfermedad por hongos llamada quitridio, que ataca a ranas y sapos, acabó con él."
    },
    help: {
      en: ["Its story helps us protect the harlequin toads that are still here, like the Variable Harlequin Toad.",
           "Clean your boots between hikes in different forests, so you don't carry the fungus.",
           "Never move frogs or toads from one place to another."],
      es: ["Su historia nos ayuda a proteger a los sapos arlequín que todavía están aquí, como el Sapo Arlequín Variable.",
           "Limpia tus botas entre caminatas en bosques diferentes, para no llevar el hongo.",
           "Nunca cambies ranas ni sapos de un lugar a otro."]
    },
    funFact: {
      en: "Its scientific name 'senex' means 'old man' in Latin. Males were bluish gray or black, while females could have lime or lemon-colored patches.",
      es: "Su nombre científico 'senex' significa 'anciano' en latín. Los machos eran gris azulado o negros, y las hembras podían tener manchas color lima o limón."
    },
    statusNote: {
      "en": "Listed as Extinct by the IUCN. Not seen since 1986, but Costa Rican biologists keep searching for it.",
      "es": "En la categoría Extinto de la UICN. No se ve desde 1986, pero biólogos costarricenses siguen buscándolo."
    },
    more: [
      {
        "icon": "🐸",
        "title": {
          "en": "What it was like",
          "es": "Cómo era"
        },
        "text": {
          "en": [
            "It was known from only three places on Earth, all in Costa Rica: one near Barva Volcano and two on the northern slopes of the Talamanca mountains, between 1,100 and 2,200 m high.",
            "It was small: males were about 3 cm long and females up to about 4 cm. It was active during the day and laid its eggs in mountain streams in July and August.",
            "A funny detail: scientists noticed it walked more often than it hopped!"
          ],
          "es": [
            "Solo se conocía en tres lugares del mundo, todos en Costa Rica: uno cerca del volcán Barva y dos en las laderas del norte de la cordillera de Talamanca, entre 1.100 y 2.200 m de altura.",
            "Era pequeño: los machos medían unos 3 cm y las hembras hasta unos 4 cm. Estaba activo de día y ponía sus huevos en quebradas de montaña en julio y agosto.",
            "Un detalle curioso: ¡los científicos notaron que caminaba más de lo que saltaba!"
          ]
        }
      },
      {
        "icon": "🔎",
        "style": "hope",
        "title": {
          "en": "Could it still be out there?",
          "es": "¿Podría seguir allá afuera?"
        },
        "text": {
          "en": [
            "There's a reason for hope! Its neighbor on Barva Volcano, Holdridge's toad, also vanished in 1986 and was declared extinct… and then it was found again in 2010! In the same years, a rain frog that disappeared in 1986 was rediscovered too.",
            "Harlequin toads are famous for surprises: scientists have found that up to 32 kinds once thought possibly extinct are still alive in the wild. Its cousin, the Variable Harlequin Toad, was found again in Costa Rica in 2003.",
            "Its forests are huge, steep and rainy, so a tiny toad by a hidden stream could be missed for years.",
            "🔬 What scientists say: it was listed as Extinct because long searches, in the right places and at the right time of year, found none. Biologists have searched streams in Braulio Carrillo, Tapantí and Orosi without luck. So the chance is small, but Costa Rican scientists haven't stopped looking."
          ],
          "es": [
            "¡Hay una razón para tener esperanza! Su vecino del volcán Barva, el sapo de Holdridge, también desapareció en 1986 y fue declarado extinto… ¡y en 2010 lo volvieron a encontrar! En esos mismos años también se redescubrió una ranita de lluvia que había desaparecido en 1986.",
            "Los sapos arlequín son famosos por dar sorpresas: los científicos encontraron que hasta 32 especies que se creían posiblemente extintas siguen vivas en la naturaleza. Su primo, el Sapo Arlequín Variable, se volvió a encontrar en Costa Rica en 2003.",
            "Sus bosques son enormes, empinados y lluviosos, así que un sapito junto a una quebrada escondida podría pasar desapercibido por años.",
            "🔬 Lo que dicen los científicos: se declaró Extinto porque largas búsquedas, en los lugares correctos y en la época correcta del año, no encontraron ninguno. Biólogos han buscado en quebradas de Braulio Carrillo, Tapantí y Orosi sin suerte. Así que la probabilidad es pequeña, pero los científicos costarricenses no han dejado de buscar."
          ]
        }
      }
    ],
    chat: {
      "status": {
        "en": [
          "Scientists say I'm extinct: no one has seen me since 1986. 😢 But my neighbor, Holdridge's toad, was 'extinct' too, and it was found again in 2010! So maybe… just maybe… a few of us are still walking by a hidden stream. 🐸"
        ],
        "es": [
          "Los científicos dicen que estoy extinto: nadie me ha visto desde 1986. 😢 Pero mi vecino, el sapo de Holdridge, también estaba 'extinto' ¡y lo volvieron a encontrar en 2010! Así que tal vez… solo tal vez… algunos de nosotros seguimos caminando junto a una quebrada escondida. 🐸"
        ]
      },
      "how": {
        "en": [
          "I'm a memory now… or am I? 😉 Some lost toads have been found again, so people keep looking for me. I love that you remember me! 💚"
        ],
        "es": [
          "Ahora soy un recuerdo… ¿o no? 😉 Algunos sapos perdidos se han vuelto a encontrar, así que la gente me sigue buscando. ¡Me encanta que te acuerdes de mí! 💚"
        ]
      }
    }
  },

  "chiriqui-harlequin-frog": {
    status: "EX",
    needsCheck: false,
    summary: {
      en: "A colorful harlequin frog from the Talamanca mountains. It was once easy to find, but it hasn't been seen in Costa Rica since 1996.",
      es: "Un colorido sapo arlequín de la cordillera de Talamanca. Antes era fácil de encontrar, pero no se ha visto en Costa Rica desde 1996."
    },
    where: {
      en: "Mountain stream banks in the Talamanca range of Costa Rica and nearby western Panama.",
      es: "Orillas de quebradas de montaña en la cordillera de Talamanca de Costa Rica y el oeste de Panamá."
    },
    threats: {
      en: "A fungus disease called chytrid was most likely the main cause. Forest loss and trout put into its streams made things worse.",
      es: "Lo más probable es que la causa principal fuera una enfermedad por hongos llamada quitridio. La pérdida de bosque y las truchas que se soltaron en sus quebradas empeoraron las cosas."
    },
    help: {
      en: ["Its story helps us protect the harlequin frogs that are still here, like the Variable Harlequin Toad.",
           "Clean your boots between hikes in different forests, so you don't carry the fungus.",
           "Support cloud forest reserves in the Talamanca mountains."],
      es: ["Su historia nos ayuda a proteger a los sapos arlequín que todavía están aquí, como el Sapo Arlequín Variable.",
           "Limpia tus botas entre caminatas en bosques diferentes, para no llevar el hongo.",
           "Apoya las reservas de bosque nuboso de la cordillera de Talamanca."]
    },
    funFact: {
      en: "Males and females looked different: males were often yellow or lime green, while females were bigger and usually colored differently.",
      es: "Machos y hembras se veían distintos: los machos solían ser amarillos o verde lima, y las hembras eran más grandes y casi siempre de otros colores."
    },
    statusNote: {
      "en": "Listed as Extinct by the IUCN. Not seen in Costa Rica since 1996 or in Panama since the late 1990s, but many of its harlequin cousins have been found again.",
      "es": "En la categoría Extinto de la UICN. No se ve en Costa Rica desde 1996 ni en Panamá desde finales de los años 90, pero muchos de sus primos arlequín se han vuelto a encontrar."
    },
    more: [
      {
        "icon": "🐸",
        "title": {
          "en": "What it was like",
          "es": "Cómo era"
        },
        "text": {
          "en": [
            "It lived along cool, rainy mountain streams of the Talamanca range, about 1,400 to 2,500 m high, in Costa Rica and western Panama.",
            "Males stayed close to the streams, while females liked shady forest and only visited wetter spots to breed.",
            "It was once super common: in 1991 scientists counted 348 of them along just 800 m of one stream in Costa Rica!"
          ],
          "es": [
            "Vivía junto a quebradas frías y lluviosas de la cordillera de Talamanca, entre unos 1.400 y 2.500 m de altura, en Costa Rica y el oeste de Panamá.",
            "Los machos se quedaban cerca de las quebradas, y las hembras preferían el bosque con sombra y solo visitaban lugares más húmedos para reproducirse.",
            "Antes era muy común: ¡en 1991 los científicos contaron 348 en solo 800 m de una quebrada en Costa Rica!"
          ]
        }
      },
      {
        "icon": "📜",
        "title": {
          "en": "How it disappeared",
          "es": "Cómo desapareció"
        },
        "text": {
          "en": [
            "In 1996, in Panama's Fortuna forest reserve, a scientist found dozens of dead and dying frogs of many kinds in streams where they had been plentiful just one year before. The chytrid fungus had arrived.",
            "1996: the last sighting in Costa Rica. Late 1990s: the last records in Panama. Searches in Panama in 2012 found none."
          ],
          "es": [
            "En 1996, en la reserva forestal Fortuna de Panamá, una científica encontró decenas de ranas muertas y moribundas de muchas especies en quebradas donde un año antes abundaban. Había llegado el hongo quitridio.",
            "1996: el último avistamiento en Costa Rica. Finales de los 90: los últimos registros en Panamá. Búsquedas en Panamá en 2012 no encontraron ninguno."
          ]
        }
      },
      {
        "icon": "🔎",
        "style": "hope",
        "title": {
          "en": "Could it still be out there?",
          "es": "¿Podría seguir allá afuera?"
        },
        "text": {
          "en": [
            "Its family gives us hope! About one-third of the harlequin frogs once presumed extinct have been rediscovered, up to 32 species. Its close cousin, the Variable Harlequin Toad, vanished from Costa Rica and Panama in the early 1990s and was found again in both countries.",
            "In Panama, the scientists who rediscovered the Variable Harlequin Toad in 2012 went on to confirm that eight more frog species hit hard by chytrid were somehow surviving.",
            "Its home, the Talamanca mountains, is one of the wildest, least-explored places in Central America, with many remote streams that are very hard to reach. Scientists also have a new trick: they can find traces of an animal's DNA in stream water, without even seeing it.",
            "🔬 What scientists say: its whole range is a place where the chytrid fungus can live, and searches have found nothing for almost 30 years. So the chance is small. But if a few survived, they might be resistant to the fungus, and that could help save other frogs."
          ],
          "es": [
            "¡Su familia nos da esperanza! Cerca de un tercio de los sapos arlequín que se creían extintos se han vuelto a encontrar, hasta 32 especies. Su primo cercano, el Sapo Arlequín Variable, desapareció de Costa Rica y Panamá a inicios de los 90 y se volvió a encontrar en los dos países.",
            "En Panamá, los científicos que redescubrieron el Sapo Arlequín Variable en 2012 después confirmaron que otras ocho especies de ranas muy golpeadas por el quitridio de alguna manera seguían vivas.",
            "Su hogar, la cordillera de Talamanca, es uno de los lugares más salvajes y menos explorados de Centroamérica, con muchas quebradas remotas muy difíciles de alcanzar. Además, los científicos tienen un truco nuevo: pueden encontrar rastros del ADN de un animal en el agua de una quebrada, sin siquiera verlo.",
            "🔬 Lo que dicen los científicos: todo el territorio donde vivía es un lugar donde el hongo quitridio puede vivir, y las búsquedas no han encontrado nada en casi 30 años. Así que la probabilidad es pequeña. Pero si algunos sobrevivieron, podrían ser resistentes al hongo, y eso podría ayudar a salvar a otras ranas."
          ]
        }
      }
    ],
    chat: {
      "status": {
        "en": [
          "Scientists say I'm extinct: no one has seen me since the 1990s. 😢 But lots of my harlequin cousins were 'extinct' too, and then they were found again! Maybe a few of us are hiding by a remote stream in the Talamanca mountains… 🏔️"
        ],
        "es": [
          "Los científicos dicen que estoy extinto: nadie me ha visto desde los años 90. 😢 Pero muchos de mis primos arlequín también estaban 'extintos' ¡y luego los volvieron a encontrar! Tal vez algunos de nosotros estemos escondidos junto a una quebrada remota de Talamanca… 🏔️"
        ]
      },
      "how": {
        "en": [
          "I'm a memory now… or am I? 😉 So many harlequin frogs have been found again that people still hope for me. I love that you remember me! 💚"
        ],
        "es": [
          "Ahora soy un recuerdo… ¿o no? 😉 Se han vuelto a encontrar tantos sapos arlequín que la gente todavía tiene esperanza por mí. ¡Me encanta que te acuerdes de mí! 💚"
        ]
      }
    }
  },

  // Extra-big fact sheet, with a "Could it still be out there?" section.
  "caribbean-monk-seal": {
    needsCheck: false,
    statusNote: {
      en: "Declared extinct by the IUCN and by the United States (2008). No one has confirmed seeing one since 1952, but some people still hope a few survive.",
      es: "Declarada extinta por la UICN y por Estados Unidos (2008). Nadie ha confirmado ver una desde 1952, pero algunas personas todavía tienen la esperanza de que sobrevivan unas pocas."
    },
    summary: {
      en: "The only seal that ever lived in the warm Caribbean Sea and the Gulf of Mexico. It was gentle and curious, rested on quiet sandy beaches, and was last confirmed in 1952. It's the only kind of seal known to have gone extinct because of people.",
      es: "La única foca que ha vivido en el cálido mar Caribe y el golfo de México. Era mansa y curiosa, descansaba en playas de arena tranquilas y se confirmó por última vez en 1952. Es la única especie de foca que sabemos que se extinguió por culpa de las personas."
    },
    where: {
      en: "Reefs, lagoons and remote sandy beaches all around the Caribbean: the Bahamas, the Florida Keys, the Gulf of Mexico, the Yucatán, the Greater and Lesser Antilles, and islands and cays near Central America, like Serranilla Bank off Nicaragua.",
      es: "Arrecifes, lagunas y playas de arena remotas por todo el Caribe: las Bahamas, los Cayos de Florida, el golfo de México, Yucatán, las Antillas Mayores y Menores, e islas y cayos cerca de Centroamérica, como el banco Serranilla frente a Nicaragua."
    },
    threats: {
      en: "For hundreds of years people hunted it for its oil and meat. Because it was calm and not afraid of people, it was very easy to catch. Its reef fish were also overfished. By the time it was protected in 1967, it was probably already gone.",
      es: "Durante cientos de años la cazaron por su aceite y su carne. Como era tranquila y no le tenía miedo a la gente, era muy fácil de atrapar. Además, los peces de arrecife que comía fueron sobrepescados. Cuando por fin la protegieron en 1967, probablemente ya había desaparecido."
    },
    help: {
      en: ["Its cousins, the Hawaiian and Mediterranean monk seals, still need protection. Learn about them and share their stories.",
           "If you ever see a seal on a Caribbean beach, keep your distance, take a photo and report it to local wildlife officials.",
           "Support marine protected areas and choose sustainable seafood, so reef animals have enough food."],
      es: ["Sus primas, la foca monje de Hawái y la del Mediterráneo, todavía necesitan protección. Aprende sobre ellas y comparte sus historias.",
           "Si alguna vez ves una foca en una playa del Caribe, mantén la distancia, tómale una foto y avisa a las autoridades de vida silvestre.",
           "Apoya las áreas marinas protegidas y escoge mariscos sostenibles, para que los animales del arrecife tengan suficiente comida."]
    },
    funFact: {
      en: "Tiny algae often grew on its fur, giving this seal a slightly green color, like a living reef rock!",
      es: "Algas diminutas solían crecer en su pelaje y le daban un tono un poco verde, ¡como una roca de arrecife viviente!"
    },
    more: [
      {
        icon: "🦭",
        title: { en: "What it was like", es: "Cómo era" },
        text: {
          en: ["It grew up to about 2.4 m (8 ft) long and weighed about 170 to 270 kg, as much as three or four grown-ups together!",
               "Its fur was brown or gray, with a lighter, yellowish belly. Young seals were paler than adults.",
               "On land it moved slowly, but it was curious and calm, and it showed little fear of people. Sadly, that made it easy to hunt."],
          es: ["Medía hasta unos 2,4 m de largo y pesaba entre 170 y 270 kg, ¡tanto como tres o cuatro adultos juntos!",
               "Su pelaje era café o gris, con la panza más clara y amarillenta. Las focas jóvenes eran más pálidas que los adultos.",
               "En tierra se movía despacio, pero era curiosa y tranquila, y casi no le tenía miedo a la gente. Por desgracia, eso la hacía fácil de cazar."]
        }
      },
      {
        icon: "🏝️",
        title: { en: "Life in the Caribbean", es: "Su vida en el Caribe" },
        text: {
          en: ["It most likely ate fish and crustaceans that it caught in shallow lagoons and coral reefs.",
               "Groups of about 20 to 40 seals, and sometimes up to 100, rested together on remote sandy beaches of islands and atolls.",
               "Pups were born on the beach, about 1 m long and 16 to 18 kg, with a black fuzzy coat. A seal could live about 20 years."],
          es: ["Lo más probable es que comiera peces y crustáceos que atrapaba en lagunas poco profundas y arrecifes de coral.",
               "Grupos de unas 20 a 40 focas, y a veces hasta 100, descansaban juntas en playas de arena remotas de islas y atolones.",
               "Las crías nacían en la playa, medían cerca de 1 m, pesaban de 16 a 18 kg y tenían un pelaje negro y peludito. Una foca podía vivir unos 20 años."]
        }
      },
      {
        icon: "📜",
        title: { en: "How it disappeared", es: "Cómo desapareció" },
        text: {
          en: ["1494: Sailors on Christopher Columbus's second voyage killed eight seals for food. It's the first European description of this animal.",
               "From the 1600s: Hunting parties sent by plantation owners killed many seals, sometimes hundreds in one night, for their oil.",
               "1850: There were already too few seals left to hunt for business.",
               "1897–1903: A female lived for about five and a half years at the New York Aquarium.",
               "1952: The last confirmed sighting, at Serranilla Bank, a group of cays off the coast of Nicaragua.",
               "2008: After a five-year search, the United States officially declared it extinct."],
          es: ["1494: Marineros del segundo viaje de Cristóbal Colón mataron ocho focas para comer. Es la primera descripción europea de este animal.",
               "Desde los años 1600: Grupos de cazadores enviados por dueños de plantaciones mataban muchas focas, a veces cientos en una sola noche, para sacarles el aceite.",
               "1850: Ya quedaban muy pocas focas como para cazarlas como negocio.",
               "1897–1903: Una hembra vivió unos cinco años y medio en el Acuario de Nueva York.",
               "1952: El último avistamiento confirmado, en el banco Serranilla, un grupo de cayos frente a la costa de Nicaragua.",
               "2008: Después de buscarla durante cinco años, Estados Unidos la declaró oficialmente extinta."]
        }
      },
      {
        icon: "🔎",
        style: "hope",
        title: { en: "Could it still be out there?", es: "¿Podría seguir allá afuera?" },
        text: {
          en: ["Some people hope so! Fishermen in Haiti and Jamaica still say they sometimes see seals. In a 1997 survey, some fishermen described animals whose size and color matched monk seals, and the scientists wrote that it's possible the Caribbean monk seal is not extinct.",
               "🌊 A hopeful idea: the blue holes of the Bahamas. The Bahamas were part of this seal's home, and they are full of blue holes and sea caves (Andros Island alone has about 200 blue holes!). Its cousin, the Mediterranean monk seal, hides in sea caves today to stay away from people. So could a few Caribbean monk seals be hiding somewhere quiet like that?",
               "🔬 What scientists say: it's very unlikely. Seals breathe air and need beaches to rest and have their pups, and a group of seals needs lots of fish, so someone would probably have spotted and photographed one by now. Many searches found none, and the seals people did see turned out to be Arctic seals that wandered far south, or escaped sea lions. A 1993 math study gave it only about a 5% chance of still being alive back then.",
               "So the chance is very, very small… but scientists would love to be proven wrong! A clear photo would be the proof they need. Other 'lost' animals have been found again, like Costa Rica's own Holdridge's toad."],
          es: ["¡Algunas personas creen que sí! Pescadores de Haití y Jamaica todavía dicen que a veces ven focas. En una encuesta de 1997, algunos pescadores describieron animales cuyo tamaño y color coincidían con focas monje, y los científicos escribieron que es posible que la foca monje del Caribe no esté extinta.",
               "🌊 Una idea con esperanza: los agujeros azules de las Bahamas. Las Bahamas eran parte del hogar de esta foca, y están llenas de agujeros azules y cuevas marinas (¡solo la isla Andros tiene unos 200 agujeros azules!). Su prima, la foca monje del Mediterráneo, se esconde hoy en cuevas marinas para alejarse de la gente. Entonces, ¿podrían unas pocas focas monje del Caribe estar escondidas en un lugar tranquilo así?",
               "🔬 Lo que dicen los científicos: es muy poco probable. Las focas respiran aire y necesitan playas para descansar y tener a sus crías, y un grupo de focas necesita muchos peces, así que alguien probablemente ya habría visto y fotografiado una. Muchas búsquedas no encontraron ninguna, y las focas que la gente sí vio resultaron ser focas del Ártico que se alejaron mucho al sur, o lobos marinos escapados. Un estudio matemático de 1993 le dio solo cerca de un 5% de probabilidad de seguir viva en ese entonces.",
               "Así que la probabilidad es muy, muy pequeña… ¡pero a los científicos les encantaría equivocarse! Una foto clara sería la prueba que necesitan. Otros animales 'perdidos' se han vuelto a encontrar, como el sapo de Holdridge de nuestra propia Costa Rica."]
        }
      },
      {
        icon: "💙",
        title: { en: "Its cousins today", es: "Sus primas hoy" },
        text: {
          en: ["Only two kinds of monk seals are left in the world: the Hawaiian monk seal (its closest relative) and the Mediterranean monk seal. Both have only small numbers left and are protected.",
               "Thanks to the Caribbean monk seal's sad story, people work harder today to protect its cousins' beaches and food."],
          es: ["Solo quedan dos tipos de focas monje en el mundo: la foca monje de Hawái (su pariente más cercana) y la foca monje del Mediterráneo. A las dos les quedan pocos individuos y están protegidas.",
               "Gracias a la triste historia de la foca monje del Caribe, hoy la gente trabaja más duro para proteger las playas y la comida de sus primas."]
        }
      }
    ],
    // Special chat replies for this animal (see data/chat.js)
    chat: {
      status: {
        en: ["Scientists say I'm extinct. No one has confirmed seeing one of us since 1952. 😢 But some people still hope a few of us are hiding somewhere quiet, maybe in the blue holes and sea caves of the Bahamas! 🌊 If you ever see a seal on a Caribbean beach, take a photo! 📸"],
        es: ["Los científicos dicen que estoy extinta. Nadie ha confirmado ver a una de nosotras desde 1952. 😢 ¡Pero algunas personas todavía creen que unas pocas estamos escondidas en un lugar tranquilo, tal vez en los agujeros azules y las cuevas marinas de las Bahamas! 🌊 Si alguna vez ves una foca en una playa del Caribe, ¡tómale una foto! 📸"]
      },
      where: {
        en: ["I used to rest on quiet sandy beaches all over the Caribbean: the Bahamas, the Florida Keys, the Gulf of Mexico, the Yucatán and cays near Central America. 🏝️ Some people wonder if a few of us are still hiding in the blue holes of the Bahamas… 🌊"],
        es: ["Antes descansaba en playas de arena tranquilas por todo el Caribe: las Bahamas, los Cayos de Florida, el golfo de México, Yucatán y cayos cerca de Centroamérica. 🏝️ Algunas personas se preguntan si unas pocas seguimos escondidas en los agujeros azules de las Bahamas… 🌊"]
      },
      how: {
        en: ["I'm a memory now… or am I? 😉 Some people think a few of us might still be hiding. Scientists say it's very unlikely, but I love that you remember me! 💚"],
        es: ["Ahora soy un recuerdo… ¿o no? 😉 Algunas personas creen que unas pocas podríamos seguir escondidas. Los científicos dicen que es muy poco probable, ¡pero me encanta que te acuerdes de mí! 💚"]
      }
    }
  },

  // The golden toad: extra sections, including "Could it still be out there?"
  "golden-toad": {
    statusNote: {
      "en": "Listed as Extinct by the IUCN (2004). Last confirmed in 1989, but people are still searching for it.",
      "es": "En la categoría Extinto de la UICN (2004). Se confirmó por última vez en 1989, pero la gente todavía lo busca."
    },
    more: [
      {
        "icon": "🟠",
        "title": {
          "en": "What it was like",
          "es": "Cómo era"
        },
        "text": {
          "en": [
            "It lived only in a tiny patch of cloud forest of about 4 km² north of Monteverde, smaller than many towns.",
            "It spent most of the year hidden underground. When the rainy season began, the toads came out for a few weeks to breed in little rain pools among tree roots, and then they disappeared again.",
            "Males were bright golden orange. Females were dark olive to black, with red spots outlined in yellow."
          ],
          "es": [
            "Vivía solo en un pedacito de bosque nuboso de unos 4 km² al norte de Monteverde, más pequeño que muchos pueblos.",
            "Pasaba casi todo el año escondido bajo tierra. Cuando empezaba la época lluviosa, los sapos salían unas pocas semanas para reproducirse en charquitos de lluvia entre las raíces de los árboles, y luego desaparecían otra vez.",
            "Los machos eran de un naranja dorado brillante. Las hembras eran de color oliva oscuro a negro, con manchas rojas bordeadas de amarillo."
          ]
        }
      },
      {
        "icon": "📜",
        "title": {
          "en": "How it disappeared",
          "es": "Cómo desapareció"
        },
        "text": {
          "en": [
            "Mid-1960s: scientists described it for the first time.",
            "1987: more than 1,500 golden toads were seen. But that year the dry season was unusually warm and dry.",
            "1988 and 1989: only a few toads appeared. In 1989 the last confirmed one was seen.",
            "2004: the IUCN declared it extinct. It became a symbol, all over the world, of frogs and toads in danger."
          ],
          "es": [
            "Mediados de los años 60: los científicos lo describieron por primera vez.",
            "1987: se vieron más de 1.500 sapos dorados. Pero ese año la época seca fue inusualmente caliente y seca.",
            "1988 y 1989: aparecieron solo unos pocos sapos. En 1989 se vio el último confirmado.",
            "2004: la UICN lo declaró extinto. Se convirtió en un símbolo, en todo el mundo, de las ranas y sapos en peligro."
          ]
        }
      },
      {
        "icon": "🔎",
        "style": "hope",
        "title": {
          "en": "Could it still be out there?",
          "es": "¿Podría seguir allá afuera?"
        },
        "text": {
          "en": [
            "Some people think so! Eladio Cruz, a local naturalist, says that in 1991, two years after the last confirmed sighting, he found a group of golden toads with tadpoles in a remote part of the Children's Eternal Rainforest. There's no photo, so scientists can't confirm it.",
            "Many valleys and ridges in those mountains have never been searched. A toad that spends most of the year underground and comes out for just a few weeks is very easy to miss.",
            "Other lost frogs of Monteverde came back! The green-eyed frog disappeared in the late 1980s and was found again in the early 2000s. In 2021, searchers even found frogs returning to mountain heights they had left.",
            "🔬 What scientists say: expeditions, including one in 2021 to the ridge where Eladio saw the toads, haven't found any. It's still officially extinct and the chance is small. But as the searchers say, not finding something doesn't always mean it's gone, so people keep looking every rainy season."
          ],
          "es": [
            "¡Algunas personas creen que sí! Eladio Cruz, un naturalista de la zona, cuenta que en 1991, dos años después del último avistamiento confirmado, encontró un grupo de sapos dorados con renacuajos en una parte remota del Bosque Eterno de los Niños. No hay foto, así que los científicos no lo pueden confirmar.",
            "Hay muchos valles y filas en esas montañas que nunca se han revisado. Un sapo que pasa casi todo el año bajo tierra y sale solo unas pocas semanas es muy fácil de pasar por alto.",
            "¡Otras ranas perdidas de Monteverde regresaron! La rana de ojos verdes desapareció a finales de los años 80 y se volvió a encontrar a inicios de los 2000. En 2021, los buscadores hasta encontraron ranas regresando a alturas de la montaña que habían abandonado.",
            "🔬 Lo que dicen los científicos: las expediciones, incluida una en 2021 a la fila donde Eladio vio los sapos, no han encontrado ninguno. Sigue oficialmente extinto y la probabilidad es pequeña. Pero como dicen los buscadores, no encontrar algo no siempre significa que ya no está, así que la gente sigue buscando cada época lluviosa."
          ]
        }
      }
    ],
    chat: {
      "status": {
        "en": [
          "Scientists say I'm extinct: the last confirmed golden toad was seen in 1989. 😢 But a local naturalist says he saw a group of us in 1991, and many valleys in Monteverde's mountains have never been searched… Maybe we're just hiding underground, waiting for the rain! 🌧️"
        ],
        "es": [
          "Los científicos dicen que estoy extinto: el último sapo dorado confirmado se vio en 1989. 😢 Pero un naturalista de la zona dice que vio un grupo de nosotros en 1991, y hay muchos valles en las montañas de Monteverde que nunca se han revisado… ¡Tal vez solo estamos escondidos bajo tierra, esperando la lluvia! 🌧️"
        ]
      },
      "where": {
        "en": [
          "I lived in one tiny patch of cloud forest above Monteverde, and nowhere else on Earth. 🌫️ Some people think a few of us might still be hiding in the remote valleys of the Children's Eternal Rainforest…"
        ],
        "es": [
          "Vivía en un pedacito de bosque nuboso arriba de Monteverde, y en ningún otro lugar del mundo. 🌫️ Algunas personas creen que unos pocos todavía podríamos estar escondidos en los valles remotos del Bosque Eterno de los Niños…"
        ]
      },
      "how": {
        "en": [
          "I'm a memory now… or am I? 😉 People still search for me every rainy season. I love that you remember me! 💚"
        ],
        "es": [
          "Ahora soy un recuerdo… ¿o no? 😉 La gente todavía me busca cada época lluviosa. ¡Me encanta que te acuerdes de mí! 💚"
        ]
      }
    }
  }
};

// Photos you chose yourself, from websites where the license isn't free or isn't known.
// Each one shows: "If you have a problem with this image, please feel free to contact us."
// These replace the robot's photo for that animal. To remove one, delete its line.
const CAL = n => ({ url: `https://calphotos.berkeley.edu/imgs/512x768/${n}.jpeg`, author: "CalPhotos, UC Berkeley", source: "CalPhotos",
  page: `https://calphotos.berkeley.edu/cgi/img_query?enlarge=${n.replace(/[_/]/g, "+")}` });
const INAT = (id, ext = "jpg") => ({ url: `https://inaturalist-open-data.s3.amazonaws.com/photos/${id}/medium.${ext}`,
  large: `https://inaturalist-open-data.s3.amazonaws.com/photos/${id}/large.${ext}`, author: "iNaturalist user", source: "iNaturalist",
  page: `https://www.inaturalist.org/photos/${id}` });
window.PHOTO_UPDATES = {
  "harris-rice-water-rat": { url: "https://www.mammaldiversity.org/mil-images/6595.webp", author: "Mammal Images Library", source: "Mammal Diversity Database", page: "https://www.mammaldiversity.org/" },
  "talamancan-shrew": { ...INAT(342828742, "jpeg") },
  "rodriguez-harvest-mouse": { url: "https://8costarica.weebly.com/uploads/4/8/9/0/48900699/95997_orig.jpg", author: "8costarica.weebly.com", source: "", page: "https://8costarica.weebly.com/" },
  "pass-stubfoot-toad": CAL("1111_1111/1111/9115"),
  "pico-blanco-toad": CAL("1111_1111/1111/9158"),
  "holdridges-toad": { url: "https://i0.wp.com/gonefroggin.com/wp-content/uploads/2023/01/1345.jpeg?w=1008&ssl=1", author: "Juan G. Abarca", source: "gonefroggin.com", page: "https://gonefroggin.com/2023/01/23/holdridges-toad-incilius-holdridgei/" },
  "escoces-robber-frog": { ...INAT(52227279, "png") },
  "fleischmanns-robber-frog": CAL("1111_1111/1111/9139"),
  "fringe-limbed-treefrog": CAL("0000_0000/1212/0104"),
  "tica-treefrog": { url: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Isthmohyla_tica_6009067_%28cropped%29.jpg", author: "Wikimedia Commons", source: "", page: "https://commons.wikimedia.org/wiki/File:Isthmohyla_tica_6009067_(cropped).jpg" },
  "calypso-treefrog": { ...INAT(142416) },
  "narrow-lined-treefrog": { ...INAT(269991961) },
  "marbled-salamander": CAL("1111_1111/1111/9210"),
  "blackish-salamander": CAL("0000_0000/1021/0637"),
  "shadow-salamander": CAL("0000_0000/0626/1168"),
  "guanacaste-moss-salamander": CAL("1111_1111/1111/8558"),
  "tico-knobtail": { url: "https://static.inaturalist.org/photos/696947838/medium.jpg", large: "https://static.inaturalist.org/photos/696947838/large.jpg", author: "iNaturalist user", source: "iNaturalist", page: "https://www.inaturalist.org/photos/696947838" },
  "wagners-knobtail": { url: "https://zenodo.org/record/818447/files/figure.png", author: "Zenodo", source: "", page: "https://zenodo.org/record/818447" },
  "andi-robber-frog": { ...INAT(142428) },
  "tapanti-moss-salamander": { url: "https://static.inaturalist.org/photos/706982993/medium.jpg", large: "https://static.inaturalist.org/photos/706982993/large.jpg", author: "iNaturalist user", source: "iNaturalist", page: "https://www.inaturalist.org/photos/706982993" },
  "broad-headed-rainfrog": CAL("0000_0000/0210/0341")
};

// Apply the updates
(function () {
  for (const [id, changes] of Object.entries(window.ANIMAL_UPDATES)) {
    const animal = (window.ANIMALS || []).find(a => a.id === id);
    if (animal) Object.assign(animal, changes);
  }
  for (const [id, photo] of Object.entries(window.PHOTO_UPDATES || {})) {
    const animal = (window.ANIMALS || []).find(a => a.id === id);
    if (animal) { animal.photo = { license: "", cardOk: true, contactNote: true, ...photo }; animal.photoWanted = false; }
  }
})();
